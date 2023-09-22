import { Outlet } from 'react-router-dom';
import {
  StyledNav,
  StyledNavHeader,
  StyledNavLink,
  StyledNavList,
} from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <StyledNavHeader>
        <StyledNav>
          <StyledNavList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </StyledNavList>
        </StyledNav>
      </StyledNavHeader>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
