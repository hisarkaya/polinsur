import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolicies } from '../actions';
import localization from '../helpers/localization';
import SubHeader from '../components/templates/subheader';
import Command from '../components/commands/command';
import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';
import PoliciesList from '../components/lists/policies_list';

class PoliciesIndex extends Component {

  componentDidMount() {
    this.props.fetchPolicies();
  }

  render() {

    return (
      <Content>
        <ContentHeader title={localization.policies} icon="th">
          <Command to="/policies/new" title={localization.addPolicy} icon="plus" style="primary"/>
        </ContentHeader>
        <ContentBody>
          <PoliciesList policies={this.props.policies} />
        </ContentBody>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {
    policies: state.policies
  }
}

export default connect(mapStateToProps, {fetchPolicies})(PoliciesIndex);
