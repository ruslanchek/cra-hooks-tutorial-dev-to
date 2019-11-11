import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/public'>
            Public
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/private'>
            Private
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/authorize'>
            Authorize
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
