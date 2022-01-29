import React from 'react';
import styled from 'styled-components';
import HorizonImageLabel from '../molecule/HorizonImageLabel';

const AboutMe = () => {
  const aboutmePath = process.env.REACT_APP_ABOUTME_PATH;
  const telephone = `${aboutmePath}/telephone.png`;
  const user = `${aboutmePath}/user.png`;
  const address = `${aboutmePath}/address.png`;
  const birthday = `${aboutmePath}/birthday.png`;
  const mail = `${aboutmePath}/mail.png`;
  const school = `${aboutmePath}/school.png`;
  return(
    <Outer>
      <Inner>
        <Title>
          About Me
        </Title>
      </Inner>
      <Inner>
        <HorizonImageLabel
          sourcePath={user}
          title="이름"
          text="박진호"/>
        <HorizonImageLabel
          sourcePath={telephone}
          title="휴대폰번호"
          text="010-4924-6445"/>
        <HorizonImageLabel
          sourcePath={address}
          title="주소"
          text="부산광역시 북구"/>
      </Inner>
      <Inner>
        <HorizonImageLabel
          sourcePath={birthday}
          title="생년월일"
          text="1996. 07. 14"/>
        <HorizonImageLabel
          sourcePath={mail}
          title="메일"
          text="enqlqkr@gmail.com"/>
        <HorizonImageLabel
          sourcePath={school}
          title="학력"
          text="동서대학교&nbsp;(컴퓨터공학부)"/>
      </Inner>
    </Outer>
  );
}

const Outer = styled.div`
  width: 900px;
  height: auto;
  flex-direction:column;
  display: flex;
  margin: 25px;
`;

const Title = styled.div`
  height: 100px;
  text-align:center;
  font-size: 25pt;
  font-weight: 700;
`;

const Inner = styled.div`
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export default AboutMe;