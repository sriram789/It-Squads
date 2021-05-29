import styled from 'styled-components';

export const Header = styled.header`
  background: blue;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: -webkit-fill-available;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AppName = styled.span`
  & a {
    padding: 8px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const NavLinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-inline-start: 0;
`;

export const NavLinkItem = styled.li`
  margin-left: 20px;

  & a {
    padding: 8px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }
`;