import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './component/Landing';
import Nopage from './component/Nopage';
import Movie from './component/Movie';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path='/' element={<Landing />} />
      <Route path='/movie' element={<Movie />} />
      <Route path="*" element={<Nopage />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
