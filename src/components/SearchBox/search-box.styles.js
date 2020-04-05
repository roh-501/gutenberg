import styled from 'styled-components';
import Search from '../../assets/Search.svg';

export const StyledSearchBox = styled.input`
  border-radius: 4px;
  font-size: 16px
  padding-left: 4px;
  padding-right: 4px;
  height: 40px;
  width: 85vw;
  margin-bottom: 30px;
  background-color: #f0f0f6;
  margin-left: 140px;
  margin-bottom: 35px;
  border: none;
  background-image: url("${Search}");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-position-y: center;
  padding-left: 40px;

  ::placeholder {
  color: #A0A0A0;
  font-size: 16px;
  }

  &:focus {
    outline-color: #5e56e7;
  }
`;
