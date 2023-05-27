import React from 'react';
import { IconsBtn } from './iconBtn.styled';
export const IconBtn = ({ children, onClick, ...allyProps }) => (
  <IconsBtn type="button" onClick={onClick} {...allyProps}>
    {children}
  </IconsBtn>
);


