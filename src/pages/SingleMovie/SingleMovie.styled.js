import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 15px;
`;
export const StyledContentBox = styled.div`
  width: 700px;
  padding: 0 15px;
`;
export const StyledGenres = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 25px;
  font-weight: 600;
  color: black;
`;

export const StyledList = styled.ul`
  display: flex;

  gap: 10px;
`;

export const StyledBackWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: 15px;
`;

export const StyledBackLink = styled(Link)`
  border-radius: 10px;
  border: none;
  text-decoration: none;

  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;

  box-shadow: 2px 1px 2px 1px gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const StyledMovieTitle = styled.h1`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StyledDescr = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: black;

  margin-bottom: 10px;
`;

export const StyledTagline = styled.span`
  font-size: 20px;
  color: gray;
  font-weight: 400;
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 400;
`;

export const StyledAddInfo = styled.h2`
  margin-left: 15px;
`;
