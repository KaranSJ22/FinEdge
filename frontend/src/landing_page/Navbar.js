import React from 'react';
import './Navbar.css';
// import Logo  from '../assets/logo.svg';
import Logo from '../assets/logo.svg';
function Navbar() {
    return ( 
        <nav className='nav-bar'>
            <div className='logo'>
                <img src={Logo} className='img-logo'></img>
                
            </div>
            <div className='nav-btns'>
                <a className='nav-btn'>Signup</a>
                <a className='nav-btn'>About</a>
                <a className='nav-btn'>Products</a>
                <a className='nav-btn'>Pricing</a>
                <a className='nav-btn'>Support</a>
                <a className='nav-btn ham'><i class="fa-solid fa-bars"></i></a>
                <a></a>

            </div>
        </nav>
     );
}

export default Navbar;