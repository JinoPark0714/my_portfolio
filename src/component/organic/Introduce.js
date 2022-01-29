import React from 'react';
import styled from 'styled-components'
const Introduce = () => {
  return (
    <Outer>
      <Inner>
        <TitleBox>
          <Title>박진호</Title>
          <Title>웹개발자 포트폴리오</Title>
        </TitleBox>
      </Inner>
      <Inner>
        <IntroduceBox>
          <Text>안녕하세요.</Text>
          <Text>지식을 아낌없이 나누는 백엔드 웹개발자입니다.</Text>
          <Text>저는 완벽을 추구하기 때문에 기능 구현 시, 품질과 성능을 중요시 여깁니다.</Text>
        </IntroduceBox>
      </Inner>
    </Outer>
  );
};


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

const TitleBox = styled.div`
  flex-direction:column;
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 15px;
`;

const Title = styled.div`
  height: 60px;
  margin: 5px;
  text-align:center;
  font-size: 25pt;
  font-weight: 700;
`;

const IntroduceBox = styled.div`
  flex-direction:column;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 14pt;
  font-weight:600;
`;

export default Introduce;
