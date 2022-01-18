import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<div>books</div>} />
      <Route path="categories" element={<div>categories</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
