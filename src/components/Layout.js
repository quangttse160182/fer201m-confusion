import { Link, NavLink } from 'react-router-dom';

export const Layout = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/blogs'>Blogs</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/profile/1' activeStyle={{ color: 'red' }}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
