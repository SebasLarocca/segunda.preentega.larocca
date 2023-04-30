import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemContainer } from './components/ItemContainer/ItemContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <BrowserRouter>
            <Navbar />
            <Routes>
                  <Route path='/' element={<ItemContainer />} />
                  <Route path='/item/:id' element={<ItemDetailContainer />} />
                  <Route path='/category/:id' element={<ItemContainer />} />
                  <Route path='/*' element={<h1>Not found</h1> } />
            </Routes>
      </BrowserRouter>
);    