import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [data] = useHttp(fetchMovieReviews, movieId);

  return (
    <>
      {data.length === 0 ? (
        <h1>There are no reviews for this movie</h1>
      ) : (
        <ul>
          {data?.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
