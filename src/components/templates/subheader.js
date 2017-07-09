import React from 'react';

const SubHeader = ({title}) => {
  return (
    <div id="content-header">
      <div id="breadcrumb"> <a href="index.html" title="Go to Home" className="tip-bottom"><i className="icon-home"></i> {title}</a></div>
    </div>
  );
}

export default SubHeader;
