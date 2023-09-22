import { useHttp } from 'hooks/useHttp';
import React, { Suspense, useState } from 'react';
import { fetchMovieByQuery } from 'services/api';
import { useForm } from 'react-hook-form';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [queryStr, setQueryStr] = useState('');

  const query = searchParams.get('query') || '';

  const [data, _, loading] = useHttp(fetchMovieByQuery, query);

  const { register, handleSubmit } = useForm();
  const onSubmit = e => {
    if (!queryStr) {
      // toast
      return;
    }

    setSearchParams(queryStr.trim() ? { query: queryStr.trim() } : {});
    setQueryStr('');
  };
  const location = useLocation();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          autoFocus
          {...register('queryStr')}
          value={queryStr}
          onChange={e => setQueryStr(e.target.value)}
        />
        <button>Search</button>
      </form>

      <StyledWrapper>
        {data?.map(({ poster_path, title, id }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`${id.toString()}`}>
                {poster_path ? (
                  <img
                    width={300}
                    height={450}
                    src={`http://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={title}
                  />
                ) : (
                  <img
                    width={300}
                    height={450}
                    src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                    alt={title}
                  />
                )}
                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
      </StyledWrapper>
      {!query && <h1>If you want to find a movie, search it by name!</h1>}

      {!data.length && query && !loading ? (
        <h2>Oops...nothing there, try another movie</h2>
      ) : null}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;

const StyledWrapper = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
