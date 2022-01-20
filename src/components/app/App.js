import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Books from '../books/Books';
import Categories from '../categories/Categories';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
