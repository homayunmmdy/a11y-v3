import React from 'react'
import Hero from './components/hero/Hero'
import Newsletter from './components/newsletter/Newsletter'
import Features from './components/features/Features'
import Pricing from './components/pricing/Pricing'

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Newsletter />
    </main>
  )
}

export default Home
