import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import localization from '../helpers/localization';
import { policeTypes, insuranceCompanies } from '../helpers/select_options'
import { createPolicy } from '../actions';

class PoliciesNew extends Component {

  renderField(field) {

    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>

      </div>
    );
  }

  renderSelectField(field) {
    const { items, label, input,  meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select
          className="form-control"
          defaultValue=""
          {...input}
        >
          <option value="">{localization.selectOption}</option>
          {
            items.map(item =>
              <option key={item.value} value={item.value}>{item.text}</option>
            )
          }
        </select>
        <div className="text-help">
          {touched ? error : ''}
        </div>

      </div>
    );
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.createPolicy(values, () => {
      this.props.history.push(`/customers/${id}`);
    });
  }

  render() {

    const { handleSubmit } = this.props;
    const { id } = this.props.match.params;

    return (
      <div>
        <h2>{localization.newPolicy}</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label={localization.policyType}
            name="policyType"
            items={policeTypes}
            component={this.renderSelectField}
          />
          <Field
            label={localization.policyNo}
            name="policyNo"
            component={this.renderField}
          />
          {
            (this.props.policyTypeValue === 'trafik' ||
            this.props.policyTypeValue === 'kasko') &&
            <Field
              label={localization.plateNo}
              name="plateNo"
              component={this.renderField}
            />
          }
          <Field
            label={localization.documentNo}
            name="documentNo"
            component={this.renderField}
          />
          <Field
            label={localization.startDate}
            name="startDate"
            component={this.renderField}
          />
          <Field
            label={localization.endDate}
            name="endDate"
            component={this.renderField}
          />
          <Field
            label={`${localization.net} ${localization.insuranceFee}`}
            name="netFee"
            component={this.renderField}
          />
          <Field
            label={`${localization.gross} ${localization.insuranceFee}`}
            name="grossFee"
            component={this.renderField}
          />
          <Field
            label={localization.comissionRate}
            name="comissionRate"
            component={this.renderField}
          />
          <Field
            label={localization.insuranceCompany}
            name="insuranceCompany"
            items={insuranceCompanies}
            component={this.renderSelectField}
          />
          <button type="submit" className="btn btn-primary">{localization.submit}</button>
          <Link to={`/customers/${id}`} className="btn btn-danger">{localization.cancel}</Link>
        </form>
      </div>
    );
  }
}


PoliciesNew = reduxForm(
  {form: 'PoliciesNewForm'}
)(PoliciesNew);

const selector = formValueSelector('PoliciesNewForm');
PoliciesNew = connect(
  state => {
    const policyTypeValue = selector(state, 'policyType');
    return {
      policyTypeValue
    }
  }
  ,{ createPolicy } )(PoliciesNew);

export default PoliciesNew;
