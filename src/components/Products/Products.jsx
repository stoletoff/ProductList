import React from 'react';
import {ProductName, ProductList, DeleteButton, ProductItem} from './Product.styled'
export const Products = ({ products }) => (
  <ProductList>
    {products.map(({ id, text }) => (
      <ProductItem key={id}>
        <ProductName>{text}</ProductName>
        <DeleteButton>Delete</DeleteButton>
      </ProductItem>
    ))}
  </ProductList>
);
