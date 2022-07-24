import React from 'react'
const photo = require('../../../images/photo.jpg');

const SidebarUser = ( {friend} ) => {
  
        return (
          <div className="d-flex rounded message-friends">
            <img className="w-25" src={photo} alt="friend" />
            <span>
              <h6>{friend.name}</h6>
              <p>{friend.friendMessage[friend.friendMessage.length - 1]}</p>
            </span>
          </div>
        );
      
        }

        export default SidebarUser