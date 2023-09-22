import { useHttp } from 'hooks/useHttp';
import React, { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { StyledChar, StyledCharName, StyledList } from './MovieCasts.styled';

const MovieCats = () => {
  const { movieId } = useParams();
  const [data] = useHttp(fetchMovieCast, movieId);

  if (!Object.keys(data).length) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data.length === 0 ? (
        <h1>No information about casts</h1>
      ) : (
        <StyledList>
          {data?.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/w185${profile_path}`}
                  alt={name}
                />
              ) : (
                <img
                  width={185}
                  height={278}
                  src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                  alt={name}
                />
              )}

              <h2>{name}</h2>
              <StyledChar>
                Character: <StyledCharName>{character}</StyledCharName>
              </StyledChar>
            </li>
          ))}
        </StyledList>
      )}
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieCats;
