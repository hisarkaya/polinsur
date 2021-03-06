import {AUTH_STATE_CHANGE} from '../actions';

const defaultValue = {
  authed: false,
  loading: true
}

export default function(state = defaultValue, action) {
  switch (action.type) {
    case AUTH_STATE_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
