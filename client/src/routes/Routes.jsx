import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieContextProvider from '../contexts/movieContext';
import HomePage from '../Pages/HomePage/HomePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </MovieContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
