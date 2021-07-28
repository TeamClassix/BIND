import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  flex: 0 0 22%;
  align-items: center;
  margin-top: 40px;
`;
const ProductImageDiv = styled.div`
  display: flex;
`;
const ProductDetailsDiv = styled.div`
  background-color: #444444;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;
const SmallText = styled.div`
  text-transform: uppercase;
  font-size: 0.7em;
  margin-bottom: 7px;
`;
const TitleLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: #fff;
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

const ProductTile = ({ data }) => {
  const { name, id, default_price: price, category } = data;
  const [imageUrl, setImageUrl] = useState(null);
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
      <Link to={`${nameToSlug(name)}/${id}`}>
        <ProductImageDiv>
          <ProductImg alt="Filler" height="300px" width="100%" src={imageUrl || '/images/default.png'} />
        </ProductImageDiv>
      </Link>
      <ProductDetailsDiv>
        <SmallText>{category}</SmallText>
        <TitleDiv>
          <TitleLink to={`${nameToSlug(name)}/${id}`}>{name}</TitleLink>
        </TitleDiv>
        <SmallText>${price}</SmallText>
        <StarsDiv>
          {!rating.count
            ? 'No Reviews Yet'
            : (
              <>
                {
                  // Array(3).fill(<i className="fas fa-star" />)
                  // Array(3).fill(<i className="fas fa-star" />)
                }
                {/* <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
                ({ rating.count }) */}
              </>
            )}
        </StarsDiv>
      </ProductDetailsDiv>
    </OuterDiv>
  );
};

export default ProductTile;
