import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../book/Book';
import AddBook from '../add_book/AddBook';
import { getData } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

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
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
      <AddBook categories={categories} />
    </>
  );
};

export default Books;
