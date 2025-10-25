import React from 'react'

export default function Hero(){
  return (
    <section className="hero card-hero" role="region" aria-label="hero">
      <div className="hero-content">
        <h1 className="hero-title">Home-style meals delivered</h1>
        <p className="hero-sub">Fresh. Healthy. Affordable. Mobile-first design example.</p>
        <div style={{marginTop:16}}>
          <button className="btn-primary">Order Now</button>
        </div>
      </div>
      <div className="hero-illu" aria-hidden="true">
        <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="12" fill="#F2F6FF"/>
        </svg>
      </div>
    </section>
  )
}
