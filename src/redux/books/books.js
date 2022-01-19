import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  id: payload.id,
});

export const getData = () => (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzyTDYA0R80OtSGSmP3v/books/')
    .then((response) => {
      const books = response.data;
      Object.keys(books).forEach((itemId) => {
        const [book] = books[itemId];
        book.id = itemId;
        dispatch(addBook(book));
      });
      console.log(books);
    });
//   dispatch({ type: "PLUS" })
//   dispatch({ type: "PLUS" })
//   dispatch({ type: "PLUS" })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
