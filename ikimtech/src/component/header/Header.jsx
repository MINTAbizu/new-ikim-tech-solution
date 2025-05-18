import React, { useState } from 'react'
import '../header/header.css'
import logo from '../../component/image/icon/logo.jpg'
import { Link } from 'react-router-dom';
function Header() {
      const [isSidebarActive, setSidebarActive] = useState(false);
      const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };
  return (
    
       <div className='header'>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`} id="sidebar">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          {/* <li><Link to={'/Project'}>Project</Link></li> */}
          <li><Link to={'/service'}>Services</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          {/* <li><a href="#blog-section">Blog</a></li> */}
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>

      {/* Header */}
      <header className="site-navbar py-4 bg-white" role="banner">
        <div className="container">
          <div className="row align-items-center logoicon">
             <div className="col-11 col-xl-2 logoimage">
              <Link to={'/'} className="text-black h2 mb-0">
                <img src={logo}alt="" />
               
              </Link>
             </div>
             <div className="menuicon col-12 col-md-10 text-right">
              <div className="icon-menu" id="menu-toggle" onClick={toggleSidebar}>
                <span>☰</span>
              </div>
             </div>
          </div>
        </div>
      </header>
            <div className={`menu-overlay ${isSidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>

    </div>
  )
}

export default Header
