import * as actionTypes from './user-types';

const INITIAL_STATE = {
  friends: [
    {
      id: 1,
      name: 'Amy',
      friendMessage: ['Hey Seth', 'How Are you?'],
      myMessage: ['Hey Amy', 'Good, Thanks'],
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND:
      return {};
    case actionTypes.ADD_MESSAGE:
      return {};
    case actionTypes.DELETE_FRIEND:
      return {};
    case actionTypes.LOAD_MESSAGES:
      return {};
    default:
      return state;
  }
};

export default userReducer;
