import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../../redux/users/user-actions';
const photo = require('../../../images/photo.jpg');

// interface friendsType {
//   id: number;
//   name: string;
//   friendMessage: string;
//   myMessage: string;
// }

const SidebarUser = ({ friend, loadUser }) => {
  return (
    <div
      onClick={() => loadUser(friend)}
      className="d-flex rounded message-friends"
    >
      <img className="w-25" src={photo} alt="friend" />
      <span>
        <h6>{friend.name}</h6>
        <p>{friend.friendMessage[friend.friendMessage.length - 1]}</p>
      </span>
    </div>
  );
};

const mapStateToProps = (dispatch) => {
  return {
    loadUser: (friend) => dispatch(loadUser(friend)),
  };
};

export default connect(null, mapStateToProps)(SidebarUser);
