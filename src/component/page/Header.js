import React, {useState} from 'react';
import SimpleInputForm from '../organic/SimpleInputForm';

const Header = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const option = {
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
      name : name,
      message : message
    })
  };

  const HOST = `http://localhost:3001/test`;
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const onClickButton = async () => {
    try {
      const id = document.getElementById("axiosName");
      const message = document.getElementById("axiosMessage");
      const response = await fetch(HOST, option);
      const data = await response.json();
      console.log(data);
      alert(`name : ${data.name} message : ${data.message}`);
      id.innerHTML = data.name;
      message.innerHTML = data.message;
    } catch (error) {
      throw error;
    }
  };

  return(
    <div>
      <SimpleInputForm
        onChangeName={onChangeName}
        onChangeMessage={onChangeMessage}
        onClickButton={onClickButton}/>
      <div id="axiosName">
      </div>
      <div id="axiosMessage">
      </div>
    </div>
  );
};

export default Header;