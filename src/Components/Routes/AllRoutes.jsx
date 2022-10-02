import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Analitical from '../Pages/Analitical';
import Blog from '../Pages/Blog';
import Customers from '../Pages/Customers';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Pricing from '../Pages/Pricing';
import Publishing from '../Pages/Publishing';
import SignupPage from '../Pages/SignupPage';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/customer" element={<Customers/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/publishing" element={<Publishing/>}/>
      <Route path="/analytics" element={<Analitical/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
  );
}

export default AllRoutes;
