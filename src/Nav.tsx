import React from 'react';
import { NavLink } from 'react-router-dom';
import { store } from './store';
import { useStore } from 'react-stores';

export const Nav: React.FC = () => {
  const authStoreState = useStore(store);

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
            {authStoreState.authorized ? 'Authorized' : 'Login'}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
