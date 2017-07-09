import React from 'react';
import { Link } from 'react-router-dom';

const Command = ({ to, title, icon, style }) => {
  return (
    <div className="buttons">
      <Link to={to} className={`btn btn-${style} btn-mini`}><i className={`icon-${icon} icon-white`}></i> {title}</Link>
    </div>
  );
}

export default Command;
