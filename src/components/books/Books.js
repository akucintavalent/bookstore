import Book from '../book/Book';

const Books = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      id: 1,
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      id: 2,
    },
    {
      title: 'Capital in the Twenty First Century',
      author: 'Thomas Piketty',
      category: 'Economy',
      id: 3,
    },
  ];
  const categories = [
    {
      name: 'Action',
      id: 1,
    },
    {
      name: 'Science fiction',
      id: 2,
    },
    {
      name: 'Economy',
      id: 3,
    },
  ];
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <div>
        <h3>ADD NEW BOOK</h3>
        <div>
          <input type="text" />
          <select name="categories" id="categories">
            {categories.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <button type="button">ADD BOOK</button>
        </div>
      </div>
    </>
  );
};

export default Books;
