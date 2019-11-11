import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { Nav } from './Nav';
import { HomePage } from './HomePage';
import { PublicPage } from './PublicPage';
import { PrivatePage } from './PrivatePage';
import { AuthorizePage } from './AuthorizePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
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
