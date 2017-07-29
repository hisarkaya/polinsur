import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAgencies, setNavigation } from '../../actions';
import localization from '../../helpers/localization';
import AgenciesList from '../../components/lists/agencies_list';
import Command from '../../components/commands/command';
import Content from '../../components/templates/content';
import ContentHeader from '../../components/templates/content_header';
import ContentBody from '../../components/templates/content_body';

class AgenciesIndex extends Component {

  constructor(props) {
    super(props);
    this.displayDetail = this.displayDetail.bind(this);
  }


  componentDidMount() {
    this.props.fetchAgencies();
    this.props.setNavigation('agencies', 'agencies', 'user');
  }

  displayDetail(key) {
    this.props.history.push(`/agencies/${key}`);
  }

  render() {
    return (
      <Content>
        <ContentHeader title={localization.agencies} icon="th">
          <Command to="/agencies/new" title={localization.addAgency} icon="plus" style="primary"/>
        </ContentHeader>
        <ContentBody>
          <AgenciesList agencies={this.props.agencies} onClick={this.displayDetail} />
        </ContentBody>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {
    agencies: state.agencies
  }
}

export default connect(mapStateToProps, { fetchAgencies, setNavigation })(AgenciesIndex);
