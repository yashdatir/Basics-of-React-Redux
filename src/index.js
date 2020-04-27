import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Message from './message';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <center>
    <App />
    <Message />
    </center>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);