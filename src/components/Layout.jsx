import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
