import React from 'react'
import { Link } from 'react-router';


// import Footer from '../Footer'
import logo from './logo.jpg';


export default function Header () {
  return (
    <div className='div'>
      <header className="header">
        <Link to="/">
          <img src={logo} className='img-count' alt="" />
          <h1>Список дел</h1>
          

        </Link>
    </header>

    {/* <Footer /> */}
    
    </div>
  )
}
