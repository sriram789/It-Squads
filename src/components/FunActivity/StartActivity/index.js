import React, { useState } from 'react';
import { StartActivityWrapper, EnterViewWrapper, SubmitButton, UserNameWrapper } from './style';
import axios from '../../../services/axios';

const USER_LIST = ['Jey', 'Alkaff', 'Arunachalam', 'Padmashri', 'Abishek', 'Anil', 'Aarthi', 'Aishwarya', 'Sriram'];

const EnterView = ({user}) => {
  return (
    <EnterViewWrapper>
      <label>{user}</label>
      <textarea placeholder={`Tell us about ${user}`}/>
    </EnterViewWrapper>
  );
};

const StartActivity = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    let resultData = [];
    let userName = event.currentTarget.children[0].children[1].value;
    for(let i = 1; i<10; i++) {
      let name = event.currentTarget.children[i].children[0].innerText;
      let data = event.currentTarget.children[i].children[1].value;
      let result = {
        name,
        data
      };

      resultData.push(result);
    };
    let modifiedData = {
      name: userName,
      data: resultData
    };
    axios.post('/results.json', modifiedData).then(() => { setIsLoading(false); props.history.push('/fun');}).catch(() => setIsLoading(false));
  };

  return (
    <StartActivityWrapper>
      {
        isLoading ? <div>Saving the data......</div> :
        (
          <form onSubmit={submitHandler}>
            <UserNameWrapper>
              <label>Name:</label>
              <input placeholder="Enter Your Name" />
            </UserNameWrapper>
            {
              USER_LIST.map((user) => {
                return <EnterView user={user} key={user}/>
              })
            }
            <SubmitButton>SUBMIT</SubmitButton>
          </form>
        )
      }
    </StartActivityWrapper>
  )
};

export default StartActivity;