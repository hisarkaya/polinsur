import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAgency, fetchAgency, setNavigation } from '../actions';
import { Link } from 'react-router-dom';
import localization from '../helpers/localization';

import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';

class AgenciesDelete extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchAgency(id);
    this.props.setNavigation('agencies', 'agencies/agencyDetail/deleteAgency', 'user');
  }

  handleSubmit(e) {
      const {id} = this.props.match.params;
      e.preventDefault();
      this.props.deleteAgency(id, () => {
        this.props.history.push(`/agencies`);
      });
  }

  render() {
    const {id} = this.props.match.params,
              canDelete = !!this.props.agency.policies;
    return(

      <Content>
        <ContentHeader title={`${localization.deleteAgency}: ${this.props.agency.name} ${this.props.agency.surname}`} icon="trash"/>
        <ContentBody>
          <form onSubmit={this.handleSubmit} className="form-horizontal">
            <div className="widget-content">
              <p>
              {canDelete ? localization.deleteRejectPolicies : localization.deleteConfirmation}
              </p>
            </div>
          <div className="form-actions">
            {!canDelete && <button type="submit" className="btn btn-primary">{localization.delete}</button>}
            <Link to={`/agencies/${id}`} className="btn btn-danger">{localization.cancel}</Link>
          </div>
          </form>
        </ContentBody>
      </Content>

    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    agency: state.agencies[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { deleteAgency, fetchAgency, setNavigation })(AgenciesDelete);
