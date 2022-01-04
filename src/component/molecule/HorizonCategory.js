import React, {useEffect} from 'react';
import styled from 'styled-components';

const HorizontalImage = (props) => {
  return (
    <HorizonForm>
      <DivImage>
        <h2 onClick={props.onClickAboutMe}>About me</h2>
      </DivImage>
      <DivImage>
        <h2 onClick={props.onClickSkill}>Skill</h2>
      </DivImage>
      <DivImage>
        <h2 onClick={props.onClickProjects}>Projects</h2>
      </DivImage>
    </HorizonForm>
  );
};


const HorizonForm = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: right;
`;

const DivImage = styled.div`
  width : 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items:center;
  :hover{
    cursor: pointer;
  }
`;


export default HorizontalImage;