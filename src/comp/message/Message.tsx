import React, { useState } from 'react';

export default function Message() {
  const [message, setMessage] = useState('j');
  const [messages, setMessages] = useState(['hello', 'there']);

  return (
    <div>
      <h5>Messsage Go Here</h5>
      {messages.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  );
}
