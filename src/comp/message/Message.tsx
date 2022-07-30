import React from 'react';
import Input from './Input';

import { connect } from 'react-redux';

interface friendsType {
  id: number;
  name: string;
  
  messages: string[];
}

type friendProps = {
  currentFriend: friendsType;
};

const Message: React.FunctionComponent<friendProps> = ({ currentFriend }) => {
  return (
    <div className=" w-100 d-flex flex-column">
      <h2>Messenger</h2>
      <h5>{currentFriend.name}</h5>
      {currentFriend.messages.map((el) => {
        const [a, b] = el;

        if (b === 'friend') {
          return <p className="">{a}</p>;
        } else {
          return <p className="me-4 d-flex justify-content-end">{a}</p>;
        }
      })}
      <Input/>
    </div>
    
  );
};

export default connect((state: any) => ({
  currentFriend: state.user.currentFriend,
}))(Message);
