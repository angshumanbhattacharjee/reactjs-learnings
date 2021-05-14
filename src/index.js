import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import { MovieGalleryApp } from './pages/MovieGalleryApp';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <App1 /> */}
    <MovieGalleryApp />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
