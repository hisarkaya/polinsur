import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom';

import { authStateChange } from '../actions';
import Index from './protected/index';
import Login from './public/login';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}


class App extends Component {

  componentDidMount () {
    this.removeListener = this.props.authStateChange();
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.props.loading === true ? <h1>Loading</h1> :  (
      <BrowserRouter>
        <Switch>
          <PublicRoute authed={this.props.authed}  path="/login" component={Login} />
          <PrivateRoute authed={this.props.authed} path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    authed: state.authentication.authed,
    loading: state.authentication.loading
  }
}

export default connect(mapStateToProps, {authStateChange})(App);
