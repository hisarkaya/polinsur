import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import localization from '../../helpers/localization';

const SideBar = props => {

  const pathArr = props.location.pathname.split('/');

  const renderActiveClass = (path) => {
    return pathArr[1] === path
      ? 'active'
      : '';
  }

  return (

    <div id="sidebar">
      <Link to="#" className="visible-phone">
        <i className="icon icon-home"></i>
        {localization.homePage}</Link>
      <ul>
        <li className={`${renderActiveClass('')}`}>
          <Link to="/">
            <i className="icon icon-home"></i>
            <span>{localization.homePage}</span>
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

export default withRouter(SideBar);
