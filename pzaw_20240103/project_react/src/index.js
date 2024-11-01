import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import Sci from './Sci';
// import MainIndex from './mainIndex';
// import MainerIndex from './mainerIndex';
// import MyOwnTable from './myOwnTable';
// import Tile from './tile';
import MainApp from './Task_Grid/mainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp></MainApp>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
