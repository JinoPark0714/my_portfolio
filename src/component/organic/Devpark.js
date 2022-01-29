import React from 'react';
import styled from 'styled-components';
import HorizonTitleLabel from '../molecule/HorizonTitleLabel';

const Devpark = () => {
  const devpark_url = process.env.REACT_APP_DEVPARK;
  const devpark_img = "icon/project/weather.png";
  const devpark_git = "https://github.com/jinopark0714/weather_app.git";
  return (
    <Outer>
      <Inner>
        <Title>
          날씨 보기 앱
        </Title>
      </Inner>
      <Inner>
        <ImgDiv>
          <Img src={devpark_img} />
        </ImgDiv>
        <Description>
          <p>
            휴대폰에 기본적으로 제공해주는 날씨 앱은 3시간 단위로 알려줍니다.
            저는 1시간 단위의 날씨 정보를 보는 것을 원했기 때문에 날씨 정보를 알려주는 openWeatherMap API를 알게 됐고,
            직접 날씨 앱을 만들었습니다.
          </p>
          <HorizonTitleLabel title="√ Main">
            지역을 선택하여 1시간 간격으로 날씨 보기
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Domain">
            <a href={devpark_url} target="_blank">devpark.ml</a>
          </HorizonTitleLabel>
          <HorizonTitleLabel title="√ Github">
            <a href={devpark_git} target="_blank">{devpark_git}</a>
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
  )
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
  height: 400px;
`;

const ImgDiv = styled.div`
  margin: 15px;
`;

export default Devpark;