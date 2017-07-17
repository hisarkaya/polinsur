import React, {Component} from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import localization from '../helpers/localization';
import {checkTcNum, checkTaxNo} from '../helpers/validation';
import {createCustomer, setNavigation} from '../actions';

import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';

const required = value => value
  ? undefined
  : localization.required;
const phone = value => value && !/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/i.test(value)
  ? localization.failedFormat
  : undefined;
const tcCheck = value => checkTcNum(value)
  ? undefined
  : localization.failedFormat;
const taxCheck = value => checkTaxNo(value)
  ? undefined
  : localization.failedFormat;

class CustomersNew extends Component {

  componentDidMount() {
    this.props.setNavigation('customers', 'customers/addCustomer', 'group');
  }

  renderTextField({
    label,
    input,
    placeholder,
    meta: {
      touched,
      error
    }
  }) {

    const className = `control-group ${touched && error
      ? 'error'
      : ''}`;

    return (
      <div className={className}>
        <label className="control-label">{label}</label>
        <div className="controls">
          <input className="span6" type="text" placeholder={placeholder} {...input}/>
          <span className="help-inline">
            {touched
              ? error
              : ''}</span>
        </div>

      </div>
    );
  }

  renderCheckField({input, label}) {
    return (
      <div className="control-group">
        <div className="controls">
          <label>
            <input type="checkbox" {...input}/> {label}</label>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    values.state = 1;
    values.createDate = {
      ".sv": "timestamp"
    };
    if (values.isCompany) {
      values.name = '';
      values.surname = '';
      values.title = values.title.toUpperCase();
    } else {
      values.title = '';
      values.name = values.name.toUpperCase();
      values.surname = values.surname.toUpperCase();
    }
    this.props.createCustomer(values, () => {
      this.props.history.push('/customers');
    })
  }

  render() {
    const {handleSubmit} = this.props;
    return (

      <Content>
        <ContentHeader title={localization.newCustomer} icon="align-justify"/>
        <ContentBody>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-horizontal">
            <Field label={localization.corporate} name="isCompany" component={this.renderCheckField}/>
            <Field label={localization.tcVergiNo} name="tcVergiNo" validate={[
              required, this.props.isCompanyValue
                ? taxCheck
                : tcCheck
            ]} component={this.renderTextField}/> {!this.props.isCompanyValue && <div>
              <Field label={localization.name} name="name" validate={required} component={this.renderTextField}/>
              <Field label={localization.surname} name="surname" validate={required} component={this.renderTextField}/>
            </div>
}
            {this.props.isCompanyValue && <Field label={localization.title} name="title" validate={required} component={this.renderTextField}/>
}
            <Field label={localization.contactNumber} name="contactNumber" validate={phone} component={this.renderTextField} placeholder="(123) 456 7890"/>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">{localization.submit}</button>
              <Link to="/customers" className="btn btn-danger">{localization.cancel}</Link>
            </div>
          </form>
        </ContentBody>
      </Content>

    );
  }
}

CustomersNew = reduxForm({form: 'FormNewCustomer'})(CustomersNew);

const selector = formValueSelector('FormNewCustomer');
CustomersNew = connect(state => {
  const isCompanyValue = selector(state, 'isCompany');
  return {isCompanyValue}
}, {createCustomer, setNavigation})(CustomersNew);

export default CustomersNew;
