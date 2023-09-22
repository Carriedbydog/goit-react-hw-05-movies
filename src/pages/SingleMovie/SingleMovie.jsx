import { useHttp } from 'hooks/useHttp';
import React, { Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import {
  StyledAddInfo,
  StyledBackLink,
  StyledBackWrapper,
  StyledContentBox,
  StyledDescr,
  StyledGenres,
  StyledList,
  StyledMovieTitle,
  StyledSpan,
  StyledTagline,
  StyledWrapper,
} from './SingleMovie.styled';
import { Loader } from 'components/Loader/Loader';

const SingleMovie = () => {
  const { movieId } = useParams();

  const [data] = useHttp(fetchMovieById, movieId);
  console.log(data);
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

  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  if (!Object.keys(data).length) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledBackWrapper>
        <StyledBackLink to={backLink.current}>Go back</StyledBackLink>
      </StyledBackWrapper>
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

        <StyledContentBox>
          <StyledMovieTitle>{title}</StyledMovieTitle>
          {data.tagline ? (
            <StyledDescr>
              Tagline: <StyledTagline>"{tagline}"</StyledTagline>
            </StyledDescr>
          ) : null}

          {data.vote_average ? (
            <StyledDescr>
              Viewers rating: <StyledSpan>{vote_average}</StyledSpan>
            </StyledDescr>
          ) : null}

          <StyledGenres>
            Genres:
            <div>
              {genres?.map(genre => (
                <StyledDescr key={genre.id}>
                  <StyledSpan>{genre.name}</StyledSpan>
                </StyledDescr>
              ))}
            </div>
          </StyledGenres>
          {data.budget ? (
            <StyledDescr>
              Budget: <StyledSpan>${budget}</StyledSpan>
            </StyledDescr>
          ) : null}
          <StyledDescr>
            Overview: <StyledSpan>{overview}</StyledSpan>
          </StyledDescr>
          <StyledDescr>
            Date of release: <StyledSpan>{release_date}</StyledSpan>
          </StyledDescr>
        </StyledContentBox>
      </StyledWrapper>
      <hr />
      <StyledAddInfo>Additional information</StyledAddInfo>
      <StyledList>
        <StyledBackLink to={'cast'}>Cast</StyledBackLink>
        <StyledBackLink to={'reviews'}>Reviews</StyledBackLink>
      </StyledList>
      <hr />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SingleMovie;
