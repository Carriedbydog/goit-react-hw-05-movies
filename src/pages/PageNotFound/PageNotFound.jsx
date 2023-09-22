import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div>
        <h1>Page not found</h1>
        <Link to={'/'}>Back to Home</Link>
      </div>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default PageNotFound;
