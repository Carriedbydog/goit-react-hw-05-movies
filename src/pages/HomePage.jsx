import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById, fetchMovies } from 'services/api';

const HomePage = () => {
  const { movieId } = useParams();
  const { data: movies } = useHttp(fetchMovies);

  const { data: movieById } = useHttp(fetchMovieById, movieId);
  console.log(movieId);
  return (
    <div>
      <ol>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={id.toString()}>{title}</Link>
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
