import React from 'react';
import localization from '../../helpers/localization';


const CustomerBio = props => {
  const {customer} = props;
  return (

    <div>
      <div className="span6">
        <table className="">
          <tbody>
            <tr>
              <td>
                <h4>{localization.tcVergiNo}</h4>
              </td>
            </tr>
            <tr>
              <td>{customer.tcVergiNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="span6">
        <table className="">
          <tbody>
            <tr>
              <td>
                <h4>{localization.contactNumber}</h4>
              </td>
            </tr>
            <tr>
              <td>{customer.contactNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default CustomerBio;
