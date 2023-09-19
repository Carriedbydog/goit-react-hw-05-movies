import React from 'react';

const Movies = () => {
  return (
    <div>
      Movies
      {/* {movies.map(
        ({ id, title, poster_path, release_date, overview, vote_average }) => (
          <li key={id}>
            <h2>{title}</h2>
            <img src={poster_path} alt={title} />
            <p>Date of release: {release_date}</p>
            <p>Vote average: {vote_average}</p>
          </li>
        )
      )} */}
    </div>
  );
};

export default Movies;
