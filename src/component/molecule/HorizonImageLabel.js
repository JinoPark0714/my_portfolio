import React from 'react';
import styled from 'styled-components';

const HorizonImageLabel = (props) => {
  return(
    <Outer>
      <ImgDiv>
        <Img src={props.sourcePath}/>
      </ImgDiv>
      <TextDiv>
        <TitleDiv>{props.title}</TitleDiv>
        <DescriptionDiv>{props.text}</DescriptionDiv>
      </TextDiv>
    </Outer>
  )
}

const Outer = styled.div`
  width: auto;
  height: auto;
  /* border: 1px solid #000; */
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const ImgDiv = styled.div`
  width: 100px;
  height: 100px;
  /* border: 1px solid #f00; */
  display: flex;
  justify-content: center;
  align-items:center;
`;

const TextDiv = styled.div`
  width: 200px;
  height: 100px;
  /* border: 1px solid #f00; */
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items:left;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const TitleDiv = styled.div`
  width: 100px;
  font-size: 13pt;
  font-weight: 900;
`;

const DescriptionDiv = styled.div`
  width: auto;
  font-size: 11pt;
`;


export default HorizonImageLabel;