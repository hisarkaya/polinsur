import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'

import reducers from './reducers';
import PoliciesIndex from './containers/policies_index';
import PoliciesNew from './containers/policies_new';
import CustomersIndex from './containers/customers_index';
import CustomersNew from './containers/customers_new';
import CustomersDetail from './containers/customers_detail';
import AgenciesIndex from './containers/agencies_index';
import AgenciesNew from './containers/agencies_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    reducers

  )}>
    <BrowserRouter>
      <div>
        <header><h1>Polinsur App</h1></header>
        <Switch>
          <Route path="/policies/new/:id" component={PoliciesNew} />
          <Route path="/policies" component={PoliciesIndex} />
          <Route path="/customers/new" component={CustomersNew} />
          <Route path="/customers/:id" component={CustomersDetail} />
          <Route path="/customers" component={CustomersIndex} />
          <Route path="/agencies/new" component={AgenciesNew} />
          <Route path="/agencies" component={AgenciesIndex} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
