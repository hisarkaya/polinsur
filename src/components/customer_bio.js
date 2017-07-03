import React from 'react';
import localization from '../helpers/localization';

const CustomerBio = props => {
  const { customer } = props;
  return (
    <div>
      <h2>{localization.customer}: {customer.isCompany ? customer.title : customer.name + ' ' + customer.surname}</h2>
      <p>{localization.tcVergiNo}: {customer.tcVergiNo}</p>
      <p>{localization.contactNumber}: {customer.contactNumber}</p>
    </div>
  );
}

export default CustomerBio;
