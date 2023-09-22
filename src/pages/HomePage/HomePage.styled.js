import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledOl = styled.ol``;
export const StyledILi = styled.li`
  padding: 10px;
`;

export const StyledItemLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  border: none;

  margin-bottom: 20px;
  padding: 5px;
  font-weight: 600;

  box-shadow: 2px 1px 2px 1px gray;
  &:hover {
    background-color: lightgray;
  }
`;
