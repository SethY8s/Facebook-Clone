import React from 'react';

import { connect } from 'react-redux';

interface friendsType {
  id: number;
  name: string;
  friendMessage: string[];
  myMessage: string[];
}

type friendProps = {
  // friends: any[];
  currentFriend: friendsType;
};

const Message: React.FunctionComponent<friendProps> = ({ currentFriend }) => {
  return (
    <div>
      <h5>Messsage Go Here</h5>
      {currentFriend.name}
    </div>
  );
};

export default connect((state: any) => ({
  currentFriend: state.user.currentFriend,
}))(Message);
