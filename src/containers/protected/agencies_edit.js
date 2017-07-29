import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchAgency, updateAgency, setNavigation } from '../actions';
import localization from '../helpers/localization';
import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';
import AgencyForm from '../components/forms/agency_form';

class AgenciesEdit extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchAgency(id);
    this.props.setNavigation('agencies', 'agencies/agencyDetail/editAgency', 'user');
  }

  onSubmit(values) {

    const {id} = this.props.match.params;
    values.updateDate = {
      '.sv': 'timestamp'
    };
    values.name = values.name.toUpperCase();
    values.surname = values.surname.toUpperCase();

    if(values.insuranceCompanies && values.insuranceCompanies.length > 0) {
      this.props.updateAgency(values, id, () => {
        this.props.history.push(`/agencies/${id}`);
      });
    }
    else {
      this.props.history.push(`/agencies/edit/${id}`);
    }
  }

  render() {
    const {handleSubmit, match: { params: { id } }} = this.props;
    const {name, surname} = this.props.initialValues;
    const title = `${localization.edit}: ${name} ${surname}`;
    return(
      <Content>
        <ContentHeader title={title} icon="pencil">
        </ContentHeader>
        <ContentBody>
          <AgencyForm
            onSubmit={this.onSubmit.bind(this)}
            handleSubmit={handleSubmit}
            cancel={`/agencies/${id}`}
          />
        </ContentBody>
      </Content>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: state.agencies[ownProps.match.params.id]
  }
}

AgenciesEdit = reduxForm({form: 'AgenciesEditForm'})(AgenciesEdit);
AgenciesEdit = connect(mapStateToProps, {fetchAgency, updateAgency, setNavigation})(AgenciesEdit);
export default AgenciesEdit;
