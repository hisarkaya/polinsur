import React from 'react';

const Content = props => {
  return (
    <div className="row-fluid">
      <div className="span12">
        <div className="widget-box">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Content;
