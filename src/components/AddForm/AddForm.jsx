import "./AddForm.scss";

const AddForm = () => {
  return (
    <form action="" className="add-form">
      <label className="add-form__label">Title</label>
      <input type="text" className="add-form__input" />
      <label className="add-form__label">Author</label>
      <input type="text" className="add-form__input" />
      <label className="add-form__label">Description</label>
      <textarea rows="5" cols="25" type="text" className="add-form__input" />
      <label className="add-form__label">Image URL</label>
      <input type="text" className="add-form__input" />
      <label className="add-form__label">Rating</label>
      <select className="add-form__input add-form__select" name="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="add-form__btn">Submit</button>
    </form>
  );
};

export default AddForm;
