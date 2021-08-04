import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '#components/Modal';
import { AppContext, RelatedProductsContext } from '#contexts';

const ControlDiv = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end;
  color: #ffec66;
  font-size: 1.5em;
  margin-right: 20px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  & > * {
    cursor: pointer;
    margin-bottom: 10px;
  }
`;
const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #333333;
  flex: 0 0 240px;
  align-items: center;
  background-color: #c6cfb7;
`;
const ProductImageDiv = styled.div`
  display: flex;
`;
const ProductDetailsDiv = styled.div`
  color: #545454;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #333333;
`;
const SmallText = styled.div`
  text-transform: uppercase;
  font-size: 0.7em;
  margin-bottom: 6px;
`;
const TitleLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: #3c3c3c;
`;
const TitleDiv = styled.div`
  margin-bottom: 7px;
`;
const ProductImg = styled.img`
  object-fit: cover;
`;
const StarsDiv = styled.div`
  font-size: 0.75em;
`;

const nameToSlug = (name) => (
  name
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
);

const getImage = async (id) => {
  const cachedStyle = localStorage.getItem(`style_${id}`);
  if (cachedStyle) {
    return [null, JSON.parse(cachedStyle)];
  }
  try {
    const productStyles = await axios({
      url: `/api/products/${id}/styles`,
      method: 'GET',
    });
    localStorage.setItem(`style_${id}`, JSON.stringify(productStyles.data.data));
    return [null, productStyles.data.data];
  } catch (e) {
    return [e];
  }
};

const getReviewsMeta = async (id) => {
  // localhost:5000/api/reviews/meta?product_id=25167
  const cachedMeta = localStorage.getItem(`meta_${id}`);
  if (cachedMeta) {
    return [null, JSON.parse(cachedMeta)];
  }
  try {
    const reviewsMeta = await axios({
      method: 'GET',
      url: '/api/reviews/meta',
      params: {
        product_id: id,
      },
    });
    localStorage.setItem(`meta_${id}`, JSON.stringify(reviewsMeta.data.data));
    return [null, reviewsMeta.data.data];
  } catch (e) {
    return [e];
  }
};

const ratingToStars = (avg) => {
  let fullStars = Math.floor(avg);
  let halfStars = 0;
  const remainder = avg - fullStars;
  if (remainder >= 0.75) {
    fullStars += 1;
  } else if (remainder >= 0.25) {
    halfStars += 1;
  }
  const emptyStars = 5 - fullStars - halfStars;
  let starSet = new Array(fullStars).fill(<i className="fas fa-star" />);
  starSet = starSet.concat(new Array(halfStars).fill(<i className="fas fa-star-half-alt" />));
  starSet = starSet.concat(new Array(emptyStars).fill(<i className="far fa-star" />));
  return starSet;
};

const getProductInfo = async (id) => {
  const cached = localStorage.getItem(`product_${id}`);
  if (cached) {
    return [null, JSON.parse(cached)];
  }
  try {
    const result = await axios({
      method: 'GET',
      url: `/api/products/${id}`,
    });
    localStorage.setItem(`product_${id}`, JSON.stringify(result.data.data));
    return [null, result.data.data];
  } catch (e) {
    return [e];
  }
};

const C = styled.div`
  text-transform: uppercase;
  font-size: 0.825em;
  margin-bottom: 10px;
`;
const Left = styled.td`
  text-align: left;
  width: 33%;
  border-bottom: 1px dashed #8787874d;
  font-size: 0.8em;
`;
const Center = styled.td`
  text-align: center;
  width: 33%;
  font-weight: bold;
  font-size: 0.85em;
  text-transform: uppercase;
  border-bottom: 1px dashed #8787874d;
`;
const Right = styled.td`
  text-align: right;
  width: 33%;
  border-bottom: 1px dashed #8787874d;
  font-size: 0.8em;
