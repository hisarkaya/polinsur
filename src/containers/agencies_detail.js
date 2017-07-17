import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAgency, fetchPoliciesByAgency, setNavigation} from '../actions';
import localization from '../helpers/localization';

import PoliciesList from '../components/lists/policies_list';
import AgencyBio from '../components/widgets/agency_bio';
import Command from '../components/commands/command';
import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';

class AgenciesDetail extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPoliciesByAgency(id);
    this.props.setNavigation('agencies', 'agencies/agencyDetail', 'user');
  }

  render() {
    const {
      agency,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    if (!agency) {
      return <div>Loading...</div>;
    }

    const title = `${localization.detail}: ${agency.name} ${agency.surname}`;

    return (
      <div>

        <Content>
          <ContentHeader title={title} icon="info-sign">
            <Command to="/agencies" icon="th" style="info" title={localization.list}/>
            <Command to={`/agencies/edit/${id}`} icon="pencil" style="primary" title={localization.edit}/>
            <Command to={`/agencies/delete/${id}`} icon="remove" style="danger" title={localization.delete}/>
          </ContentHeader>
          <ContentBody>
            <AgencyBio agency={agency}/>
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
  agencies,
  policies
}, ownProps) {
  return {
    agency: agencies[ownProps.match.params.id],
    policies
  }
}

export default connect(mapStateToProps, {fetchAgency, fetchPoliciesByAgency, setNavigation})(AgenciesDetail);
