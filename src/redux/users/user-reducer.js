import * as actionTypes from './user-types';

const INITIAL_STATE = {
  friends: [
    {
      id: 1,
      name: 'Amy',
      friendMessage: ['Hey Seth', 'How Are you?'],
      myMessage: ['Hey Amy', 'Good, Thanks'],
    },
    {
      id: 2,
      name: 'Marco',
      friendMessage: ['Dude how did you do on that test?', 'Really I bombed it'],
      myMessage: ['I did well', 'That sucks man'],
    },
    {
      id: 3,
      name: 'Prem',
      friendMessage: ['yoy', 'love u more'],
      myMessage: ['love chu', 'gn babe'],
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
