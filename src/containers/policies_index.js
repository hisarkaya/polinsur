import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolicies } from '../actions';
import localization from '../helpers/localization';
import SubHeader from '../components/subheader';
import Command from '../components/command';

import PoliciesList from '../components/policies_list';

class PoliciesIndex extends Component {

  componentDidMount() {
    this.props.fetchPolicies();
  }

  render() {

    return (
      <div>
        <Command to="/policies/new" title={localization.addPolicy} />
        <SubHeader title={localization.policies} />
        <PoliciesList policies={this.props.policies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    policies: state.policies
  }
}

export default connect(mapStateToProps, {fetchPolicies})(PoliciesIndex);
