import React, { useState } from 'react'
import About from '../components/Abou/About'
import Discover from '../components/Discover/Discover'
import Docs from '../components/Docs/Docs'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/Services/Services'
import Sidebar from '../components/Sidebar'
import Signin from '../components/Signin/Signin';
import { Route } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <About/>
      <Services/>
      <Discover/>
      <Docs/>
      <Footer/>
    </>
  )
}

export default Home;