import "./BookCard.scss";

const BookCard = (props) => {
  const { imgUrl, name, author, clickBook } = props;

  return (
    <div className="book-card" onClick={clickBook}>
      {imgUrl && <img className="book-card__img" src={imgUrl} alt="Book cover artwork" />}
      <div className="book-card-info">
        <p className="book-card__name">{name}</p>
        <p className="book-card__author">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
