import { useHttp } from 'hooks/useHttp';
import React, { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [data] = useHttp(fetchMovieReviews, movieId);

  return (
    <>
      {!data.length ? (
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
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieReviews;
