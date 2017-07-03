import { FETCH_AGENCIES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_AGENCIES:
      return action.payload.data;
    default:
      return state;
  }
}
