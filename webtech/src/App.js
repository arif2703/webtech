import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ReferencePage from './pages/reference';
import Header from './layout/header.layout'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/reference">
            <ReferencePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
