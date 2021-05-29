import React from 'react';
import { FunActivityWrapper } from './style';
import { Link } from 'react-router-dom';
const FunActivity = () => {
  return (
    <FunActivityWrapper>
      <div>
        <h1>The A-team Fun Activity</h1>
        <h3>Activity Name: Tell us about your team members</h3>
        <button>
          <Link to="/results">See results</Link>
        </button>
        <button>
          <Link to="/fun/startActivity">Start activity</Link>
        </button>
      </div>
    </FunActivityWrapper>
  )
};

export default FunActivity;