/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/books/books';
import './AddBook.css';

const AddBook = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const submitBookToStore = (event) => {
    const categoriesElement = event.target.previousElementSibling;
    const titleElement = categoriesElement.previousElementSibling;
    const newBook = {
      item_id: uuidv4(),
      title,
      category: categoriesElement.value,
    };
    titleElement.value = '';
    dispatch(addData(newBook));
  };
  return (
    <div className="add-book-container">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <div className="add-book-form-container">
        <input className="book-title-input" type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <select className="book-category-input" name="categories" id="categories">
          <option className="first-option" value="" disabled selected hidden>Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
        <button className="add-book-button" type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </div>
    </div>
  );
};

AddBook.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default AddBook;
