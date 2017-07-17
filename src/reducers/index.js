import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PoliciesReducer from './reducer_policies';
import CustomersReducer from './reducer_customers';
import AgenciesReducer from './reducer_agencies';
import AgencyCompaniesReducer from './reducer_agencyCompanies';
import NavigationReducer from './reducer_navigation';

const rootReducer = combineReducers({
  policies: PoliciesReducer,
  customers: CustomersReducer,
  agencies: AgenciesReducer,
  agencyCompanies:AgencyCompaniesReducer,
  form: formReducer,
  navigation: NavigationReducer
});

export default rootReducer;
