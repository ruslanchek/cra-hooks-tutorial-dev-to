import { store } from './store';

export function login() {
  store.setState({
    authorized: true,
  });
}

export function logout() {
  store.setState({
    authorized: false,
  });
}
