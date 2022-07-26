import React from 'react';

import { connect } from 'react-redux';

interface friendsType {
  id: number;
  name: string;
  friendMessage: string[];
  myMessage: string[];
}

type friendProps = {
  currentFriend: friendsType;
};

const Message: React.FunctionComponent<friendProps> = ({ currentFriend }) => {
  return (
    <div className="w-75 d-flex flex-column">
      <h2>Messenger</h2>
      <h5>{currentFriend.name}</h5>
      {currentFriend.friendMessage.map(el=> <p>{el}</p>)}
    </div>
  );
};

export default connect((state: any) => ({
  currentFriend: state.user.currentFriend,
}))(Message);
