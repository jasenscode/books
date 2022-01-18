import "./BookFocus.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookFocus = (props) => {
  const { clickFocus, book } = props;

  const getBook = (book) => {
    return (
      <div className="book-focus">
        <FontAwesomeIcon className="book-focus__close" icon="times" onClick={clickFocus} />
        <img className="book-focus__img" src={book.imageUrl} alt="" />
        <div className="book-focus__info">
          <h2 className="book-focus__title">{book.name}</h2>
          <p className="book-focus__author">{book.author}</p>
          <p className="book-focus__description">{book.description}</p>
          <p className="book-focus__rating">Rating: {book.rating}/5</p>
        </div>
      </div>
    );
  };

  return <div>{getBook(book)}</div>;
};

export default BookFocus;
