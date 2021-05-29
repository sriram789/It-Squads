import React from 'react';
import { StartActivityWrapper, EnterViewWrapper, SubmitButton } from './style';

const USER_LIST = ['Jey', 'Arunachalam', 'Padmashri', 'Abishek', 'Anil', 'Aarthi', 'Aishwarya', 'Sriram'];

const EnterView = ({user}) => {
  return (
    <EnterViewWrapper>
      <label>{user}</label>
      <textarea placeholder={`Tell us about ${user}`}/>
    </EnterViewWrapper>
  );
};

const StartActivity = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    let resultData = [];
    for(let i = 0; i<8; i++) {
      let name = event.currentTarget.children[i].children[0].innerText;
      let data = event.currentTarget.children[i].children[1].value;
      let result = {
        name,
        data
      };

      resultData.push(result);
    }
    console.log(resultData);
    props.history.push('/fun');
  };

  return (
    <StartActivityWrapper>
      <form onSubmit={submitHandler}>
        {
          USER_LIST.map((user) => {
            return <EnterView user={user} key={user}/>
          })
        }
        <SubmitButton>SUBMIT</SubmitButton>
      </form>
      
    </StartActivityWrapper>
  )
};

export default StartActivity;