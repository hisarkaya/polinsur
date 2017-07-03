import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PoliciesReducer from './reducer_policies';
import CustomersReducer from './reducer_customers';
import AgenciesReducer from './reducer_agencies';

const rootReducer = combineReducers({
  policies: PoliciesReducer,
  customers: CustomersReducer,
  agencies: AgenciesReducer,
  form: formReducer
});

export default rootReducer;
