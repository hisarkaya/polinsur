import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import localization from '../helpers/localization';
import {fetchCustomers} from '../actions';
import CustomersList from '../components/lists/customers_list';
import Command from '../components/commands/command';
import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';

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
      <Content>
        <ContentHeader title={localization.customers} icon="th">
          <Command to="/customers/new" title={localization.addCustomer} icon="plus" style="primary"/>
        </ContentHeader>
        <ContentBody>
          <CustomersList customers={this.props.customers} onClick={this.displayDetail}/>
        </ContentBody>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {customers: state.customers}
}

export default connect(mapStateToProps, {fetchCustomers})(CustomersIndex);
