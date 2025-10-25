import React from 'react'
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Tiffinbox — Demo build</small>
      </div>
    </footer>
  )
}
