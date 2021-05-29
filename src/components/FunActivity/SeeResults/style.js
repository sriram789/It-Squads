import styled from 'styled-components';

export const ResultsWrapper = styled.div`
`;

export const IndividualResultWrapper = styled.div`
  margin: 10px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid blue;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const Name = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ResponderViewWrapper = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid red;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ResponderViewName = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ResponderViewDetail = styled.p`
  background: white;
  border-radius: 4px;
  padding: 16px;
`;

export const IndividualResultData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;