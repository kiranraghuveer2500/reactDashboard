import React from 'react';

import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div>
    
      <nav>
      <Header/>
        <ul>
        <li>
          <Link to="/Login">Profile</Link>
        </li>
         
          <li>
            <Link to="/List">Issue Book</Link>
          </li>
          <li>
           <button><Link to="/Footer">Scan QR code</Link></button> 
          </li>
          <li>
            <Link to="/Generator">generate qr code</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;