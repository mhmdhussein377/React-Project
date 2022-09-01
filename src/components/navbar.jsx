import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
import Logo from "../assets/logo.png"
import "../styles/navbarStyles.css"

const navbar = () => {
    let [show,setShow] = useState(false);

    function handleClick(e) {
        setShow(!show);
    }

  return (
    <header>
        <nav className='navbar'>
            <div className="logo">
                <Link to="/"><img src={Logo} alt="logo"></img></Link>
            </div>
            <ul className={`${show ? "nav-menu active" : "nav-menu"}`}>
                <li className="nav-item">
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pricing" className='nav-link'>Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link to="/faq" className='nav-link'>FAQ</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className='nav-link'>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {show ? (<FaTimes size={20} style={{color: "#ffffff"}} />) : (<FaBars size={20} style={{color: "#ffffff"}} />)}
            </div>
        </nav>
    </header>
  )
}

export default navbar