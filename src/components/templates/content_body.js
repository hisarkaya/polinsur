import React from 'react';

const ContentBody = props => {
  return (
    <div className="widget-content nopadding">
      {props.children}
    </div>
  );
}

export default ContentBody;
