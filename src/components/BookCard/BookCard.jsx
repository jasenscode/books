import "./BookCard.scss";

const BookCard = (props) => {
  const { imgUrl, name, author } = props;
  // private String imageUrl;
  // private String name;
  // private String author;
  // private String rating;
  // private int yearPublished;

  return (
    <div className="book-card">
      <img className="book-card__img" src={imgUrl} alt="Book cover artwork" />
      <p className="book-card__name">{name}</p>
      <p className="book-card__author">{author}</p>
    </div>
  );
};

export default BookCard;
