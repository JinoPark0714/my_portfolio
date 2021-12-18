import React from 'react';
import HorizontalLabelInput from '../molecule/HorizontalLaelInput';
import Button from '../atom/Button';

const SimpleInputForm = (props) => {
  return(
    <div>
      <HorizontalLabelInput
        text="Name"
        onChange={props.onChangeName}/>
      <HorizontalLabelInput
        text="Message"
        onChange={props.onChangeMessage}/>
      <Button
        value="클릭"
        onClick={props.onClickButton}
        ></Button>
    </div>
  );
};

export default SimpleInputForm;