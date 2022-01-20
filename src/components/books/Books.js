import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../book/Book';
import AddBook from '../add_book/AddBook';
import { getData, removeAllBooks } from '../../redux/books/books';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    return () => {
      dispatch(removeAllBooks());
    };
  }, []);

  const books = useSelector((state) => state.booksReducer);
  const categories = [
    { name: 'Action and adventure', id: 0 },
    { name: 'Art/architecture', id: 1 },
    { name: 'Alternate history', id: 2 },
    { name: 'Autobiography', id: 3 },
    { name: 'Anthology', id: 4 },
    { name: 'Biography', id: 5 },
    { name: 'Chick lit', id: 6 },
    { name: 'Business/economics', id: 7 },
    { name: 'Children\'s', id: 8 },
    { name: 'Crafts/hobbies', id: 9 },
    { name: 'Classic', id: 10 },
    { name: 'Cookbook', id: 11 },
    { name: 'Comic book', id: 12 },
    { name: 'Diary', id: 13 },
    { name: 'Coming-of-age', id: 14 },
    { name: 'Dictionary', id: 15 },
    { name: 'Crime', id: 16 },
    { name: 'Encyclopedia', id: 17 },
    { name: 'Drama', id: 18 },
    { name: 'Guide', id: 19 },
    { name: 'Fairytale', id: 20 },
    { name: 'Health/fitness', id: 21 },
    { name: 'Fantasy', id: 22 },
    { name: 'History', id: 23 },
    { name: 'Graphic novel', id: 24 },
    { name: 'Home and garden', id: 25 },
    { name: 'Historical fiction', id: 26 },
    { name: 'Humor', id: 27 },
    { name: 'Horror', id: 28 },
    { name: 'Journal', id: 29 },
    { name: 'Mystery', id: 30 },
    { name: 'Math', id: 31 },
    { name: 'Paranormal romance', id: 32 },
    { name: 'Memoir', id: 33 },
    { name: 'Picture book', id: 34 },
    { name: 'Philosophy', id: 35 },
    { name: 'Poetry', id: 36 },
    { name: 'Prayer', id: 37 },
    { name: 'Political thriller', id: 38 },
    { name: 'Religion, spirituality, and new age', id: 39 },
    { name: 'Romance', id: 40 },
    { name: 'Textbook', id: 41 },
    { name: 'Satire', id: 42 },
    { name: 'True crime', id: 43 },
    { name: 'Science fiction', id: 44 },
    { name: 'Review', id: 45 },
    { name: 'Short story', id: 46 },
    { name: 'Science', id: 47 },
    { name: 'Suspense', id: 48 },
    { name: 'Self help', id: 49 },
    { name: 'Thriller', id: 50 },
    { name: 'Sports and leisure', id: 51 },
    { name: 'Western', id: 52 },
    { name: 'Travel', id: 53 },
    { name: 'Young adult', id: 54 },
    { name: 'True crime', id: 55 },
  ];
  return (
    <div className="books-container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
      <AddBook categories={categories} />
    </div>
  );
};

export default Books;
