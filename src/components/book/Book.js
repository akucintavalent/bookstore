import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <div style={{
      display: 'flex',
    }}
    >
      <div>
        <ul>
          <li>{title}</li>
          <li>{author}</li>
          <li>{category}</li>
        </ul>
        <div>
          <button type="button">Comments</button>
          |
          <button type="button">Remove</button>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
