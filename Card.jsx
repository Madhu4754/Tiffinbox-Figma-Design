import React from 'react'
import '../styles/card.css'

export default function Card({title, desc, img}){
  return (
    <article className="card" tabIndex="0">
      <div className="card-image-wrap">
        <img src={img} alt={title} className="card-image" loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
        <div className="card-actions">
          <button className="card-cta">Order</button>
        </div>
      </div>
    </article>
  )
}
