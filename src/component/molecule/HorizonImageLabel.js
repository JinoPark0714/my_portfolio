import React from 'react';
import styled from 'styled-components';

const HorizonImageLabel = (props) => {
  return(
    <Outer>
      <ImgDiv>
        <Img src={props.sourcePath}/>
      </ImgDiv>
      <TextDiv>
        <div>{props.title}</div>
        <div>{props.text}</div>
        <div>{props.sub}</div>
      </TextDiv>
    </Outer>
  )
}

const Img = styled.img`
  width: 50px;
  height: 50px;
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
  align-items:center;
`;

const Outer = styled.div`
  width: auto;
  height: auto;
  /* border: 1px solid #000; */
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export default HorizonImageLabel;