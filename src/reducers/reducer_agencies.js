import { FETCH_AGENCIES, FETCH_AGENCY, DELETE_AGENCY } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_AGENCY:
      // const customer = action.payload.data;
      // const newState = { ...state };
      //newState[action.key] = customer;
      //console.log(customer, newState, action.key);
      //return newState;
      //return { ...state, [action.key]: action.payload.data };

      return { ...state };
    case FETCH_AGENCIES:
      return action.payload.data;
    default:
      return state;
  }
}
