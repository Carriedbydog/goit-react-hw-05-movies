import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import PageNotFound from 'pages/PageNotFound';
import SingleMovie from 'pages/SingleMovie';
import MovieCats from 'components/MovieCasts/MovieCasts';
import MovieReviews from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/:movieId" element={<SingleMovie />}>
            <Route path="cast" element={<MovieCats />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="movies" element={<Movies />}>
            <Route
              index
              element={
                <h1>If you want to know more about the movie, click on it!</h1>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};