import { useHttp } from 'hooks/useHttp';
import React, { useState } from 'react';
import { fetchMovieByQuery } from 'services/api';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledButton,
  StyledInput,
  StyledItem,
  StyledWrapper,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [queryStr, setQueryStr] = useState('');

  const query = searchParams.get('query') || '';

  const [data, , loading] = useHttp(fetchMovieByQuery, query);

  const { register, handleSubmit } = useForm();
  const onSubmit = e => {
    if (!queryStr) {
      return toast.warn('Please fill movie in the field', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    setSearchParams(queryStr.trim() ? { query: queryStr.trim() } : {});
    setQueryStr('');
  };
  const location = useLocation();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          autoFocus
          {...register('queryStr')}
          value={queryStr}
          onChange={e => setQueryStr(e.target.value)}
        />
        <StyledButton>Search</StyledButton>
      </form>

      <StyledWrapper>
        {data?.map(({ poster_path, title, id }) => {
          return (
            <StyledItem key={id}>
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
            </StyledItem>
          );
        })}
      </StyledWrapper>
      {!query && <h1>If you want to find a movie, search it by name!</h1>}

      {!data.length && query && !loading ? (
        <h2>Oops...nothing there, try another movie</h2>
      ) : null}
    </div>
  );
};

export default Movies;
