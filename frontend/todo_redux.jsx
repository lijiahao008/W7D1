import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import  configureStore  from './store/store';
import allTodos from './reducers/selectors';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('container');
  ReactDOM.render(<Root store={configureStore} />, container);
});

window.store = configureStore;
