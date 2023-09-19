import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const SingleMovie = () => {
  const { id } = useParams();

  const { data: movie } = useHttp(fetchMovieById, id);
  console.log(movie);

  return <div>dsadsadsa</div>;
};

export default SingleMovie;
