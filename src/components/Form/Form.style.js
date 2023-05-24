import styled from 'styled-components';

import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 0 auto;
  margin-right: 0 auto;
  padding: 0;
`;

export const InputName = styled(Field)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  padding: 10px;
  border-radius: 25px;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;

  padding: 5px 15px;
  border-radius: 25px;
  width: 300px;
  border: 2px solid green;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  margin-left: 0 auto;
  margin-right: 0 auto;
`;

 export const AddButton = styled.button`
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
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
