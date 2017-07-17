import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import localization from '../helpers/localization';
import {createAgency, setNavigation} from '../actions';
import Content from '../components/templates/content';
import ContentHeader from '../components/templates/content_header';
import ContentBody from '../components/templates/content_body';
import AgencyForm from '../components/forms/agency_form';

class AgenciesNew extends Component {

  componentDidMount() {
    this.props.setNavigation('agencies', 'agencies/addAgency', 'user');
  }

  onSubmit(values) {
    values.state = 1;
    values.createDate = {
      '.sv': 'timestamp'
    };
    values.name = values.name.toUpperCase();
    values.surname = values.surname.toUpperCase();
    this.props.createAgency(values, () => {
      this.props.history.push('/agencies');
    })
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Content>
        <ContentHeader title={localization.newAgency} icon="align-justify"/>
        <ContentBody>
          <AgencyForm
            onSubmit={this.onSubmit.bind(this)}
            handleSubmit={handleSubmit}
            cancel="/agencies" />
        </ContentBody>
      </Content>
    );
  }
}


function validate(values) {
  const errors = {};
  errors.insuranceCompanies = 'error';
  return errors;
}

AgenciesNew = reduxForm({form: 'AgenciesNewForm'})(AgenciesNew);
AgenciesNew = connect(null, {createAgency, setNavigation})(AgenciesNew);
export default AgenciesNew;
