import "./AddForm.scss";

const AddForm = (props) => {
  const { clickSubmit } = props;

  return (
    <form action="" className="add-form" onSubmit={clickSubmit}>
      <label className="add-form__label">Title</label>
      <input type="text" className="add-form__input" name="title" required />
      <label className="add-form__label">Author</label>
      <input type="text" className="add-form__input" name="author" required />
      <label className="add-form__label">Description</label>
      <textarea rows="5" cols="25" type="text" className="add-form__input" name="description" required />
      <label className="add-form__label">Image URL</label>
      <input type="text" className="add-form__input" name="imageurl" required />
      <label className="add-form__label">Rating</label>
      <select className="add-form__input add-form__select" name="rating">
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
