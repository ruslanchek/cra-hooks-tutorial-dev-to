import { Store } from 'react-stores';

interface IStoreState {
  authorized: boolean;
}

export const store = new Store<IStoreState>(
  {
    authorized: false,
  },
  {
    persistence: true,
  },
);
