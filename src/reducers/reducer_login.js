import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

const defaultValue = {
  loggedIn: false,
  message: ''
}

export default function(state = defaultValue, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_FAILURE:
      return action.payload;
    default:
      return state;
  }
}
