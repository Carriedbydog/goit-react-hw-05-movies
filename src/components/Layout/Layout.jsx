import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledNavLink, StyledNavList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <nav>
        <StyledNavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </StyledNavList>
      </nav>
      <hr />
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
