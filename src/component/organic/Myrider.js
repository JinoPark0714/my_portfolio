import React from 'react';
import styled from 'styled-components';
import HorizonTitleLabel from '../molecule/HorizonTitleLabel';


const Myrider = () => {
  const kartrider_url = process.env.REACT_APP_KARTRIDER;
  const kartrider_img = "icon/project/kartrider.png";
  const kartrider_git = "https://github.com/jinopark0714/kartrider_api/git";
  return(
    <Outer>
      <Inner>
        <Title>
          Myrider
        </Title>
      </Inner>
      <Inner>
        <ImgDiv>
          <Img src={kartrider_img}/>
        </ImgDiv>
        <Description>
          <p>
            저는 카트라이더를 재밌게 하고 있습니다. 카트라이더 개발사에서 
            open API를 제공해주고 있는 것을 확인하고. 대전 정보 조회 앱을
            내가 직접 만들어보고 싶다는 생각에 구현을 하게 됐습니다.
            지인의 요청으로 닉네임을 검색하여 유저 정보 유무를 알려주는 기능도 구현하였습니다.
          </p>
          <HorizonTitleLabel title="√ Main">
            유저 정보 검색, 유저 대전 정보 조회
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Domain">
            <a href={kartrider_url} target="_blank">myrider.ml</a>
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Github">
            <a href={kartrider_git} target="_blank">{kartrider_git}</a>
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Back-end">
            Node.js (express)
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Front-end">
            ejs (express SSR)
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Deployment">
            aws(ec2, route53), freenom, github
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
  height: 250px;
`;

const ImgDiv = styled.div`
  margin:15px;
`;

export default Myrider;