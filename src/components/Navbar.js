import React from 'react'
import './navbar.css'
export const Navbar = () => {
    return (
        <div id='navbar'>
            <h1> Qa'ada GDG </h1>
            <img src={require('../assets/logogdg.png')} alt="logo" id='logo'/>
        </div>
    )
}
