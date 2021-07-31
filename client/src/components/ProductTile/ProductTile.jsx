import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '#contexts';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #333333;
  flex: 0 0 22%;
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
  try {
    const productStyles = await axios({
      url: `/api/products/${id}/styles`,
      method: 'GET',
    });
    return [null, productStyles.data.data];
  } catch (e) {
    return [e];
  }
};

const getReviewsMeta = async (id) => {
  // localhost:5000/api/reviews/meta?product_id=25167
  try {
    const reviewsMeta = await axios({
      method: 'GET',
      url: '/api/reviews/meta',
      params: {
        product_id: id,
      },
    });
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

const ProductTile = ({ data }) => {
  const { name, id, default_price: price, category } = data;
  const [imageUrl, setImageUrl] = useState(null);
  const { idState } = useContext(AppContext);
  const [useIdState, setIdState] = idState;
  const [rating, setRating] = useState({
    avg: 0,
    count: 0,
  });
  useEffect(async () => {
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
            : (
              <>
                <div>{ratingToStars(rating.avg)}</div>
                {/* <div>{`(${rating.avg.toFixed(2)})`}</div> */}
              </>
            )}
        </StarsDiv>
      </ProductDetailsDiv>
    </OuterDiv>
  );
};

export default ProductTile;
