import * as actionTypes from './user-types';

export const sendMessage = (itemMessage: any) => {
  return {
    types: actionTypes.ADD_MESSAGE,
    payload: {
      id: itemMessage,
    },
  };
};

export const addFriend = (friend: any) => {
  return {
    types: actionTypes.ADD_FRIEND,
    payload: {
      id: friend,
    },
  };
};

export const deleteFriend = (friend: any) => {
  return {
    types: actionTypes.DELETE_FRIEND,
    payload: {
      id: friend,
    },
  };
};

export const loadUser = (friend: any) => {
  return {
    types: actionTypes.LOAD_USER,
    payload: {
      id: friend,
    },
  };
};
