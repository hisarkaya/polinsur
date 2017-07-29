import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCustomer, fetchPoliciesByCustomer, setNavigation} from '../actions';
import localization from '../helpers/localization';

import PoliciesList from '../components/lists/policies_list';
import CustomerBio from '../components/widgets/customer_bio';
import Command from '../components/commands/command';
import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';

class CustomersDetail extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPoliciesByCustomer(id);
    this.props.setNavigation('customers', 'customers/customerDetail', 'group');
  }

  render() {
    const {
      customer,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    if (!customer) {
      return <div>Loading...</div>;
    }

    const title = `${localization.customer}: ${customer.isCompany
      ? customer.title
      : customer.name + ' ' + customer.surname}`;

    return (
      <div>

        <Content>
          <ContentHeader title={title} icon="th">
            <Command to="/customers" icon="arrow-left" style="info" title={localization.back}/>
          </ContentHeader>
          <ContentBody>
            <CustomerBio customer={customer}/>
          </ContentBody>
        </Content>

        <Content>
          <ContentHeader title={localization.policies} icon="th">
            <Command to={`/policies/new/${id}`} icon="plus" style="primary" title={localization.addPolicy}/>
          
          </ContentHeader>
          <ContentBody>
            <PoliciesList policies={this.props.policies}/>
          </ContentBody>
        </Content>

      </div>
    );
  }
}

function mapStateToProps({
  customers,
  policies
}, ownProps) {
  return {
    customer: customers[ownProps.match.params.id],
    policies
  }
}

export default connect(mapStateToProps, {fetchCustomer, fetchPoliciesByCustomer,setNavigation})(CustomersDetail);
