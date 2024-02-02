import React from 'react'
import Hero from './components/hero/Hero'
import Newsletter from './components/newsletter/Newsletter'

const Home = () => {
  return (
    <div className='bg-base-100'>
      <Hero />
      <Newsletter />
    </div>
  )
}

export default Home
