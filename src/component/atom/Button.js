import React from 'react';
import styled, {css}from 'styled-components';

const Button = (props) => {
  return (
    <NormalButton 
      onClick={props.onClick} 
      color={props.color}>{props.value}</NormalButton>
  );
};

const NormalButton = styled.button`
  width: 100px;
  height: 40px;
  background-color : ${props => props.color};
`;

NormalButton.defaultProps = {
  color : "rgb(255, 158, 158)"
}

export default Button;