`;

const ComparisonModal = ({ id, cId }) => {
  const [title, setTitle] = useState(null);
  const [table, setTable] = useState([]);
  useEffect(async () => {
    console.log(id, cId);
    const both = [getProductInfo(id), getProductInfo(cId)];
    const [res1, res2] = await Promise.all(both);
    const combined = {};
    if (!res1[0] && !res2[0]) {
      setTitle([res1[1].name, res2[1].name]);
      res1[1].features.forEach(({ feature, value }) => {
        console.log('1', feature);
        combined[feature] = [value, null];
      });
      res2[1].features.forEach(({ feature, value }) => {
        console.log('2', feature);
        if (combined[feature]) {
          combined[feature][1] = value;
        } else {
          combined[feature] = [null, value];
        }
      });
      setTable(Object.entries(combined));
    }
  }, []);
  return (
    <>
      <C>Comparing</C>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginBottom: 8,
      }}>
        <div>{title ? title[0] : '-'}</div>
        <div>{title ? title[1] : '-'}</div>
      </div>
      <table>
        {table.map((item) => {
          console.log(item);
          return (
            <tr>
              <Left>{item[1][0]}</Left>
              <Center>{item[0]}</Center>
              <Right>{item[1][1]}</Right>
            </tr>
          );
        })}
      </table>
    </>
  );
};

const ProductTile = ({ data }) => {
  const { name, id, default_price: price, category } = data;
  const [imageUrl, setImageUrl] = useState(null);
  const { idState } = useContext(AppContext);
  const { favoriteState } = useContext(RelatedProductsContext);
  const [favorites, setFavorites] = favoriteState || [[], null];
  const [useIdState, setIdState] = idState;
  const [rating, setRating] = useState({
    avg: 0,
    count: 0,
  });
  const [modalActive, setModalActive] = useState(false);
  // const [favorites, setFavorites] = useState([]);
  const toggleFavorite = () => {
    // console.log('toggle!');
    if (favorites.includes(id)) {
      // is a favorite, toggle off
      const filtered = favorites.filter((f) => f !== id);
      // console.log(filtered);
      setFavorites(filtered);
      localStorage.setItem('favorites', JSON.stringify(filtered));
    } else {
      // console.log(favorites.concat([id]));
      setFavorites(favorites.concat(id));
      localStorage.setItem('favorites', JSON.stringify(favorites.concat(id)));
      // not a favorite, toggle on
    }
  };
  useEffect(async () => {
    // Stored as an array of ID's
    const [err, styleData] = await getImage(id);
    if (err || !styleData.results.length) return;
    const defaultItem = styleData.results.find((item) => (
      item['default?']
    )) || styleData.results[0];
    const defaultPhoto = defaultItem.photos.find((item) => (
      item['default?']
    )) || defaultItem.photos[0];
    setImageUrl(defaultPhoto.thumbnail_url);
  }, []);
  useEffect(async () => {
    const [err, { ratings }] = await getReviewsMeta(id);
    if (err) return;
    const values = Object.keys(ratings);
    let total = 0;
    let count = 0;
    values.forEach((value) => {
      total += Number(value) * Number(ratings[value]);
      count += Number(ratings[value]);
    });
    const avg = total / count;
    setRating({
      avg,
      count,
    });
  }, []);
  return (
    <OuterDiv>
      {favoriteState && (
        <ControlDiv>
          <div onClick={toggleFavorite} className="add-to-outfit">
            <i className={`${favorites.includes(id) ? 'fas' : 'far'} fa-star`} />
          </div>
          <div onClick={() => {console.log('here'); setModalActive(true);}} className="compare">
            <i className="fas fa-not-equal" />
          </div>
          {modalActive && (
            <Modal toggle={setModalActive}>
              <ComparisonModal id={id} cId={useIdState} />
            </Modal>
          )}
        </ControlDiv>
      )}
      <Link onClick={() => setIdState(id)} to={`/${nameToSlug(name)}/${id}`}>
        <ProductImageDiv>
          <ProductImg alt="Filler" height="300px" width="100%" src={imageUrl || '/images/default.png'} />
        </ProductImageDiv>
      </Link>
      <ProductDetailsDiv>
        <SmallText>{category}</SmallText>
        <TitleDiv>
          <TitleLink onClick={() => setIdState(id)} to={`/${nameToSlug(name)}/${id}`}>{name}</TitleLink>
        </TitleDiv>
        <SmallText>${price}</SmallText>
        <StarsDiv>
          {!rating.count
            ? 'No Reviews Yet'
            : <div>{ratingToStars(rating.avg)}</div>}
        </StarsDiv>
      </ProductDetailsDiv>
    </OuterDiv>
  );
};

export default ProductTile;
