import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCustomer } from '../actions';
import localization from '../helpers/localization';

import PoliciesList from '../components/policies_list';
import CustomerBio from '../components/customer_bio';


class CustomersDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCustomer(id);
  }

  render() {
    const { customer, match: {params: { id }} } = this.props;
    if(!customer) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/customers">{localization.back}</Link>
        <CustomerBio customer={customer} />
        <div className="text-xs-right">
          <Link className="btn btn-primary" to={`/policies/new/${id}`}>
            {localization.addPolicy}
          </Link>
        </div>
        <h2>{localization.policies}</h2>
        <PoliciesList policies={{}} />
      </div>
    );
  }
}

function mapStateToProps( {customers }, ownProps) {
  return {
    customer: customers[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchCustomer })(CustomersDetail);
