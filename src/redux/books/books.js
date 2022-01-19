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
  item_id: payload.id,
});

export const getData = () => (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzyTDYA0R80OtSGSmP3v/books/')
    .then((response) => {
      const books = response.data;
      Object.keys(books).forEach((itemId) => {
        const [book] = books[itemId];
        book.item_id = itemId;
        dispatch(addBook(book));
      });
    })
    .catch(() => {});
};

export const removeData = (id) => (dispatch) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzyTDYA0R80OtSGSmP3v/books/${id}`)
    .then(() => dispatch(removeBook({ id })))
    .catch(() => {});
};

export const addData = (book) => (dispatch) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzyTDYA0R80OtSGSmP3v/books/', book)
    .then(() => dispatch(addBook(book)))
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.item_id);
    default:
      return state;
  }
};

export default reducer;
