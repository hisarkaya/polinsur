import React from 'react';
import localization from '../../helpers/localization';
import _ from 'lodash';
import { insuranceCompanies as companyArray } from '../../helpers/select_options';

const renderInsuranceCompanies = arr => {
  return arr.map(company =>
    <span className="badge badge-pill badge-info" key={company}>{
      companyArray.filter(f => f.value === company)[0].text
    }</span>
  );
}

const renderAgencies = agencies => {
  return _.map(agencies, (agency, prop) => {
    const { name, surname, insuranceCompanies } = agency;
    return (
      <tr key={prop}>
        <td>{`${name} ${surname}`}</td>
        <td>{renderInsuranceCompanies(insuranceCompanies)}</td>
      </tr>)
  });
}

const AgenciesList = ({agencies}) => {
  return (
    <table className="table table-hover table-bordered table-sm">
      <thead>
        <tr className="bg-warning">
          <th>{localization.displayName}</th>
          <th>{localization.insuranceCompanies}</th>
        </tr>
      </thead>
      <tbody>
        {renderAgencies(agencies)}
      </tbody>
    </table>
  );
}

export default AgenciesList;
