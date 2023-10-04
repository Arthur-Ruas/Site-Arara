import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header flex'>
        <h1 className='arara'>Arara</h1>
        <div className='navDiv'>
            <ul className='nav flex'>
                <li className='navItems'>Blog</li>
                <li className='navItems'>Saiba mais</li>
                <li className='navItems'>Faça uma doação</li>
            </ul>
        </div>
    </header>
  )
}

export default Header