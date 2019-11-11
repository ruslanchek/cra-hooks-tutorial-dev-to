import React from 'react';
import { useStore } from 'react-stores';
import { store } from './store';
import { login, logout } from './authActions';

export const AuthorizePage: React.FC = () => {
  const authStoreState = useStore(store);

  return authStoreState.authorized ? (
    <div>
      <h1>Authorized</h1>
      <button onClick={logout}>Press to logout</button>
    </div>
  ) : (
    <div>
      <h1>Unauthorized</h1>
      <button onClick={login}>Press to login</button>
    </div>
  );
};
