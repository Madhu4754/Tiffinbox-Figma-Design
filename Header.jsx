import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">Tiffinbox</div>
        </div>
        <nav className="nav">
          <button className="btn-ghost">Login</button>
        </nav>
      </div>
    </header>
  )
}
