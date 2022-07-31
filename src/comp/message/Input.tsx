import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

interface friendsType {
  id: number;
  name: string;
  messages: string[];
}

type friendProps = {
  currentFriend: friendsType;
};

const Input: React.FunctionComponent<friendProps> = ({ currentFriend }) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const postData = async () => {
    console.log(`Hello ${user} message is: ${message}`);

    const data = {
      user,
      message,
    };

    console.log(data);

    axios
      .post('http://localhost:4000/data', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setMessage('');
    setUser('');
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setUser(e.target.value);
        }}
        placeholder="user"
        value={user}
        type="text"
      />
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="message"
        value={message}
        type="text"
      />
      <button onClick={() => postData()}>Send Me</button>
    </div>
  );
};


export default connect((state: any) => ({
  currentFriend: state.user.currentFriend,
}))(Input);
