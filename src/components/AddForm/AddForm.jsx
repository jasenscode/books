import "./AddForm.scss";
import { useState } from "react";

const AddForm = () => {
  const [addBook, setAddBook] = useState({
    name: "",
    author: "",
    description: "",
    imageUrl: "",
    rating: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/book/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addBook),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="add-form__label">Title</label>
      <input type="text" className="add-form__input" required onInput={(e) => setAddBook({ ...addBook, name: e.target.value })} />

      <label className="add-form__label">Author</label>
      <input type="text" className="add-form__input" required onInput={(e) => setAddBook({ ...addBook, author: e.target.value })} />

      <label className="add-form__label">Description</label>
      <textarea rows="5" cols="25" type="text" className="add-form__input" required onInput={(e) => setAddBook({ ...addBook, description: e.target.value })} />

      <label className="add-form__label">Image URL</label>
      <input type="text" className="add-form__input" required onInput={(e) => setAddBook({ ...addBook, imageUrl: e.target.value })} />

      <label className="add-form__label">Rating</label>
      <select className="add-form__input add-form__select" onInput={(e) => setAddBook({ ...addBook, rating: e.target.value })}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value="Submit" className="add-form__btn" />
    </form>
  );
};

export default AddForm;
