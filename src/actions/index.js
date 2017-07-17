import axios from 'axios';
import { insuranceCompanies } from '../helpers/select_options';

export const FETCH_POLICIES = 'fetch_policies';
export const FETCH_POLICIES_BY_CUSTOMER = 'fetch_policies_by_customer';
export const FETCH_POLICIES_BY_AGENCY = 'fetch_policies_by_agency';
export const CREATE_POLICY = 'create_policy';
export const FETCH_CUSTOMERS = 'fetch_customers';
export const CREATE_CUSTOMER = 'create_customer';
export const FETCH_CUSTOMER = 'fetch_customer';
export const FETCH_AGENCY = 'fetch_agency';
export const FETCH_AGENCIES = 'fetch_agencies';
export const CREATE_AGENCY = 'create_agency';
export const UPDATE_AGENCY = 'update_agency';
export const SET_NAVIGATION = 'set_navigation';

export const FETCH_AGENCY_COMPANIES = 'fetch_agency_companies';

const ROOT_URL = 'https://polinsur-66a5c.firebaseio.com/';
const ACCOUNT = 'asigorta';

export function setNavigation(activePage, breadcrumb, icon) {
  return {
    type: SET_NAVIGATION,
    activePage: activePage,
    breadcrumb: breadcrumb,
    icon: icon
  }
}

export function fetchPolicies() {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/policies.json`);

  return {
    type: FETCH_POLICIES,
    payload: request
  };
}

export function fetchPoliciesByCustomer(customerId) {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/policies.json?orderBy="customer"&equalTo="${customerId}"`);

  return {
    type: FETCH_POLICIES_BY_CUSTOMER,
    payload: request
  };
}

export function fetchPoliciesByAgency(agencyId) {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/policies.json?orderBy="agency"&equalTo="${agencyId}"`);

  return {
    type: FETCH_POLICIES_BY_AGENCY,
    payload: request
  };
}

export function fetchCustomers() {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/customers.json`);

  return {
    type: FETCH_CUSTOMERS,
    payload: request
  }
}

export function fetchAgencyCompanies(values) {
  let newValues = [];
  values.forEach(val => {
    let obj = { text: insuranceCompanies.filter(v => v.value === val)[0].text , value: val };
    newValues.push(obj);
  }
  );
  return {
    type: FETCH_AGENCY_COMPANIES,
    payload: newValues
  }
}

export function fetchAgencies() {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/agencies.json`);

  return {
    type: FETCH_AGENCIES,
    payload: request
  }
}

export function createAgency(values, callback) {
  const request = axios.post(`${ROOT_URL}/${ACCOUNT}/agencies.json`, values)
    .then(() => callback());

  return {
    type: CREATE_AGENCY,
    payload: request
  }
}

export function updateAgency(values, key, callback) {
  const request = axios.put(`${ROOT_URL}/${ACCOUNT}/agencies/${key}.json`, values)
    .then(() => callback());

  return {
    type: UPDATE_AGENCY,
    payload: request
  }
}

export function createPolicy(values, callback) {
  const request = axios.post(`${ROOT_URL}/${ACCOUNT}/policies.json`, values)
    .then(() => callback());

  return {
    type: CREATE_POLICY,
    payload: request
  };
}

export function createCustomer(values, callback) {
  const request = axios.post(`${ROOT_URL}/${ACCOUNT}/customers.json`, values)
    .then(() => callback());

  return {
    type: CREATE_CUSTOMER,
    payload: request
  }
}

export function fetchCustomer(id) {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/customers/${id}.json`);

  return {
    type: FETCH_CUSTOMER,
    payload: request,
    key: id
  }
}

export function fetchAgency(id) {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/agencies/${id}.json`);

  return {
    type: FETCH_AGENCY,
    payload: request,
    key: id
  }
}
