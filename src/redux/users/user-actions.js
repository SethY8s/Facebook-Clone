import * as actionTypes from './user-types';

export const sendMessage = (currentFriend, message) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    payload: { 
      currentFriend,
      message,
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
