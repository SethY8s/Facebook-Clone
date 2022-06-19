import React, { useState } from 'react';
import axios from 'axios';

export default function Input() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const postData = async () => {
    console.log(`Hello ${user} message is: ${message}`);

    const data = {
      userId: 1,
      title: 'A new post',
      body: 'This is the body of the new post'
    };

    console.log(data);

    axios.post('http://localhost:4000/data', data)
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
}
