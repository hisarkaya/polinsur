import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import localization from '../helpers/localization';
import { fetchCustomers } from '../actions';
import SubHeader from '../components/subheader';
import Command from '../components/command';
import CustomersList from '../components/customers_list';

class CustomersIndex extends Component {

  constructor(props) {
    super(props);
    this.displayDetail = this.displayDetail.bind(this);
  }

  componentDidMount() {
    this.props.fetchCustomers();
  }

  displayDetail(key) {
    this.props.history.push(`/customers/${key}`);
  }

  render() {
    return (
      <div>
        <Command to="/customers/new" title={localization.addCustomer} />
        <SubHeader title={localization.customers} />
        <CustomersList customers={this.props.customers} onClick={this.displayDetail} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers
  }
}

export default connect(mapStateToProps, {fetchCustomers})(CustomersIndex);
