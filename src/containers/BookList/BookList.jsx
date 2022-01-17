import "./BookList.scss";
import BookCard from "../../components/BookCard/BookCard";

const BookList = (props) => {
  const { booksArr } = props;

  const getBook = booksArr.map((book, index) => {
    return <BookCard key={"book" + index} imgUrl={book.imageUrl} name={book.name} author={book.author} />;
  });

  return <div className="book-list">{getBook}</div>;
};

export default BookList;
