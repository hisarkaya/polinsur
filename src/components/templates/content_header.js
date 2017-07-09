import React from 'react';

const ContentHeader = props => {
  return (
    <div className="widget-title">
      <span className="icon">
        <i className={`icon-${props.icon}`}></i>
      </span>
      <h5>{props.title}</h5>
      {props.children}
    </div>
  );
}

export default ContentHeader;
