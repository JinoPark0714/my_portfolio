import React from 'react';
import styled from 'styled-components';
import HorizonImageLabel from '../molecule/HorizonImageLabel';

const AboutMe = () => {
  const telephone = "icon/telephone.png";
  const user = "icon/user.png";
  const address = "icon/address.png";
  const birthday = "icon/birthday.png";
  const mail = "icon/mail.png";
  const school = "icon/school.png";
  return(
    <Outer>
      <Inner>
        <h2>About Me</h2>
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
          text="동서대학교(컴퓨터공학부)"/>
      </Inner>
    </Outer>
  );
}

const Outer = styled.div`
  flex-direction:column;
  display: flex;
`;

const Inner = styled.div`
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export default AboutMe;