import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputBox onChange={props.onChange}></InputBox>
  );
};

const InputBox = styled.input`
  border-radius: 0.5rem;
  width: 150px;
  height: 20px;
  color: black;
  text-align:center;
  background: white;
`;

export default Input;