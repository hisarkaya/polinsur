import { FETCH_AGENCY_COMPANIES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_AGENCY_COMPANIES:

      return action.payload;
    default:
      return state;
  }
}
