import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 0 auto;
  margin-right: 0 auto;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
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
  background-color: grey;
  &:hover,
  :focus {
    background-color: #3e8e41;
    box-shadow: 0 0 0 4px lighten(red, 40%);
`;

export const CloseBtn = styled.button`
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
  background-color: grey;
  &:hover,
  :focus {
    background-color: #3e8e41;
    box-shadow: 0 0 0 4px lighten(red, 40%);
`;
