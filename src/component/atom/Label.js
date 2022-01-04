import React from 'react';
import styled from 'styled-components'


const Label = (props) => {
  return(
    <LabelBox size={props.fontSize}>{props.value}</LabelBox>
  );
};

const LabelBox = styled.label`
  font-size: ${props => props.fontSize};
`;


LabelBox.defaultProps = {
  fontSize : 20
}



export default Label;