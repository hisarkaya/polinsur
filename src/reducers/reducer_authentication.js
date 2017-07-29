import { AUTH_STATE_CHANGE } from '../actions';

export default function(state = {}, action) {
  console.log(state, action);
  switch (action.type) {
    case AUTH_STATE_CHANGE:
      return action.authed;
    default:
      return state;
  }
}
