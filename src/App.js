import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./containers/home/home";
import Favourite from "./containers/favourite/favourite";
import { Provider } from 'react-redux';
import { store } from "./redux/reducer/index";
import './App.css';
import Header from './components/header/header';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <div className="body-container">
          <Header/>
        <Route exact path="/" component={Home} />
          <Route exact path="/fav" component={Favourite} />
        </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
