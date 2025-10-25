import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import '../styles/animations.css'

const sampleData = [
  { id:1, title: 'Classic Thali', desc: 'Homestyle meals with seasonal veg', img:'/public/img1.svg' },
  { id:2, title: 'Protein Box', desc: 'Paneer & lentils rich in protein', img:'/public/img2.svg' },
  { id:3, title: 'Light Meal', desc: 'Low-calorie, fresh ingredients', img:'/public/img3.svg' },
]

export default function Home(){
  return (
    <div className="page">
      <Header />
      <main className="container">
        <Hero />
        <section className="cards-grid" aria-label="meal options">
          {sampleData.map(item => (
            <Card key={item.id} title={item.title} desc={item.desc} img={item.img} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
