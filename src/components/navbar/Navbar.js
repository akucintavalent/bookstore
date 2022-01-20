import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h1 className="title">Bookstore CMS</h1>
    <nav className="nav-links">
      <NavLink className={({ isActive }) => (isActive ? 'active-nav-link' : 'non-active-nav-link')} to="/">BOOKS</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-nav-link' : 'non-active-nav-link')} to="categories">CATEGORIES</NavLink>
    </nav>
  </div>
);

export default Navbar;
