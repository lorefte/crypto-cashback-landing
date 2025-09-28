import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import TrustSignals from './components/TrustSignals'
import Tokenomics from './components/Tokenomics'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Demo from './pages/Demo'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <TrustSignals />
        <Tokenomics />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  )
}

export default App
