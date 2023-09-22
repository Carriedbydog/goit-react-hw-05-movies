import { Outlet } from 'react-router-dom';
import {
  StyledNav,
  StyledNavHeader,
  StyledNavLink,
  StyledNavList,
} from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
