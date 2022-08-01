import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { sendMessage } from '../../redux/users/user-actions';

interface friendsType {
  id: number;
  name: string;
  messages: string[];
}

type friendProps = {
  currentFriend: friendsType;
  sendMessage: any;
};

const Input: React.FunctionComponent<friendProps> = ({
  currentFriend,
  sendMessage,
}) => {
  const [message, setMessage] = useState('');

  console.log(currentFriend);

  const postData = async () => {

    sendMessage(currentFriend, message)

    console.log(`Hello message is: ${message}`);

    const data = {
      message,
    };

    console.log(data);

    axios
      .post('http://localhost:4000/data', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setMessage('');
    
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="message"
        // value={message}
        type="text"
      />
      {/* <button onClick={() => postData()}>Send Me</button> */}
      <button onClick={() => postData}>Send Me</button>
    </div>
  );
};

const mapStateToProps = (dispatch: any) => {
  return {
    sendMessage: (currentFriend: any, message:any) => dispatch(sendMessage(currentFriend, message)),
  };
};

export default connect(
  (state: any) => ({
    currentFriend: state.user.currentFriend,
  }),
  mapStateToProps
)(Input);
