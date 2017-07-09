import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import localization from '../helpers/localization';
import { insuranceCompanies } from '../helpers/select_options';
import { Link } from 'react-router-dom';
import { createAgency } from '../actions';

const required = value => value ? undefined : localization.required;

class AgenciesNew extends Component {

  renderTextField({label, input, meta: { touched, error }}) {
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          type="text"
          className="form-control"
          {...input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderMultiselect({input, items, label, meta: { touched, error }}) {
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <div className="checkbox-group">
        {
          items.map((item, index) => (
            <div className="checkbox" key={index}>

              <label>
                <input
                  type="checkbox"
                  name={`${item.value}[${index}]`}
                  value={item.value}
                  checked={input.value.indexOf(item.value) !== -1}
                  onChange={e => {
                    const newValue = [...input.value];
                    if(e.target.checked) {
                      newValue.push(item.value)
                    }
                    else {
                      newValue.splice(newValue.indexOf(item.value), 1);
                    }
                    return input.onChange(newValue);
                  }}
                />
                {item.text}
              </label>

            </div>
          ))
        }
      </div>
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
    );
  }

  onSubmit(values) {
    values.state = 1;
    values.createDate = {'.sv': 'timestamp'};
    values.name = values.name.toUpperCase();
    values.surname = values.surname.toUpperCase();
    this.props.createAgency(values, () => {
      this.props.history.push('/agencies');
    })
  }



  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label={localization.name}
            component={this.renderTextField}
            name="name"
            validate={required}
          />
          <Field
            label={localization.surname}
            component={this.renderTextField}
            name="surname"
            validate={required}
          />
          <Field
            label={localization.insuranceCompanies}
            name="insuranceCompanies"
            component={this.renderMultiselect}
            items={insuranceCompanies}
            validate={required}
          />
          <button type="submit" className="btn btn-primary">{localization.submit}</button>
          <Link to="/agencies" className="btn btn-danger">{localization.cancel}</Link>

        </form>
      </div>
    );
  }
}

AgenciesNew = reduxForm({
  form: 'AgenciesNewForm'
})(AgenciesNew);

AgenciesNew = connect(null, { createAgency })(AgenciesNew);

export default AgenciesNew;
