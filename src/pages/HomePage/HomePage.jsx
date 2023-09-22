import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/api';

const HomePage = () => {
  const [data] = useHttp(fetchMovies);

  return (
    <div>
      <ol>
        {data.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id.toString()}`}>{title}</Link>
            </li>
          );
        })}
      </ol>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
