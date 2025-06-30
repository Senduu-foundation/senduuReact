import React from 'react'

function Header() {
  return (
    <header >
        <h1>SENDUU FOUNDATION</h1>
        <div className='header-right'>
          <nav>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/donate">About</a>
          </nav>
        <button className='connect-wallet'>
            Connect Wallet
        </button>
        </div>
    </header>
  )
}

export default Header