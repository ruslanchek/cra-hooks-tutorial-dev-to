import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/public'>Public</Link>
        </li>
        <li>
          <Link to='/private'>Private</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/public' component={PublicPage} />
        <Route exact path='/private' component={PrivatePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
