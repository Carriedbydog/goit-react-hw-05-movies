import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledSuspenseWrapper = styled.div`
  width: 100vh;
`;

export const StyledChar = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledCharName = styled.span`
  color: gray;
  font-weight: 400;
`;
