import styled from 'styled-components';

export const StartActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EnterViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid pink;
  border-radius: 16px;
  background-color: snow;
  margin-bottom: 10px;
  padding: 16px;

  & label {
    margin-bottom: 8px;
  }
`;

export const SubmitButton = styled.button`
  padding: 8px;
  color: white;
  background: darkblue;
  border-radius: 8px;
  width: max-content;
  cursor: pointer;
`;