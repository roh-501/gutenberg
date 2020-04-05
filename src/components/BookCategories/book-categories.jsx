import React from 'react';
import { withRouter } from 'react-router-dom';
import BookList from '../BookList/book-list';
import Back from '../../assets/Back.svg';
import { StyledBackButton, StyledGenre } from './book-categories.styles';

const BookCategories = withRouter(({ match, history }) => {
  return (
    <div>
      <StyledGenre
        onClick={() => {
          history.push('/');
        }}
      >
        {' '}
        <StyledBackButton src={Back} />
        {match.params.bookCategory.charAt(0).toUpperCase() + match.params.bookCategory.slice(1) }
      </StyledGenre>
      <BookList bookTopicList={match.params.bookCategory} />
    </div>
  );

});

export default BookCategories;
