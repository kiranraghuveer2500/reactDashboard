import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import List from "./components/List";
import Generator from "./components/Generator";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import App from "./components/App";
import "./App.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        {/* <Route index element={<Layout />} /> */}
         <Route path="Header" element={<Header />} /> 
        <Route path="Footer" element={<Footer />} />
        <Route path="List" element={<List />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Generator" element={<Generator />} />
     </Route>
    </Routes>
  </BrowserRouter>
      <App />
  </StrictMode>
  
);


