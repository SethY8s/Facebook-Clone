import React, { useState } from 'react';
import axios from 'axios';

export default function Input() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const  postData = async () => {
    console.log(`Hello ${user} message is: ${message}`);
    setMessage('')
    setUser('')

    const data = {
      user,
      message
    }

    console.log(data)

    // try {
    //   const resp = await axios.post(
    //     '',
    //     // 'http://localhost:4000/create-checkout-session', POST, GET, DELETE, PUT
    //     {
    //       data,
    //     }
    //   );
    //   console.log(resp);

    //   // const { url_ } = resp.data;
   
    // } catch (error) {
    //   console.log(error);
    // }
   

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
