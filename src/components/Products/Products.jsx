import React from 'react';
import {ProductName, ProductList, DeleteButton, ProductItem} from './Product.styled'
export const Products = ({ products, onDeleteProduct }) => (
  <ProductList>
    {products.map(({ id, text }) => (
      <ProductItem key={id}>
        <ProductName>{text}</ProductName>
        <DeleteButton onClick={() => onDeleteProduct(id)}>Delete</DeleteButton>
      </ProductItem>
    ))}
  </ProductList>
);
