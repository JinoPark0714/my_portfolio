import React from 'react';
import Header from '../organic/Header';
import styled from 'styled-components';
import AboutMe from '../organic/AboutMe';
import Skill from '../organic/Skill';
import Project from '../organic/Project';
import Introduce from '../organic/Introduce';

/**
 * 메인
 * @returns 
 */
const MainPage = () => {
  const testUrl = `${process.env.REACT_APP_DEVPARK}/test_cors`;
  return (
    <BodyOuter>

      <BodyInner>
        <BodyHeader>
          <Header />
        </BodyHeader>

        <BodyIntroduce>
          <Introduce />
        </BodyIntroduce>

        <BodyAboutMe>
          <AboutMe />
        </BodyAboutMe>

        <BodySkill>
          <Skill />
        </BodySkill>

        <BodyProject>
          <Project />
        </BodyProject>

        <BodyFooter>
          <a href={testUrl}> test </a>
        </BodyFooter>
      </BodyInner>
    </BodyOuter>
  );
};

const BodyOuter = styled.div`
  width: auto;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content:center;
  align-items: center;
  
  @media screen and (max-width:1200px) {
    width: 1200px;
  };
`;

const BodyInner = styled.div`
  height: auto;
  flex-direction:column;
  display:flex;
  justify-content:center;
  align-items:center;
  /* margin-top: 70px; */
  border: 1px solid #000;
  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }
`;

const BodyHeader = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid rgb(225, 255, 243);
  box-shadow: 2px 1px 5px 0px;
  display: flex;
  justify-content:center;
  overflow:hidden;

  background-color:rgb(225, 255, 243);

  /* position: fixed;
  padding: 0px 0;
  top : 0; */
  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }

`;

const BodyIntroduce = styled.div`
  height: 100%;
  display: flex;
  justify-content:center;
  background-color:rgb(225, 255, 243);
    
  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }
`;

const BodyAboutMe = styled.div`
  width: 1200px;
  height: 100%;
  flex-direction : column;
  display: flex;
  justify-content:center;
  align-items: center;
  
  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }
`;

const BodySkill = styled.div`
  width: 1200px;
  height: 100%;
  flex-direction : column;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color:rgb(216, 229, 255);
  
  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }
`;

const BodyProject = styled.div`
  width: 1200px;
  height: 100%;
  flex-direction : column;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color:rgb(252, 234, 211);

  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }
`;

const BodyFooter = styled.div`
  width : 1200px;
  height : 100%;
  display: flex;
  justify-content:center;
  /* 화면 크기가 1200px 미만일 때 */
  @media screen and (max-width:1200px) {
    width: 1200px;
  }

  /* 화면 크기가 1200px 이상일 때 */
  @media screen and (min-width:1200px){
    width: 100%;
  }
`;


export default MainPage;