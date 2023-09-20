import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const SingleMovie = () => {
  const { movieId } = useParams();

  const { data: movie } = useHttp(fetchMovieById, movieId);
  console.log(movie);
  const { poster_path, title } = movie;
  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt={title} />
    </div>
  );
};

export default SingleMovie;
