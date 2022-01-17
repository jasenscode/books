import "./BookList.scss";
import BookCard from "../../components/BookCard/BookCard";

const BookList = (props) => {
  const { booksArr } = props;

  const getBook = booksArr.map((book, index) => {
    return <BookCard imgUrl={book.imageUrl} rating={book.rating} name={book.name} author={book.author} description={book.description} />;
  });

  return (
    <div className="book-list">
      {getBook}
      <BookCard />
    </div>
  );
};

export default BookList;
