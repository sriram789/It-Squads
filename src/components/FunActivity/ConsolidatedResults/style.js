import styled from 'styled-components';

export const ConsolidatedResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid lightblue;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 10px;
  width: 150px;
  height: 650px;
`;

export const MainContent = styled.div`
  padding: 10px;
  border: 2px solid lightblue;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 1250px;
  height: 650px;
`;

export const UserName = styled.div`
  padding: 6px;
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
  border-radius: 4px;
  width: -webkit-fill-available;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }

  &[data-current=true] {
    background-color: lightblue;
  }
`;

export const StyledLI = styled.li`
  border-radius: 4px;
  background-color: lightgreen;
  padding: 10px;
  margin-bottom: 10px;
  color: black;
`;


export const StyledUL = styled.ul`
  list-style-type: none;
`;