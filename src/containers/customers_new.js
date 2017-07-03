import React,{ Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import localization from '../helpers/localization';
import { checkTcNum, checkTaxNo } from '../helpers/validation';
import { createCustomer } from '../actions';

//  name, surname, title, tcVergiNo, contactNumber, isCompany, createDate, state


const required = value => value ? undefined : localization.required;
const phone = value =>
  value && !/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/i.test(value)
    ? localization.failedFormat : undefined;
const tcCheck = value => checkTcNum(value) ? undefined : localization.failedFormat;
const taxCheck = value => checkTaxNo(value) ? undefined : localization.failedFormat;

class CustomersNew extends Component {

  renderTextField({ label, input, placeholder,  meta: {touched, error} }) {

    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
          placeholder={placeholder}
          {...input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>

      </div>
    );
  }

  renderCheckField({input, label}) {
    return (
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            {...input}
          />
          {' ' + label}
        </label>
      </div>
    );
  }

  onSubmit(values) {
    values.state = 1;
    values.createDate = {".sv": "timestamp"};
    if(values.isCompany) {
      values.name = '';
      values.surname = '';
      values.title = values.title.toUpperCase();
    }
    else {
      values.title = '';
      values.name = values.name.toUpperCase();
      values.surname = values.surname.toUpperCase();
    }
    this.props.createCustomer(values, () => {
      this.props.history.push('/customers');
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>{localization.newCustomer}</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label={localization.corporate}
            name="isCompany"
            component={this.renderCheckField}
          />
          <Field
            label={localization.tcVergiNo}
            name="tcVergiNo"
            validate={[required, this.props.isCompanyValue ? taxCheck : tcCheck]}
            component={this.renderTextField}
          />
          {!this.props.isCompanyValue &&
            <div>
              <Field
                label={localization.name}
                name="name"
                validate={required}
                component={this.renderTextField}
              />
              <Field
                label={localization.surname}
                name="surname"
                validate={required}
                component={this.renderTextField}
              />
            </div>
          }
          {this.props.isCompanyValue &&
            <Field
              label={localization.title}
              name="title"
              validate={required}
              component={this.renderTextField}
            />
          }
          <Field
            label={localization.contactNumber}
            name="contactNumber"
            validate={phone}
            component={this.renderTextField}
            placeholder="(123) 456 7890"
          />
          <button type="submit" className="btn btn-primary">{localization.submit}</button>
          <Link to="/customers" className="btn btn-danger">{localization.cancel}</Link>
        </form>
      </div>
    );
  }
}



CustomersNew = reduxForm(
  {
    form: 'FormNewCustomer'
  }
)(CustomersNew);

const selector = formValueSelector('FormNewCustomer');
CustomersNew = connect(
  state => {
    const isCompanyValue = selector(state, 'isCompany');
    return {
      isCompanyValue
    }
  }, {createCustomer}
)(CustomersNew);


export default CustomersNew;
