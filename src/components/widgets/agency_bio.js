import React from 'react';
import localization from '../../helpers/localization';


const AgencyBio = props => {
  const {agency} = props;
  return (

    <div>
      <div className="span6">
        <table className="">
          <tbody>
            <tr>
              <td>
                <h4>{localization.name}</h4>
              </td>
            </tr>
            <tr>
              <td>{agency.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="span6">
        <table className="">
          <tbody>
            <tr>
              <td>
                <h4>{localization.surname}</h4>
              </td>
            </tr>
            <tr>
              <td>{agency.surname}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default AgencyBio;
