import { useSelector } from 'react-redux';
import Book from '../book/Book';
import AddBook from '../add_book/AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
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
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook categories={categories} />
    </>
  );
};

export default Books;
