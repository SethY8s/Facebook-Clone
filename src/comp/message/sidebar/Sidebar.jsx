import React from 'react';
import { connect } from 'react-redux';
import './_sidebar.scss';
const photo = require('../../../images/photo.jpg');

function Sidebar( {friends} ) {

  console.log(friends)

  return (
    <div id="sidebar">
      <div className="d-flex flex-column">
        <div className="d-flex message-friends">
          <img className="w-25" src={photo} alt="friend" />
          <span>
            <h6>Marco</h6>
            <p>Hey Bro</p>
          </span>
        </div>
        <div className="d-flex message-friends">
          <img className="w-25" src={photo} alt="friend" />
          <span>
            <h6>Prem</h6>
            <p>Love you</p>
          </span>
        </div>
      </div>
    </div>
  );
}


export default connect(state => ({
  friends: state.user.friends,
}))(Sidebar)