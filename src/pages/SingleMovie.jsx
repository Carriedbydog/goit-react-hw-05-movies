import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import styled from 'styled-components';

const SingleMovie = () => {
  const { movieId } = useParams();

  const [data] = useHttp(fetchMovieById, movieId);

  const {
    poster_path,
    title,
    tagline,
    release_date,
    vote_average,
    genres,
    overview,
    budget,
  } = data;

  return (
    <>
      <StyledWrapper>
        {poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
            alt={title}
          />
        )}

        <div>
          <h1>{title}</h1>
          {data.tagline ? <p>Tagline: "{tagline}"</p> : null}

          {data.vote_average ? <p>Viewers rating: {vote_average}</p> : null}
          <p>Date of release: {release_date}</p>
          <StyledGenres>
            Genres:
            <div>
              {genres?.map(genre => (
                <p key={genre.id}> {genre.name}</p>
              ))}
            </div>
          </StyledGenres>
          {data.budget ? <p>Budget: ${budget}</p> : null}
          <p>Overview: {overview}</p>
        </div>
      </StyledWrapper>
      <hr />
      <h2>Additional information</h2>
      <StyledList>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </StyledList>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SingleMovie;

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 15px;
`;

const StyledGenres = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const StyledList = styled.ul`
  display: flex;

  gap: 10px;
`;
