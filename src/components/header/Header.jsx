import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <nav>
        <Link to="/" path="/" className='navbar'>Home</Link>
        <Link to="/contact" className='navbar' >Contact</Link>
        <Link to="/about" className='navbar' >About</Link>
    </nav>
  )
}
