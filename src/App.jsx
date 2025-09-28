import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TrustSignals from './components/TrustSignals'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <TrustSignals />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  )
}

export default App
