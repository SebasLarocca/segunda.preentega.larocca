import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemContainer } from './components/ItemContainer/ItemContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartContext } from './components/context/UseContext';
import { CartProvider } from './components/CartProvider/CartProvider';
import { Orders } from './components/Orders/Orders';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAotlZIuOB8fGCfLjASySge_zAiUDaV-hA",
      authDomain: "entregafinalcoderprueba.firebaseapp.com",
      projectId: "entregafinalcoderprueba",
      storageBucket: "entregafinalcoderprueba.appspot.com",
      messagingSenderId: "882613862302",
      appId: "1:882613862302:web:eee0fa4cf8fcb29ed5a08f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <BrowserRouter>
            <CartProvider>
                  <Navbar />
                  <Routes>
                        <Route path='/' element={<ItemContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/category/:id' element={<ItemContainer />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/*' element={<h1>Not found</h1>} />
                  </Routes>
            </CartProvider>
      </BrowserRouter>
);    