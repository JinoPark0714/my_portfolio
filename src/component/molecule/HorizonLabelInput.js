import React from 'react';
import Input from '../atom/Input';
import Label from '../atom/Label';
import styled from 'styled-components';

const HorizontalLabelInput = (props) => {
  return (
    <HorizonForm>
      <DivLabel>
        <Label value={props.text}/>
      </DivLabel>
      <DivColon>
        <Label value=":"/>
      </DivColon>
      <DivInput>
        <Input onChange={props.onChange} inputRef={props.inputRef}></Input>
      </DivInput>
    </HorizonForm>
  );
};

const borderOption = `1px solid #000000`;
const HorizonForm = styled.div`
  width: 300px;
  height: 30px;
  border: ${borderOption};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DivInput = styled.div`
  width : 200px;
  display: flex;
`;

const DivLabel = styled.div`
  padding-left : 10px;
  width : 100px;
  display: flex;
`;

const DivColon = styled.div`
  width: 10px;
  display: flex;
`;

export default HorizontalLabelInput;