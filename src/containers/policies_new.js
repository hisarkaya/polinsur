import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import localization from '../helpers/localization';
import moment from 'moment';
import { policeTypes, insuranceCompanies } from '../helpers/select_options'
import { createPolicy, fetchAgencies, fetchAgencyCompanies } from '../actions';

const required = value => value ? undefined : localization.required;
const validDate = value => moment(value, 'DD/MM/YYYY').isValid() ? undefined : localization.failedFormat;
const isDecimal = value => !isNaN(+value) ? undefined : localization.failedFormat;
class PoliciesNew extends Component {

  renderField(field) {

    const { addOn, placeholder, meta: {touched, error} } = field;
    const className = `control-group ${touched && error ? 'error' : ''}`;

    return (
      <div className={className}>
        <label className="control-label">{field.label}</label>
        <div className="controls">
        {addOn ? <div className="input-append"><input placeholder={placeholder} className="span6" type="text" {...field.input} /><span className={addOn}>{localization.currencySign}</span></div>:
            <input placeholder={placeholder} className="span6" type="text" {...field.input} />}

        <span className="help-inline"> {touched ? error : ''}</span>
      </div>

      </div>
    );
  }

  renderSelectField(field) {
    const { items, label, input,  meta: {touched, error} } = field;
    const className = `control-group ${touched && error ? 'error' : ''}`;
    return (
      <div className={className}>
        <label className="control-label">{label}</label>
          <div className="controls">
        <select
          className="span6"
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
            <span className="help-inline"> {touched ? error : ''}</span>
      </div>


      </div>
    );
  }

  renderRemoteSelectField(field, props) {
    const { items, label, input,  meta: {touched, error} } = field;
    const className = `control-group ${touched && error ? 'error' : ''}`;

    return (
      <div className={className}>
        <label className="control-label">{label}</label>
        <div className="controls">
        <select
          {...input}
          className="span6"
          defaultValue=""
        >
          <option value="">{localization.selectOption}</option>
          {
            _.map(items, (item, prop) => <option key={prop} value={prop}>{`${item.name} ${item.surname}`}</option>)

          }
        </select>
            <span className="help-inline"> {touched ? error : ''}</span>
      </div>


      </div>
    );
  }

  componentDidMount() {
    this.props.fetchAgencies();
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    values.customer = id;
    values.state = 1;
    values.createDate = {'.sv': 'timestamp'};
    this.props.createPolicy(values, () => {
      this.props.history.push(`/customers/${id}`);
    });
  }

  render() {

    const { handleSubmit } = this.props;
    const { id } = this.props.match.params;
    const handleSelect = e => {
      if(e.target.value) {
        this.props.fetchAgencyCompanies(this.props.agencies[e.target.value].insuranceCompanies);
      }

    };

    return (
      <div className="row-fluid">
        <div className="widget-box">
          <div className="widget-title"> <span className="icon"> <i className="icon-align-justify"></i> </span>
            <h5>{localization.newPolicy}</h5>
          </div>
            <div className="widget-content nopadding">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}  className="form-horizontal">
          <Field
            label={localization.agency}
            name="agency"
            items={this.props.agencies}
            component={this.renderRemoteSelectField}
            onChange={handleSelect.bind(this)}
            validate={required}
          />
          <Field
            label={localization.insuranceCompanies}
            name="insuranceCompany"
            items={this.props.agencyCompanies}
            component={this.renderSelectField}
            validate={required}
          />
          <Field
            label={localization.policyType}
            name="policyType"
            items={policeTypes}
            component={this.renderSelectField}
            validate={required}
          />
          <Field
            label={localization.policyNo}
            name="policyNo"
            component={this.renderField}
            validate={required}
          />
          {
            (this.props.policyTypeValue === 'trafik' ||
            this.props.policyTypeValue === 'kasko') &&
            <Field
              label={localization.plateNo}
              name="plateNo"
              component={this.renderField}
              validate={required}
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
            validate={[required, validDate]}
            placeholder={localization.dateFormat}
          />
          <Field
            label={localization.endDate}
            name="endDate"
            component={this.renderField}
            validate={[required, validDate]}
            placeholder={localization.dateFormat}
          />
          <Field
            label={`${localization.net} ${localization.insuranceFee}`}
            name="netFee"
            component={this.renderField}
            validate={[required, isDecimal]}
            addOn="add-on"
          />
          <Field
            label={`${localization.gross} ${localization.insuranceFee}`}
            name="grossFee"
            component={this.renderField}
            validate={[required, isDecimal]}
            addOn="add-on"
          />
          <Field
            label={localization.comissionRate}
            name="comissionRate"
            component={this.renderField}
            validate={[required, isDecimal]}
          />
            <div className="form-actions">
          <button type="submit" className="btn btn-primary">{localization.submit}</button>
          <Link to={`/customers/${id}`} className="btn btn-danger">{localization.cancel}</Link>
        </div>
        </form>
      </div>
      </div>
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
      policyTypeValue,
      agencies: state.agencies,
      agencyCompanies: state.agencyCompanies
    }
  }
  ,{ createPolicy, fetchAgencies, fetchAgencyCompanies } )(PoliciesNew);

export default PoliciesNew;
