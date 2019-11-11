import React from 'react';
import { useStore } from 'react-stores';
import { store } from './store';

export const AuthorizePage: React.FC = () => {
  const authStoreState = useStore(store);

  return authStoreState.authorized ? (
    <div>
      <h1>Authorized</h1>
      <button>Press to exit</button>
    </div>
  ) : (
    <div>
      <h1>Unauthorized</h1>
      <button>Press to login</button>
    </div>
  );
};
