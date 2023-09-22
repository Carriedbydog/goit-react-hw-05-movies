import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavHeader = styled.div`
  background-color: rgba(42, 0, 165, 0.5);
`;
export const StyledNav = styled.nav`
  padding: 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
`;
export const StyledNavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 10px;
  border: none;

  margin-bottom: 20px;
  padding: 10px 20px;
  font-weight: 600;
  background-color: whitesmoke;

  box-shadow: 2px 1px 2px 1px gray;
  &:hover {
    background-color: lightgray;
  }
  &.active {
    background-color: yellowgreen;
    color: white;
  }
  &:hover:not(.active) {
    background-color: yellowgreen;
    color: white;
  }
`;
