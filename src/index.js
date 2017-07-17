import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'

import reducers from './reducers';

import Header from './components/templates/header';
import TopHeaderMenu from './components/templates/top_header_menu';
import Breadcrumb from './components/templates/breadcrumb';
import Search from './components/templates/search';
import Footer from './components/templates/footer';
import SideBar from './components/templates/side_bar';

import Dashboard from './containers/dashboard';
import PoliciesIndex from './containers/policies_index';
import PoliciesNew from './containers/policies_new';
import CustomersIndex from './containers/customers_index';
import CustomersNew from './containers/customers_new';
import CustomersDetail from './containers/customers_detail';
import AgenciesIndex from './containers/agencies_index';
import AgenciesNew from './containers/agencies_new';
import AgenciesDetail from './containers/agencies_detail';
import AgenciesEdit from './containers/agencies_edit';
import AgenciesDelete from './containers/agencies_delete';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    reducers

  )}>
    <BrowserRouter>
      <div>
        <Header />
        <TopHeaderMenu />
        <Search />
        <SideBar />
        <div id="content">
            <Breadcrumb />
            <div className="container-fluid">
          <Switch>
            <Route path="/policies/new/:id" component={PoliciesNew} />
            <Route path="/policies" component={PoliciesIndex} />
            <Route path="/customers/new" component={CustomersNew} />
            <Route path="/customers/:id" component={CustomersDetail} />
            <Route path="/customers" component={CustomersIndex} />
            <Route path="/agencies/new" component={AgenciesNew} />
            <Route path="/agencies/edit/:id" component={AgenciesEdit} />
            <Route path="/agencies/delete/:id" component={AgenciesDelete} />
            <Route path="/agencies/:id" component={AgenciesDetail} />
            <Route path="/agencies" component={AgenciesIndex} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
        </div>
        <div className="row-fluid">
            <Footer />
        </div>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
