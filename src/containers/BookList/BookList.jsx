import "./BookList.scss";

const BookList = (props) => {
  // retrieved array as prop here
  const { books } = props;

  const getBook = books.map((book) => {
    return <div>{book.name}</div>;
  });

  return <div className="book-list">{getBook}</div>;
};

export default BookList;
