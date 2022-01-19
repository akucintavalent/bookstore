/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBook = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const submitBookToStore = (event) => {
    const categoriesElement = event.target.previousElementSibling;
    const titleElement = categoriesElement.previousElementSibling;
    const newBook = {
      id: uuidv4(),
      title,
      category: categoriesElement.value,
    };
    titleElement.value = '';
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div>
        <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <select name="categories" id="categories">
          {categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </div>
    </div>
  );
};

AddBook.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default AddBook;
