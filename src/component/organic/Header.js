import React from 'react';
import styled from 'styled-components';
import HorizonCategory from '../molecule/HorizonCategory';
import HeaderService from './service/Header';

const Header = () => {
  const headerService = HeaderService;
  // skill 클릭
  const onClickSkill = () => {
    alert("skill click");
  }

  // AboutMe 클릭
  const onClickAboutMe = () => {
    alert("about me click");
  }

  // Projects 클릭
  const onClickProjects = () => {
    alert("projects click");
  }

  return(
    <HeaderDiv>
      <HeaderTitleCenterDiv>
        <h2>PJH's Portfolio</h2>
      </HeaderTitleCenterDiv>
      <HeaderTitleRightDiv>
        <HorizonCategory
          onClickAboutMe={onClickAboutMe}
          onClickSkill={onClickSkill}
          onClickProjects={onClickProjects}/>
      </HeaderTitleRightDiv>
    </HeaderDiv>
  );
};


const HeaderDiv = styled.div`
  width: 1200px;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const HeaderTitleCenterDiv = styled.div`
  width: 60%;
  font-size:20pt;
  font-family: initial;
  display:flex;
  justify-content:left;
  align-items: center;
  /* border: 1px solid #000000; */
`;


const HeaderTitleRightDiv = styled.div`
  width: 40%;
  display:flex;
  justify-content:center;
  align-items: center;
  /* border: 1px solid #000; */
`;


export default Header;