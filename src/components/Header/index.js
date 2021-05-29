import React from 'react';
import { Link } from 'react-router-dom';
import { Header, NavBar, AppName, NavLinksList, NavLinkItem } from './style';

const HeaderComponent = () => {
  return (
    <Header>
      <NavBar>
        <AppName>
          <Link to="/">IT-Squads</Link>
        </AppName>
        <NavLinksList>
          <NavLinkItem>
            <Link to="/team">Team</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/story">Story Points</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/fun">Fun Activity</Link>
          </NavLinkItem>
        </NavLinksList>
      </NavBar>
    </Header>
  )
};

export default HeaderComponent;