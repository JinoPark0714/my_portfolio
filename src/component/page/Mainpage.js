import React from 'react';
import Header from '../organic/Header';
import styled from 'styled-components';
import AboutMe from '../organic/AboutMe';

/**
 * 메인
 * @returns 
 */
const MainPage = () => {
  const devpark_url = process.env.REACT_APP_DEVPARK;
  const kartrider_url = process.env.REACT_APP_KARTRIDER;
  return(
    <BodyOuter>
      <BodyHeader>
        <Header/>
      </BodyHeader>
      <BodyInner>
        <div>
          <div>
            <a href={devpark_url} target="_blank">devpark.ml</a>
          </div>
          <div>
            <a href={kartrider_url} target="_blank">myrider.ml</a>
          </div>
        </div>
        <AboutMe></AboutMe>

      </BodyInner>
      <BodyFooter>
        qwe
      </BodyFooter>
    </BodyOuter>
  );
};


const widthMax="1200px";

const BodyOuter = styled.div`
  width: auto;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const BodyInner = styled.div`
  width: ${widthMax};
  height: 100%;
  border: 1px solid #000000;
  flex-direction : column;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const BodyHeader = styled.div`
  width: ${widthMax};
  height: 100%;
  border: 1px solid #000000;
  display: flex;
  justify-content:center;
`;

const BodyFooter = styled.div`
  width : ${widthMax};
  height : 100%;
  border: 1px solid #000000;
  display: flex;
  justify-content:center;
`;


export default MainPage;