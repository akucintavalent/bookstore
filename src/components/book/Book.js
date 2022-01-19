import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeData } from '../../redux/books/books';

const Book = (props) => {
  const {
    title, category, id,
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeData(id));
  };
  return (
    <div style={{
      display: 'flex',
    }}
    >
      <div>
        <ul>
          <li>{title}</li>
          <li>{category}</li>
        </ul>
        <div>
          <button type="button">Comments</button>
          |
          <button type="button" onClick={removeBookFromStore}>Remove</button>
          |
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
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
