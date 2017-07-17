import React from 'react';
import {Field} from 'redux-form';
import localization from '../../helpers/localization';
import {insuranceCompanies} from '../../helpers/select_options';
import {Link} from 'react-router-dom';

const required = value => value
  ? undefined
  : localization.required;

const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    error
  }
}) => {
  const className = `control-group ${touched && error
    ? 'error'
    : ''}`;
  

  return (
    <div className={className}>
      <label className="control-label">{label}</label>
      <div className="controls">
        <input type="text" className="span6" {...input}/>
        <span className="help-inline">
          {touched
            ? error
            : ''}</span>
      </div>

    </div>
  );
}

const renderMultiselect = ({
  input,
  items,
  label,
  meta: {
    touched,
    error
  }
}) => {
  const className = `control-group ${touched && error
    ? 'error'
    : ''}`;

  return (
    <div className={className}>
      <label className="control-label">{label}</label>
      <div className="controls">
        {items.map((item, index) => (

          <label key={index}>
            <input type="checkbox" name={`${item.value}[${index}]`} value={item.value} checked={input.value.indexOf(item.value) !== -1} onChange={e => {
              const newValue = [...input.value];
              if (e.target.checked) {
                newValue.push(item.value)
              } else {
                newValue.splice(newValue.indexOf(item.value), 1);
              }
              return input.onChange(newValue);
            }}/> {item.text}
          </label>

        ))
}
        <span className="help-inline">
          {touched
            ? error
            : ''}</span>
      </div>

    </div>
  );
}

const AgencyForm = (props) => {

  const {handleSubmit, onSubmit, cancel, type} = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
      <Field label={localization.name} component={renderTextField} name="name" validate={required}/>
      <Field label={localization.surname} component={renderTextField} name="surname" validate={required}/>
      <Field label={localization.insuranceCompanies} name="insuranceCompanies" component={renderMultiselect}
        items={insuranceCompanies} validate={required}/>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">{localization.submit}</button>
        <Link to={cancel} className="btn btn-danger">{localization.cancel}</Link>
      </div>
    </form>
  )
}


export default AgencyForm;
