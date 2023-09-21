import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import styled from 'styled-components';

const MovieCats = () => {
  const { movieId } = useParams();
  const [data] = useHttp(fetchMovieCast, movieId);

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
              <p>Character: {character}</p>
            </li>
          ))}
        </StyledList>
      )}
    </div>
  );
};

export default MovieCats;

const StyledList = styled.ul`
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
