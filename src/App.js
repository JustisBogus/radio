import React, { Component } from 'react';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

const Redux = (
    <Provider store={store}>
        <Main />
    </Provider>
)

class App extends Component {
  render() {
    return (
        Redux
    );
  }
}

export default App;

