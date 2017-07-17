import React from 'react';
import localization from '../../helpers/localization';

const renderCustomers = (customers, handler) => {

  return _.map(customers, (customer, prop) => {
    const {tcVergiNo, isCompany, title, name, surname, contactNumber, createDate} = customer;

    return (
      <tr key={prop} onClick={() => handler(prop)}>
        <td className="iconWidth"><i className={`icon-${isCompany ? 'briefcase': 'user'}`}></i></td>
        <td>{isCompany ? title : name + ' ' + surname}</td>
        <td>{tcVergiNo}</td>
        <td>{contactNumber}</td>
      </tr>
    );
  });
}

const CustomersList = props => {
  return (
    <table className="table table-bordered table-hover table-sm customers-table">
      <thead className="thead-inverse">
        <tr>
          <th></th>
          <th>{localization.displayName}</th>
          <th>{localization.tcVergiNo}</th>
          <th>{localization.contactNumber}</th>
        </tr>
      </thead>
      <tbody>
        {renderCustomers(props.customers, props.onClick)}
      </tbody>
    </table>
  );
}

export default CustomersList;
