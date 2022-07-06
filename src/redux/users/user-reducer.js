import * as actionTypes from './user-types';

const INITIAL_STATE = {
  friends: {},
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
