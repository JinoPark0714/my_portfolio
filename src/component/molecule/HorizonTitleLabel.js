import React from 'react';
import styled from 'styled-components';

const HorizontalLabelTitle = (props) => {
  return (
    <Outer>
      <DivTitle>
        {props.title}
      </DivTitle>
      <DivText>
        {props.children}
      </DivText>
    </Outer>
  );
};

const Outer = styled.div`
  width: 410px;
  height: auto;
  flex-direction:row;
  display: flex;
  justify-content: left;
  margin : 5px;
`;

const DivTitle = styled.div`
  width : 150px;
  font-weight: 700;
  font-size: 15pt;
`;

const DivText = styled.div`
  margin : 5px;
  width : 250px;
  font-size: 12pt;
  word-wrap:break-word;
`;



export default HorizontalLabelTitle;