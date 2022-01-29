import React from 'react';
import styled from 'styled-components';
import Devpark from './Devpark';
import Myrider from './Myrider';
import PortFolio from './PortFolio';

const Project = () => {
  return(
    <Outer>
      <Title>
        <Div>Projects</Div>
      </Title>
      <Inner>
        <Devpark/>
      </Inner>
      <Inner>
        <Myrider/>
      </Inner>
      <Inner>
        <PortFolio/>
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

const Title = styled.div`
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Inner = styled.div`
  flex-direction:row;
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 5px;
  background-color:#fff;
  border: 3px solid #fff;
  border-radius:1.2rem;
`;

const Div = styled.div`
  height: 100px;
  text-align:center;
  font-size: 25pt;
  font-weight: 700;
`;
export default Project;