import { FETCH_POLICIES } from '../actions';

export default function(state = {}, action) {

    switch (action.type) {
      case FETCH_POLICIES:
        return action.payload.data;
        break;
      default:
        return state;
    }
}
