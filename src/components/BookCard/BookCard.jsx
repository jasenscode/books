import "./BookCard.scss";

const BookCard = (props) => {
  const { imgUrl, rating, name, author, description } = props;
  // private String imageUrl;
  // private String name;
  // private String author;
  // private String rating;
  // private int yearPublished;

  return (
    <div className="book-card">
      <img className="book-card__img" src={imgUrl} alt="Picture of book cover" />
      {rating && <p className="book-card__rating">{rating}/5</p>}
      <p className="book-card__name">{name}</p>
      <p className="book-card__author">{author}</p>
      <p className="book-card__description">{description}</p>
    </div>
    // <div className="book-card">
    //   <img className="book-card__img" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353048590l/6334.jpg" alt="" />
    //   <p className="book-card__rating">5/5</p>
    //   <p className="book-card__name">Never Let Me Go</p>
    //   <p className="book-card__author">Kazuo Ishiguro</p>
    //   <p className="book-card__description">
    //     Hailsham seems like a pleasant English boarding school, far from the influences of the city. Its students are well tended and supported, trained in art and literature, and become just the sort of people the world wants them to be. But,
    //     curiously, they are taught nothing of the outside world and are allowed little contact with it.
    //   </p>
    // </div>
  );
};

export default BookCard;
