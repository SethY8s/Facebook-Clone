import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../../redux/users/user-actions';
const photo = require('../../../images/photo.jpg');

interface friendsType {
  friend: {
    id: number;
    name: string;
    messages: string[];
  };
  loadUser: any;
}

const SidebarUser = ({ friend, loadUser }: friendsType) => {
  return (
    <div
      onClick={() => loadUser(friend)}
      className="d-flex rounded message-friends"
    >
      <img className="w-25" src={photo} alt="friend" />
      <span>
        <h6>{friend.name}</h6>
        <p>{friend.messages[friend.messages.length - 1][0]}</p>
      </span>
    </div>
  );
};

const mapStateToProps = (dispatch: any) => {
  return {
    loadUser: (friend: any) => dispatch(loadUser(friend)),
  };
};

export default connect(null, mapStateToProps)(SidebarUser);
