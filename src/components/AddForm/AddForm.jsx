import "./AddForm.scss";

const AddForm = () => {
  return (
    <form action="" className="add-form">
      <label htmlFor="" className="add-form__label">
        Title
      </label>
      <input type="text" className="add-form__input" />
      <label htmlFor="" className="add-form__label">
        Author
      </label>
      <input type="text" className="add-form__input" />
      <label htmlFor="" className="add-form__label">
        Description
      </label>
      <input type="text" className="add-form__input" />
      <label htmlFor="" className="add-form__label">
        Image URL
      </label>
      <input type="text" className="add-form__input" />
      <label htmlFor="" className="add-form__label">
        Rating
      </label>
      <input type="text" className="add-form__input" />
      <button className="add-form__btn">Submit</button>
    </form>
  );
};

export default AddForm;
