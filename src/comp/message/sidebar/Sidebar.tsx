import React from 'react';
import { connect } from 'react-redux';
import './_sidebar.scss';
import SidebarUser from './SidebarUser';

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
          return <SidebarUser key={el.id} friend={el} />;
        })}
      </div>
    </div>
  );
};

export default connect((state: any) => ({
  friends: state.user.friends,
}))(Sidebar);
