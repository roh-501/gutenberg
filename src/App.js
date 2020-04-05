import React from 'react';
import Home from './components/Home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookCategories from './components/BookCategories/book-categories';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:bookCategory' component={BookCategories} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
