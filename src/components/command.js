import React from 'react';
import { Link } from 'react-router-dom';

const Command = ({ to, title }) => {
  return (
    <div className="text-xs-right">
      <Link to={to} className="btn btn-primary">{title}</Link>
    </div>
  );
}

export default Command;
