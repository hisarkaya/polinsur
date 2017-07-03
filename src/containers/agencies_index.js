import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgencies } from '../actions';
import localization from '../helpers/localization';
import AgenciesList from '../components/agencies_list';
import SubHeader from '../components/subheader';
import Command from '../components/command';

class AgenciesIndex extends Component {

  componentDidMount() {
    this.props.fetchAgencies();
  }

  render() {
    return (
      <div>
        <Command to="/agencies/new" title={localization.addAgency} />
        <SubHeader title={localization.agencies} />
        <AgenciesList agencies={this.props.agencies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    agencies: state.agencies
  }
}

export default connect(mapStateToProps, { fetchAgencies })(AgenciesIndex);
