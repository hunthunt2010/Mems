import React from 'react';
import Home from '../components/Home';
import {Route}  from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={Home}/>
  </div>
);

export default App;