import React from 'react';
import Input from './Input';
import Message from './Message';
import Sidebar from './sidebar/Sidebar';

export default function MessagePage() {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <h2>This is the message page</h2>
          <Message />
          <Input />
        </div>
      </div>
    </>
  );
}
