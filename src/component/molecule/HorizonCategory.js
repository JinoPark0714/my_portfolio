import React, {useEffect} from 'react';
import styled from 'styled-components';

const HorizontalImage = (props) => {
  return (
    <HorizonForm>
      <AboutMeDiv onClick={props.onClickAboutMe}>
        About me
      </AboutMeDiv>
      <Div>
        <h2 onClick={props.onClickSkill}>Skill</h2>
      </Div>
      <Div>
        <h2 onClick={props.onClickProjects}>Projects</h2>
      </Div>
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

const AboutMeDiv = styled.div`
  width : 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 20pt;
  font-weight:700;
  scroll-behavior: smooth;
  :hover{
    cursor: pointer;
  }
`;

const Div = styled.div`
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