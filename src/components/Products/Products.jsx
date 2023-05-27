import React from 'react';
import { IconBtn } from '../iconBtn';
import {ReactComponent as DeleteItem} from '../../icons/bin.svg'
import {
  ProductName,
  ProductList,
  // DeleteButton,
  ProductItem,
} from './Product.styled';
export const Products = ({ products, onDeleteProduct, onToggleCompleted }) => (
  <ProductList>
    {products.map(({ id, text, completed, quantity }) => (
      <ProductItem key={id}>
        <input
          type="checkbox"
          className="TodoList_chekbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <ProductName>{text}</ProductName>
        <ProductName>{quantity}</ProductName>
        <IconBtn onClick={() => onDeleteProduct(id)}><DeleteItem/></IconBtn>
        {/* <DeleteButton onClick={() => onDeleteProduct(id)}>Delete</DeleteButton> */}
      </ProductItem>
    ))}
  </ProductList>
);
