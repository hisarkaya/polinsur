import React from 'react';
import _ from 'lodash';
import localization from '../helpers/localization';

const renderPolicies = policies => {
  return _.map(policies, policy => {
    return (
      <tr key={policy.id}>
        <td>{policy.customerName}</td>
        <td>{policy.policyNo}</td>
      </tr>
    );
  })

}

const PoliciesList = ({policies}) => {
  const { customer, policyNo } = localization;
  return (
    <div>
      <table className="table table-bordered table-hover table-sm">
        <thead>
          <tr className="bg-danger">
            <th>{customer}</th>
            <th>{policyNo}</th>
          </tr>
        </thead>
        <tbody>
          {renderPolicies(policies)}
        </tbody>
      </table>
    </div>
  );
}

export default PoliciesList;
