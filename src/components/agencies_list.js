import React from 'react';
import localization from '../helpers/localization';
import _ from 'lodash';

const renderAgencies = agencies => {
  return _.map(agencies, agency => {
    const { name, surname } = agency;
    return (
      <tr>
        <td>{`${name} ${surname}`}</td>
        <td>Acenteler</td>
      </tr>)
  });
}

const AgenciesList = props => {
  return (
    <table className="table table-hover table-bordered table-sm">
      <thead>
        <tr className="bg-warning">
          <th>{localization.displayName}</th>
          <th>{localization.insuranceCompanies}</th>
        </tr>
      </thead>
      <tbody>
        {renderAgencies()}
      </tbody>
    </table>
  );
}

export default AgenciesList;
