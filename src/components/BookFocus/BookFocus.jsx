import "./BookFocus.scss";

const BookFocus = (props) => {
  const { imgUrl, title, author, description, rating } = props;

  return (
    <div className="book-focus">
      <img className="book-focus__img" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353048590l/6334.jpg" alt="" />
      <div className="book-focus__info">
        <h2 className="book-focus__title">Never Let Me Go</h2>
        <p className="book-focus__author">Kazuo Ishiguro</p>
        <p className="book-focus__description">
          Hailsham seems like a pleasant English boarding school, far from the influences of the city. Its students are well tended and supported, trained in art and literature, and become just the sort of people the world wants them to be.
        </p>
        <p className="book-focus__rating">Rating: 5/5</p>
      </div>
    </div>
  );

  // return (
  //   <div className="book-focus">
  //     <img className="book-focus__img" src={imgUrl} alt="" />
  //     <div className="book-focus__info">
  //       <h2 className="book-focus__title">{title}</h2>
  //       <p className="book-focus__author">{author}</p>
  //       <p className="book-focus__description">
  //         {description}
  //       </p>
  //       <p className="book-focus__rating">Rating: {rating}/5</p>
  //     </div>
  //   </div>
  // );
};

export default BookFocus;
