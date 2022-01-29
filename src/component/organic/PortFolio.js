import React from 'react';
import styled from 'styled-components';
import HorizonTitleLabel from '../molecule/HorizonTitleLabel';

const PortFolio = () => {
  const portfolio_url = process.env.REACT_APP_PORTFOLIO;
  const portfolio_img = "icon/project/portfolio.png";
  const kartrider_git = "https://github.com/jinopark0714/kartrider_api/git";
  return(
    <Outer>
      <Inner>
        <Title>
          PJH's Portfolio
        </Title>
      </Inner>
      <Inner>
        <ImgDiv>
          <Img src={portfolio_img}/>
        </ImgDiv>
        <Description>
          <p>
            학교 선배와 프로젝트를 같이 진행하고 있을 때, 이번 프로젝트가 끝나면
            포트폴리오를 만들어보라고 하였습니다. 어떤 서비스를 구현하는 프로그램을 만들었다면
            나 자신을 소개하는 포트폴리오를 만들어 본 적이 없었기 때문에
            이번 기회에 포트폴리오를 만들게 됐습니다.
          </p>
          <HorizonTitleLabel title="√ Main">
            유저 정보 검색, 유저 대전 정보 조회
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Domain">
            <a href={portfolio_url} target="_blank">myrider.ml</a>
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Github">
            <a href={kartrider_git} target="_blank">{kartrider_git}</a>
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Front-end">
            React.js
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Deployment">
            github
          </HorizonTitleLabel>
        </Description>
      </Inner>
    </Outer>
  );
};

const Outer = styled.div`
  height: auto;
  flex-direction:column;
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 25px;
`;

const Inner = styled.div`
  width: auto;
  height: auto;
  /* border: 1px solid #f00; */
  flex-direction: row;
  display: flex;
  justify-content:center;
`;

const Title = styled.div`
  height: 70px;
  text-align:center;
  font-size: 25pt;
  font-weight: 700;
`;

const Description = styled.div`
  flex-direction:column;
  display: flex;
  font-size: 12pt;
  padding: 5px;
`;

const Img = styled.img`
  width: 350px;
  height: 270px;
`;

const ImgDiv = styled.div`
  margin: 15px;
`;

export default PortFolio;