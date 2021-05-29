import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FunActivityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50px;
  height: 40px;
  padding: 8px;
  background: #2c5cc5;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 16px;
`;

export const ActionItems = styled.div`
  padding: 12px 0;
  display: block;
`;

export const TeamTitle = styled.span`
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ActivityTitle = styled.span`
  display: block;
  font-size: 1.17em;
  font-weight: bold;
  margin-bottom: 20px;
`;