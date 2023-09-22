import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { StyledILi, StyledItemLink } from './HomePage.styled';

const HomePage = () => {
  const [data] = useHttp(fetchMovies);

  return (
    <div>
      <ol>
        {data.map(({ id, title }) => {
          return (
            <StyledILi key={id}>
              <StyledItemLink to={`/movies/${id.toString()}`}>
                {title}
              </StyledItemLink>
            </StyledILi>
          );
        })}
      </ol>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
