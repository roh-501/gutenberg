import React from 'react';
import {
  ProjectTitle,
  GenreCard,
  GenreCardContainer,
  GenreCardImage,
  StyledNextArrow,
} from './home.styles';
import { BookCardContainer } from '../BookList/book-list.styles';
import Fiction from '../../assets/Fiction.svg';
import Drama from '../../assets/Drama.svg';
import Humour from '../../assets/Humour.svg';
import Politics from '../../assets/Politics.svg';
import Philosophy from '../../assets/Philosophy.svg';
import History from '../../assets/History.svg';
import Adventure from '../../assets/Adventure.svg';
import Next from '../../assets/Next.svg';

const genre = [
  {
    id: '1',
    value: 'FICTION',
    location: <GenreCardImage alt='Fiction' src={Fiction} />,
  },
  {
    id: '2',
    value: 'DRAMA',
    location: <GenreCardImage alt='Drama' src={Drama} />,
  },
  {
    id: '3',
    value: 'HUMOUR',
    location: <GenreCardImage alt='Humour' src={Humour} />,
  },
  {
    id: '4',
    value: 'POLITICS',
    location: <GenreCardImage alt='Politics' src={Politics} />,
  },
  {
    id: '5',
    value: 'PHILOSOPHY',
    location: <GenreCardImage alt='Philosophy' src={Philosophy} />,
  },
  {
    id: '6',
    value: 'HISTORY',
    location: <GenreCardImage alt='History' src={History} />,
  },
  {
    id: '7',
    value: 'ADVENTURE',
    location: <GenreCardImage alt='Adventure' src={Adventure} />,
  },
];

const Home = () => {
  return (
    <div>
        <ProjectTitle>
          Gutenberg Project
          <span>
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </span>
        </ProjectTitle>
      <BookCardContainer>
        <GenreCardContainer>
          {genre.map((item) => (
            <GenreCard to={`${item.value.toLocaleLowerCase()}`}>
              {item.location}
              {item.value}
              <StyledNextArrow alt='Next' src={Next} />
            </GenreCard>
          ))}
        </GenreCardContainer>
      </BookCardContainer>
    </div>
  );
}
export default Home;