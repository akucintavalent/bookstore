import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeData } from '../../redux/books/books';
import './Book.css';
import image from './circle.png';

const Book = (props) => {
  const {
    title, category, id,
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeData(id));
  };
  return (
    <div className="book-container">
      <div className="book-info-container">
        <ul className="book-info">
          <li className="book-category">{category}</li>
          <li className="book-title">{title}</li>
        </ul>
        <div className="buttons">
          <button className="remove-button" type="button">Comments</button>
          <span className="vertical-line">|</span>
          <button className="remove-button" type="button" onClick={removeBookFromStore}>Remove</button>
          <span className="vertical-line">|</span>
          <button className="remove-button" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <img className="circle" src={image} alt="progress circle" />
        <div className="completed-container">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-number">Chapter 17</p>
        <button className="update-progress" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
