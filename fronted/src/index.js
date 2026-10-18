

import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { HomePage } from './loding_page/home/HomePage';
import { Signup } from './loding_page/signup/Signup.js';
import { AboutPage } from './loding_page/about/AboutPage.js';
import { ProductPage } from './loding_page/products/ProductPage.js';
import { PricingPage } from './loding_page/pricing/PricingPage.js';
import { SupportPage } from './loding_page/support/SupportPage.js';
import { Navbar } from './loding_page/Navbar.js';
import { Footer } from './loding_page/Footer.js';
import { NotFound } from './loding_page/NotFound.js';
import { Login } from "./loding_page/login/Login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/products' element={<ProductPage/>}></Route>
     <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
);


