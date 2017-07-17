import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import localization from '../../helpers/localization';

const SideBar = props => {

  const renderActiveClass = path => {
    return props.activePage === path
      ? 'active'
      : '';
  }

  return (

    <div id="sidebar">
      <Link to="#" className="visible-phone">
        <i className="icon icon-home"></i>
        {localization.dashboard}</Link>
      <ul>
        <li className={`${renderActiveClass('dashboard')}`}>
          <Link to="/">
            <i className="icon icon-home"></i>
            <span>{localization.dashboard}</span>
          </Link>
        </li>
        <li className={`${renderActiveClass('customers')}`}>
          <Link to="/customers">
            <i className="icon icon-signal"></i>
            <span>{localization.customers}</span>
          </Link>
        </li>
        <li className={`${renderActiveClass('policies')}`}>
          <Link to="/policies">
            <i className="icon icon-inbox"></i>
            <span>{localization.policies}</span>
          </Link>
        </li>
        <li className={`${renderActiveClass('agencies')}`}>
          <Link to="/agencies">
            <i className="icon icon-th"></i>
            <span>{localization.agencies}</span>
          </Link>
        </li>
      </ul>
    </div>

  )

}

function mapStateToProps(state) {
  return {activePage: state.navigation.activePage};
}

export default connect(mapStateToProps)(SideBar);
