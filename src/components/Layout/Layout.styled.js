import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border: 1px solid gray;
`;
