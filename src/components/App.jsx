import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { lazy } from 'react';
// ===============================================================================
const Movies = lazy(() => import('pages/Movies/Movies'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const SingleMovie = lazy(() => import('pages/SingleMovie/SingleMovie'));
const MovieCasts = lazy(() => import('components/MovieCasts/MovieCasts'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/:movieId" element={<SingleMovie />}>
            <Route path="cast" element={<MovieCasts />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
