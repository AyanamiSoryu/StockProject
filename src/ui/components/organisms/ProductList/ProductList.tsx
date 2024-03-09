import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

interface Product {
  id: string;
  product: string;
  price: number;
  brand: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 24px;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
  width: 245px;
  height: 15vh;
  border: 1px solid #f5f5f5f5;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
  color: #202020;

  font-family: Inter, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.59px;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }

  @media (max-width: 600px) {
    width: 235px;
  }
`;

const StyledList = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 40px;
`;

const StyledProductName = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
`;

const StyledListName = styled.h2`
  color: #202020;
  margin: 20px 0 0 0;
  font-family: Inter, serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.59px;
`;

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ProductListContainer>
      <StyledListName>Product List</StyledListName>
      <StyledList>
        {products.map((product) => (
          <ProductItem key={uuid()} as='a' href='#'>
            {/* <div>ID: {product.id}</div> */}
            <StyledProductName>{product.product}</StyledProductName>
            {product.brand ? <div>{product.brand}</div> : null}
            <div>Price: {product.price}</div>
          </ProductItem>
        ))}
      </StyledList>
    </ProductListContainer>
  );
};

export default ProductList;
