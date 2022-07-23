import React from 'react';
import { connect } from 'react-redux';
import './_sidebar.scss';
const photo = require('../../../images/photo.jpg');

interface friendsType {
  id: number;
  name: string;
  friendMessage: string;
  myMessage: string;
}

type friendProps = {
  // friends: any[];
  friends: friendsType[];
};

const Sidebar: React.FunctionComponent<friendProps> = ({ friends }) => {
  console.log(friends);

  return (
    <div id="sidebar">
      <div className="d-flex flex-column">
        {friends.map((el) => {
          return (
            <div className="d-flex rounded message-friends">
              <img className="w-25" src={photo} alt="friend" />
              <span>
                <h6>{el.name}</h6>
                <p>{el.friendMessage[el.friendMessage.length - 1]}</p>
              </span>
            </div>
          );
        })}

        {/* <div className="d-flex message-friends">
          <img className="w-25" src={photo} alt="friend" />
          <span>
            <h6>Prem</h6>
            <p>Love you</p>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default connect((state: any) => ({
  friends: state.user.friends,
}))(Sidebar);
