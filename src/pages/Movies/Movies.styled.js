import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInput = styled.input`
  width: 180px;
  padding: 10px;
  border-radius: 10px;
  border-color: gray;
  font-weight: 700;

  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;

  &:focus {
    border-color: lightsalmon;
  }
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;

  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;

  box-shadow: 2px 1px 2px 1px gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const StyledItem = styled.li`
  margin: 0;
  width: 300px;
`;
