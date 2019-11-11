import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './index.css';

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome!</p>
  </div>
);

const PublicPage = () => (
  <div>
    <h1>Public page</h1>
    <p>Nothing special here</p>
  </div>
);

const PrivatePage = () => (
  <div>
    <h1>Private page</h1>
    <p>Wake up, Neo...</p>
  </div>
);

const AuthorizePage = () => (
  <div>
    <h1>Authorize</h1>
    <button>Press to login</button>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
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

      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/public' component={PublicPage} />
          <Route exact path='/private' component={PrivatePage} />
          <Route exact path='/authorize' component={AuthorizePage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
