import "./BookFocus.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookFocus = (props) => {
  const { clickFocus, book } = props;

  const handleDelete = () => {
    fetch(`http://localhost:8080/books/${book.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };

  const getBook = (book) => {
    return (
      <div className="book-focus">
        <div className="book-focus__icon-container">
          <FontAwesomeIcon className="book-focus__icon icon-trash" icon="trash" onClick={handleDelete} />
          <FontAwesomeIcon className="book-focus__icon icon-close" icon="times" onClick={clickFocus} />
        </div>

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
