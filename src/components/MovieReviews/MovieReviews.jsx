import { useHttp } from 'hooks/useHttp';
import React, { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import {
  StyledAuhtorName,
  StyledComment,
  StyledContent,
  StyledItemReview,
  StyledReviewList,
  StyledReviewWrapper,
} from './MovieReviews.style';
import { Loader } from 'components/Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [data] = useHttp(fetchMovieReviews, movieId);

  return (
    <StyledReviewWrapper>
      {!data.length ? (
        <h1>There are no reviews for this movie</h1>
      ) : (
        <StyledReviewList>
          {data?.map(({ author, content, id }) => (
            <StyledItemReview key={id}>
              <StyledAuhtorName>{author}</StyledAuhtorName>
              <hr />
              <StyledComment>
                Comment: <StyledContent>{content}</StyledContent>
              </StyledComment>
            </StyledItemReview>
          ))}
        </StyledReviewList>
      )}
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </StyledReviewWrapper>
  );
};

export default MovieReviews;
