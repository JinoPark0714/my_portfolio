import React from 'react';
import styled from 'styled-components';

const Skill = () => {
  const skillPath = process.env.REACT_APP_SKILL_PATH;
  
  // service
  const ec2 = `${skillPath}/ec2.png`;
  const route53 = `${skillPath}/route53.png`;
  const freenom = `${skillPath}/freenom.png`;
  const apache = `${skillPath}/apache.png`;
  
  // configuration management
  const git = `${skillPath}/git.png`;
  const github = `${skillPath}/github.png`;
  const sourcetree = `${skillPath}/sourcetree.png`;
  
  // backend
  const nodejs = `${skillPath}/nodejs.png`;
  const mysql = `${skillPath}/mysql.png`;
  
  // frontend
  const react = `${skillPath}/react.png`;
  const styled_component = `${skillPath}/styled_component.png`;
  const html_css_js = `${skillPath}/html_css_js.png`;
  return(
    <Outer>
      <Inner>
        <Title>Skill</Title>
      </Inner>
      <Img>
        <ImgDiv>
          <Div>service</Div>
          <img src={ec2} width="150px" height="150px"/>
          <img src={route53} width="200px" height="100px"/>
          <img src={freenom} width="200px" height="100px"/>
          <img src={apache} width="200px" height="100px"/>
        </ImgDiv>
        <ImgDiv>
          <Div>Version Control</Div>
          <img src={git} width="200px" height="100px"/>
          <img src={github} width="200px" height="100px"/>
          <img src={sourcetree} width="200px" height="100px"/>
        </ImgDiv>
        <div>
          <ImgDiv>
            <Div>Back-end</Div>
            <img src={nodejs} width="200px" height="100px"/>
            <img src={mysql} width="150px" height="100px"/>
          </ImgDiv>
          <ImgDiv>
            <Div>Front-end</Div>
            <img src={react} width="200px" height="100px"/>
            <img src={html_css_js} width="200px" height="125px"/>
            <img src={styled_component} width="150px" height="125px"/>
          </ImgDiv>
        </div>
      </Img>

    </Outer>
  );
}


const Outer = styled.div`
  width: 900px;
  height: auto;
  flex-direction:column;
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 25px;
`;

const Inner = styled.div`
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const ImgDiv = styled.div`
  width: auto;
  height: auto;
  border-radius: 0.5rem;
  border: 3px solid #000;
  flex-direction:column;
  display:flex;
  justify-content:top;
  align-items:center;
  background-color: #fff;

  margin: 15px;
  padding: 15px;
`;

const Img = styled.div`
  width: auto;
  height:auto;
  flex-direction:row;
  display:flex;
  justify-content:center;
  align-items: baseline;
`;

const Title = styled.div`
  height: 100px;
  text-align:center;
  font-size: 25pt;
  font-weight: 700;
`;

const Div = styled.div`
  height: 100px;
  text-align:left;
  color: #ff8686;
  font-size: 18pt;
  font-weight: 700;
`;

export default Skill;