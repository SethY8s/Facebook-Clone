import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'

function Message( {} ) {
  const [messages, setMessages] = useState<any[]>([]);

  type TFriend = { [key: string]: string[] };

  type TUserData = {
    friends: TFriend;
  };

  const userData: TUserData = {
    friends: {
      sarah: ['hey', "what's up?"],
      blake: ['can I have your homework?', 'hello'],
      man: ['can I have your homework?', 'hello'],
      dan: ['can I have your homework?', 'helfe'],
    },
  };

  useEffect(() => {
    let array = [];

    for (let friend in userData.friends) {
      // console.log(userData.friends[friend]);
      const arr = userData.friends[friend];
      array.push(arr);
    }

    setMessages([...messages, array]);

    
  }, []);

  // for (let friend in userData.friends) {
  //   // console.log(userData.friends[friend]);
  //   const arr = userData.friends[friend]

  // }

  // as keyof typeof userData.friends

  return (
    <div>
      <h5>Messsage Go Here</h5>
      {messages.map((el: []) => el.map((el) => <p>{el}</p>))}
      {messages}
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return {
    friends: state.user.friends
  }
}

export default connect(mapStateToProps)(Message)