import React from 'react';
import { SearchBox } from '../SearchBox/search-box';
import {
  BookCard,
  BookTitle,
  BookAuthor,
  BookCardContainer,
  BookCover,
} from './book-list.styles';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', this.props);
    this.state = {
      topic: [],
      searchField: '',
    };
  }

  componentDidMount() {
    const { bookTopicList } = this.props;
    fetch(`http://skunkworks.ignitesol.com:8000/books/?topic=${bookTopicList}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          topic: data.results,
        })
      );
  }

  handleChange = (e) =>
    this.setState({ searchField: e.target.value.toLowerCase() });

  renderBookList = () => {
    const { topic, searchField } = this.state;

    const filteredBooks = topic.filter(
      (item) =>
        item.title.toLowerCase().includes(searchField) ||
        (item.authors.length > 0 &&
          item.authors[0].name.toLowerCase().includes(searchField))
    );

    return searchField
      ? filteredBooks.map((item) => (
          <div key={item.id}>
            <a
              href={`https://www.gutenberg.org/files/${item.id}/${item.id}-h/${item.id}-h.htm`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <BookCover
                alt='book'
                src={`http://www.gutenberg.org/cache/epub/${item.id}/pg${item.id}.cover.medium.jpg`}
              />
              <BookTitle>{item.title}</BookTitle>
              <BookAuthor>
                {item.authors.length > 0 && item.authors[0].name}
              </BookAuthor>
            </a>
          </div>
        ))
      : topic.map((item) => (
          <div key={item.id}>
            <a
              href={`https://www.gutenberg.org/files/${item.id}/${item.id}-h/${item.id}-h.htm`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <BookCover
                alt='book'
                src={`http://www.gutenberg.org/cache/epub/${item.id}/pg${item.id}.cover.medium.jpg`}
              />
              <BookTitle>{item.title}</BookTitle>
              <BookAuthor>
                {' '}
                {item.authors.length > 0 && item.authors[0].name}
              </BookAuthor>
            </a>
          </div>
        ));
  };

  render() {
    const { topic } = this.state;
    return (
      console.log('topic', topic),
      (
        <div>
          <SearchBox placeholder='Search' handleChange={this.handleChange} />
          <BookCardContainer>
            <BookCard>{this.renderBookList()}</BookCard>
          </BookCardContainer>
        </div>
      )
    );
  }
}

export default BookList;
