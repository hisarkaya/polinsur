import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import localization from '../../helpers/localization';

const Search = props => {

  return (




<div id="search">
  <input type="text" placeholder="Search here..."/>
  <button type="submit" className="tip-bottom" title="Search"><i className="icon-search icon-white"></i></button>
</div>


  )
}

export default Search;
