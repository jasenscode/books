import "./BookList.scss";
import BookCard from "../../components/BookCard/BookCard";

const BookList = (props) => {
  const { booksArr, handleClick } = props;

  const getBooks = booksArr.map((book, index) => {
    return <BookCard key={"book" + index} imgUrl={book.imageUrl} name={book.name} author={book.author} clickBook={handleClick} />;
  });

  return <div className="book-list">{getBooks}</div>;
};

export default BookList;
