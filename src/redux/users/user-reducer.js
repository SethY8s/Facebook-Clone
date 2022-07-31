import * as actionTypes from './user-types';

const INITIAL_STATE = {
  friends: [
    {
      id: 1,
      name: 'Brayden',

      messages: [
        ['Hey Seth', 'friend'],
        ['I havent seen you in forever', 'friend'],
        ['There is a party at my house if you want to come', 'friend'],
        ['ok, yeah I will be there.', 'me'],
      ],
    },
    {
      id: 2,
      name: 'Marco',

      messages: [
        ['Dude how did you do on that test?', 'friend'],
        ['I did well', 'me'],
        ['Really I bombed it', 'friend'],
        ['dude that sucks', 'me'],
      ],
    },
    {
      id: 3,
      name: 'Prem',

      messages: [
        ['yoy', 'friend'],
        ['love chu', 'me'],
        ['gn babe', 'me'],
        ['love u more', 'friend'],
      ],
    },
  ],
  currentFriend: {
    id: 3,
    name: 'Prem',

    messages: [
      ['yoy', 'friend'],
      ['love chu', 'me'],
      ['gn babe', 'me'],
      ['love u more', 'friend'],
    ],
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.ADD_FRIEND:
    //   return {};
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
      friends: action.payload,
    };
      // case actionTypes.DELETE_FRIEND:
      //   return {};

      // let updatedFriends = [];
      // for(let friend of state.friends){
      //   if(friend.id === action.payload.currentFriend.id) {
      //      friend = {...friend, messages: [friend.messages, [action.payload.messages, 'me']]}
      //   }
      //   updatedFriends.push(friend)
      // }

      case actionTypes.LOAD_USER:
        return {
          ...state,
        currentFriend: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
