import axios from 'axios';

axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzhkMDYzMzc1ZmNhNzEwN2FjY2FlOWY3YzI0NDRkNSIsInN1YiI6IjY1MDljYzg5OGE4OGIyMDEwMDBhY2Q4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pv4bnwVeOFplFlUCjwV02RANqXBPJKRQWTVcfRVL0IU',
  accept: 'application/json',
};
axios.defaults.params = {
  language: 'en-US',
};

export const fetchMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day'
  );

  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`
  );
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`
  );
  return data.results;
};

export const fetchMovieByQuery = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`
  );
  return data.results;
};
