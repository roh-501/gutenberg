import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pattern from '../../assets/Pattern.svg';
export const ProjectTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: #5e56e7;
  padding-left: 250px;
  height: 100px;
  padding-top: 70px;
  padding-bottom: 25px;
  background-image: url("${Pattern}");

  span {
    font-size: 20px;
    color: #333333;
    display: block;
    padding-top: 10px;
  }
`;

export const GenreCard = styled(Link)`
  radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  background-color: #fdfefe;
  display: flex;
  padding-top: 15px;
`;

export const GenreCardContainer = styled.div`
  display: grid;
  grid-template-columns: 500px 500px;
  grid-row-gap: 30px;
  grid-column-gap: 50px;
  padding-top: 50px;
  justify-content: center;
`;

export const GenreCardImage = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 15px;
`;

export const StyledNextArrow = styled.img`
  width: 25px;
  height: 25px;
  display: block;
  margin-left: auto;
`;
