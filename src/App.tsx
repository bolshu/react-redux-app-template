import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Counter from 'pages/Counter';

import AppLayout from 'components/AppLayout';
import Main from 'components/Main';
import PageHeader from 'components/PageHeader';

const App = () => (
  <AppLayout>
    <Router>
      <PageHeader />

      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <Counter />
          </Route>
        </Switch>
      </Main>
    </Router>
  </AppLayout>
);

export default App;
