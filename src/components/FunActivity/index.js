import React from 'react';
import { FunActivityWrapper, StyledLink, ActionItems, TeamTitle, ActivityTitle } from './style';

const FunActivity = () => {
  return (
    <FunActivityWrapper>
      <TeamTitle>The A-team Fun Activity</TeamTitle>
      <ActivityTitle>Activity Name: Tell us about your team members</ActivityTitle>
      <ActionItems>
        {/* <StyledLink to="/fun/results">See results</StyledLink> */}
        <StyledLink to="/fun/startActivity">Start activity</StyledLink>
      </ActionItems>
    </FunActivityWrapper>
  )
};

export default FunActivity;