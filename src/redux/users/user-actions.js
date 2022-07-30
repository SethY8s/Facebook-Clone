import * as actionTypes from './user-types';

export const sendMessage = (newMessage, currentFriend) => {
  return {
    types: actionTypes.ADD_MESSAGE,
    payload: {
      id: newMessage,
      friend: currentFriend,
    },
  };
};

// export const addFriend = (friend) => {
//   return {
//     types: actionTypes.ADD_FRIEND,
//     payload: {
//       id: friend,
//     },
//   };
// };

// export const deleteFriend = (friend) => {
//   return {
//     types: actionTypes.DELETE_FRIEND,
//     payload: {
//       id: friend,
//     },
//   };
// };

export const loadUser = (friend) => {
  return {
    type: actionTypes.LOAD_USER,
    payload: friend,
  };
};
