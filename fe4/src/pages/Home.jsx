import React from 'react'
import Hero from '../components/hero/Hero'
import Main from '../components/main/Main'
import Test from '../components/test/Test'
import Service from '../components/services/Service'

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Main></Main>
      <Test></Test>
      <Service></Service>
    </div>
  )
}

export default Home