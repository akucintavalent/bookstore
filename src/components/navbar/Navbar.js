import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>Bookstore CMS</h1>
    <nav>
      <NavLink to="/">Books</NavLink>
      |
      <NavLink to="categories">Categories</NavLink>
    </nav>
  </div>
);

export default Navbar;
