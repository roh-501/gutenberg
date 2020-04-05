import styled from 'styled-components';

export const BookCard = styled.div`
         width: 85vw;
         display: grid;
         grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
         grid-gap: 20px;
         margin-left: 95px;
       `;

export const BookTitle = styled.div`
         font-size: 12px;
         color: #333333;
         font-weight: 600;
         width: 114px;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 2;
         -webkit-box-orient: vertical;
         margin: 3px;
       `;

export const BookAuthor = styled.div`
         font-size: 12px;
         color: #a0a0a0;
         font-weight: 600;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 1;
         -webkit-box-orient: vertical;
         width: 114px;
         margin: 3px;
       `;

export const BookCardContainer = styled.div`
         background-color: #f8f7ff;
         position: absolute;
         width: -webkit-fill-available;
         margin-bottom: 100px;
         padding: 50px 50px;
         height: -webkit-fill-available;
         display: table;
       `;

export const BookCover = styled.img`
         width: 114px;
         height: 162px;
         border-radius: 8px;
         box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
         display: flex;
       `;
