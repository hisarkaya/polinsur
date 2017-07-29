import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import { logout } from '../helpers/auth';
import { firebaseAuth } from '../config/constants';
import { authStateChange } from '../actions';


import Login from './Login'
import Dashboard from './protected/dashboard';

import Header from '../components/templates/header';
import TopHeaderMenu from '../components/templates/top_header_menu';
import Breadcrumb from '../components/templates/breadcrumb';
import Search from '../components/templates/search';
import Footer from '../components/templates/footer';
import SideBar from '../components/templates/side_bar';

//
// import PoliciesIndex from './containers/policies_index';
// import PoliciesNew from './containers/policies_new';
// import CustomersIndex from './containers/customers_index';
// import CustomersNew from './containers/customers_new';
// import CustomersDetail from './containers/customers_detail';
import AgenciesIndex from './protected/agencies_index';
// import AgenciesNew from './containers/agencies_new';
// import AgenciesDetail from './containers/agencies_detail';
// import AgenciesEdit from './containers/agencies_edit';
// import AgenciesDelete from './containers/agencies_delete';


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
        : <Redirect to='/dashboard' />}
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

    return (

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
                { /* <PrivateRoute authed={this.props.authed} path="/policies/new/:id" component={PoliciesNew} />
                  <PrivateRoute authed={this.props.authed} path="/policies" component={PoliciesIndex} />
                  <PrivateRoute authed={this.props.authed} path="/customers/new" component={CustomersNew} />
                  <PrivateRoute authed={this.props.authed} path="/customers/:id" component={CustomersDetail} />
                  <PrivateRoute authed={this.props.authed} path="/customers" component={CustomersIndex} />
                  <PrivateRoute authed={this.props.authed} path="/agencies/new" component={AgenciesNew} />
                  <PrivateRoute authed={this.props.authed} path="/agencies/edit/:id" component={AgenciesEdit} />
                  <PrivateRoute authed={this.props.authed} path="/agencies/delete/:id" component={AgenciesDelete} />
                  <PrivateRoute authed={this.props.authed} path="/agencies/:id" component={AgenciesDetail} /> */}
                  <PrivateRoute authed={this.props.authed} path="/agencies" component={AgenciesIndex} />
                  <PublicRoute authed={this.props.authed}  path="/" component={Login} />
                </Switch>
              </div>
              </div>
              <div className="row-fluid">
                  <Footer />
              </div>
            </div>
          </BrowserRouter>
    );

    // return this.state.loading === true ? <h1>Loading</h1> : (
    //   <BrowserRouter>
    //     <div>
    //       <nav className="navbar navbar-default navbar-static-top">
    //         <div className="container">
    //           <div className="navbar-header">
    //             <Link to="/" className="navbar-brand">React Router + Firebase Auth</Link>
    //           </div>
    //           <ul className="nav navbar-nav pull-right">
    //             <li>
    //               <Link to="/" className="navbar-brand">Home</Link>
    //             </li>
    //             <li>
    //               <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
    //             </li>
    //             <li>
    //               {this.state.authed
    //                 ? <button
    //                     style={{border: 'none', background: 'transparent'}}
    //                     onClick={() => {
    //                       logout()
    //                     }}
    //                     className="navbar-brand">Logout</button>
    //                 : <span>
    //                     <Link to="/login" className="navbar-brand">Login</Link>
    //                     <Link to="/register" className="navbar-brand">Register</Link>
    //                   </span>}
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //       <div className="container">
    //         <div className="row">
    //           <Switch>
    //             <Route path='/' exact component={Home} />
    //             <PublicRoute authed={this.state.authed} path='/login' component={Login} />
    //             <PublicRoute authed={this.state.authed} path='/register' component={Register} />
    //             <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
    //             <Route render={() => <h3>No Match</h3>} />
    //           </Switch>
    //         </div>
    //       </div>
    //     </div>
    //   </BrowserRouter>
    // );
  }
}

function mapStateToProps(state) {
  console.log('mapTostate',state);
  return {
    authed: state.authentication
  }
}

export default connect(mapStateToProps, {authStateChange})(App);
