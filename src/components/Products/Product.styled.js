import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 390px;
`;

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 15px 25px;
  border-radius: 25px;
  width: 300px;
  border: 2px solid green;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  background: none;
  color: white;
  border: none;
  height: 48px;
  padding: 0 24px 0 16px;
  letter-spacing: 0.25px;
  border-radius: 24px;
  cursor: pointer;
  box-shadow: 0 9px #999;
  background-color: #3e8e41;
  &:hover,
  :focus {
    background-color: red;
    box-shadow: 0 0 0 4px lighten(red, 40%);
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ProductName = styled.p`
  font-size: 24px;
  color: green;
`;
