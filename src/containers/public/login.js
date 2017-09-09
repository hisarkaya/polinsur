import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import localization from '../../helpers/localization';
import { login } from '../../actions';

const required = value => value
  ? undefined
  : localization.required;

const email = value => value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)
  ? localization.failedFormat
  : undefined;

// function setErrorMsg(error) {
//   return {loginMessage: error}
// }

class Login extends Component {


  renderTextField({
    bg,
    input,
    placeholder,
    icon,
    type,
    meta: {
      touched,
      error
    }
  }) {

    const className = `control-group ${touched && error
      ? 'error'
      : ''}`;

    const errorDiv = <span className="help-inline">{error}</span>;
    return (
      <div className={className}>

        <div className="controls">
          <div className="main_input_box">
            <span className={`add-on bg_${bg}`}>
              <i className={`icon-${icon}`}></i>
            </span>
            <input type={type} placeholder={placeholder} {...input}/> {touched
              ? errorDiv
              : ''}
          </div>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    let self = this;
    console.log('in onSubmit',values);

    this.props.login(values.email, values.password);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this.props.loggedIn);
    if(this.props.loggedIn) {
      this.props.history.push(`/`);
    }
  }

  render() {
    const {handleSubmit, message} = this.props;
    return (
      <div id="loginbox">
        <form id="loginform" className="form-vertical" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="control-group normal_text">
            <h3>
              <img src="/assets/img/logo.png" alt="Logo"/>
            </h3>
          </div>
          <Field placeholder={localization.email} bg="lg" icon="user" name="email"
            validate={[required, email]} component={this.renderTextField} type="text"/>
          <Field bg="ly" icon="lock" name="password" validate={required}
            component={this.renderTextField} type="password"/>

             {message &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{message}
            </div>

          }

          <div className="form-actions">
            <span className="pull-right">
              <button type="submit" className="btn btn-success">
                {localization.login}</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

Login = reduxForm({form: 'FormLogin'})(Login);

function mapStateToProps(state) {
  console.log('login.js mapToState',state);
  return {
    loggedIn: state.login.loggedIn,
    message:  state.login.message,
    user: state.authentication.user
  }
}

Login = connect(mapStateToProps, {login})(Login);
export default Login;
