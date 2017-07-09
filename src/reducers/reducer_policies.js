import { FETCH_POLICIES, FETCH_POLICIES_BY_CUSTOMER } from '../actions';

export default function(state = {}, action) {

    switch (action.type) {
      case FETCH_POLICIES:
        return action.payload.data;
      case FETCH_POLICIES_BY_CUSTOMER:
        return action.payload.data;
      default:
        return state;
    }
}
