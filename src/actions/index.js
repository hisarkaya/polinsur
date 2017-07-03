import axios from 'axios';

export const FETCH_POLICIES = 'fetch_policies';
export const CREATE_POLICY = 'create_policy';
export const FETCH_CUSTOMERS = 'fetch_customers';
export const CREATE_CUSTOMER = 'create_customer';
export const FETCH_CUSTOMER = 'fetch_customer';
export const FETCH_AGENCIES = 'fetch_agencies';

const ROOT_URL = 'https://polinsur-66a5c.firebaseio.com/';
const ACCOUNT = 'asigorta';

export function fetchPolicies() {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/policies.json`);

  return {
    type: FETCH_POLICIES,
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

export function fetchAgencies() {
  const request = axios.get(`${ROOT_URL}/${ACCOUNT}/agencies.json`);

  return {
    type: FETCH_AGENCIES,
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
