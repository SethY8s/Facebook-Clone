import React from 'react';

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
    <div className="w-75 d-flex flex-column">
      <h2>Messenger</h2>
      <h5>{currentFriend.name}</h5>
      {currentFriend.messages.map((el) => {
        const [a, b] = el;

        if (b === 'friend') {
          return <p className="">{a}</p>;
        } else {
          return <p className="d-flex justify-content-end">{a}</p>;
        }
      })}
    </div>
  );
};

export default connect((state: any) => ({
  currentFriend: state.user.currentFriend,
}))(Message);
