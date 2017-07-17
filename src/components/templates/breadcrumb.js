import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import localization from '../../helpers/localization';

const render = (title, icon) => {
  let titleArr = title.split('/');
  return (titleArr.map((elem, index, arr) => {

    if (arr.length - 1 === index) {
      return <Link key={index} to="#" className="current">
        {localization[elem]}</Link>
    } else if (index === 0) {
      return <Link to={`/${elem}`} key={index} className="tip-bottom">
        <i className={`icon-${icon}`}></i>
        {localization[elem]}
      </Link>
    } else {
      return <Link key={index} to="#" className="tip-bottom">
        {localization[elem]}</Link>
    }
  }))
}

const Breadcrumb = ({title, icon}) => {
  return (
    <div id="content-header">
      <div id="breadcrumb">
        {render(title, icon)}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {title: state.navigation.breadcrumb.title, icon: state.navigation.breadcrumb.icon}
}

export default connect(mapStateToProps)(Breadcrumb);
