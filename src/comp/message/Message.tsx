import React, { useState } from 'react';

export default function Message() {
  const [message, setMessage] = useState('j');
  const [messages, setMessages] = useState(['hello', 'there']);
  const [userData, setUserData] = useState(
    {
      friends: { 
        sarah : ["hey", "what's up?"],
        blake: ["can I have your homework?"]
      },
  }
  )

  for(let friend:Array in userData.friends){
    
    console.log(userData.friends[friend])
  }

  return (
    <div>
      <h5>Messsage Go Here</h5>
      {messages.map((el) => (
        <p key={el}>{el}</p>
      ))}

       

    </div>
  );
}
