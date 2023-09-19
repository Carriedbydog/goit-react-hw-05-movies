import axios from 'axios';

export const fetchMovies = async params => {
  return await axios
    .get('https://api.themoviedb.org/3/trending/movie/day', {
      params: {
        language: 'en-US',
        api_key: '078d063375fca7107accae9f7c2444d5',
        ...params,
      },
    })
    .then(({ status, message, data }) => {
      if (status !== 200) {
        throw new Error(message);
      }
      return data.results;
    });
};

export const fetchMovieById = async (id, params) => {
  return await axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        language: 'en-US',
        api_key: '078d063375fca7107accae9f7c2444d5',
        ...params,
      },
    })
    .then(({ status, message, data }) => {
      if (status !== 200) {
        throw new Error(message);
      }
      console.log(data);
      return data;
    });
};
