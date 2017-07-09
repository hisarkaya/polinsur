import React from 'react';
import _ from 'lodash';
import localization from '../../helpers/localization';
import { insuranceCompanies, policeTypes } from '../../helpers/select_options'

const renderPolicies = policies => {
  return _.map(policies, (policy, prop) => {
    return (
      <tr key={prop}>
        {/* <td>{policy.customerName}</td> */}
        <td>{policeTypes.filter(type => type.value === policy.policyType)[0].text}</td>
        <td>{policy.policyNo}</td>
        <td className="text-center">{policy.startDate}</td>
        <td className="text-center">{policy.endDate}</td>
        <td>{insuranceCompanies.filter(company => company.value === policy.insuranceCompany)[0].text}</td>
        <td className="text-center">{policy.grossFee}</td>
        <td className="text-center">{policy.netFee}</td>
        <td className="text-center">{policy.comissionRate}</td>
      </tr>
    );
  })

}

const PoliciesList = ({policies}) => {
  const { customer, policyNo, policyType, startDate, endDate,
      insuranceCompany, gross, net, comissionRate, insuranceFee } = localization;
  return (
    <div>
      <table className="table table-bordered table-hover table-sm table-responsive">
        <thead className="table-inverse">
          <tr>
            <th>{policyType}</th>
            <th>{policyNo}</th>
            <th className="text-center">{startDate}</th>
            <th className="text-center">{endDate}</th>
            <th>{insuranceCompany}</th>
            <th className="text-center">{`${gross} ${insuranceFee}`}</th>
            <th className="text-center">{`${net} ${insuranceFee}`}</th>
            <th className="text-center">{comissionRate}</th>
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
