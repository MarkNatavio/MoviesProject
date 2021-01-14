import React from 'react'
import './App.css';

import { Switch, Route } from "react-router-dom";
import { Home } from './components/home/Home'
import { MovieInfo } from './components/movieInfo/MovieInfo'

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/movie/:id" component={MovieInfo}/>
      </Switch>
    </main>
  );
}

export default App;
