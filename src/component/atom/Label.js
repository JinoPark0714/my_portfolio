import React from 'react';
import styled from 'styled-components'

const LabelBox = styled.label`
  font-size: 15pt;
`;

const Label = (props) => {
  return(
    <LabelBox>{props.value}</LabelBox>
  );
};





export default Label;