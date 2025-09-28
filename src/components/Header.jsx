import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download, Twitter, Play } from 'lucide-react'
import WaitlistModal from './WaitlistModal'
import ContractAddress from './ContractAddress'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://cdn.discordapp.com/attachments/1252971251899830374/1421678062843596921/IMG_6322.png?ex=68d9e85f&is=68d896df&hm=f2aa5d915464c7b9a794824e34228fe5be872e68e302e8f715c37e3633489570&"
              alt="Reflow Logo"
              className="w-8 h-8 rounded-lg object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-heading font-bold text-xl text-neutral-900">
              Reflow
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-neutral-600 hover:text-primary-main transition-colors">
              How it Works
            </a>
            <a href="#tokenomics" className="text-neutral-600 hover:text-primary-main transition-colors">
              Tokenomics
            </a>
            <a href="#features" className="text-neutral-600 hover:text-primary-main transition-colors">
              Features
            </a>
            <a href="#stores" className="text-neutral-600 hover:text-primary-main transition-colors">
              Stores
            </a>
            <a href="#faq" className="text-neutral-600 hover:text-primary-main transition-colors">
              FAQ
            </a>
            <div className="flex items-center space-x-3">
              <a 
                href="/demo"
                className="btn-secondary flex items-center space-x-2"
              >
                <Play size={16} />
                <span>Try Demo</span>
              </a>
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Join Waitlist</span>
              </button>
              <a 
                href="https://x.com/Reflowcrypto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={16} className="text-neutral-600" />
              </a>
              <ContractAddress />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-neutral-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-neutral-600 hover:text-primary-main transition-colors">
                How it Works
              </a>
              <a href="#tokenomics" className="text-neutral-600 hover:text-primary-main transition-colors">
                Tokenomics
              </a>
              <a href="#features" className="text-neutral-600 hover:text-primary-main transition-colors">
                Features
              </a>
              <a href="#stores" className="text-neutral-600 hover:text-primary-main transition-colors">
                Stores
              </a>
              <a href="#faq" className="text-neutral-600 hover:text-primary-main transition-colors">
                FAQ
              </a>
              <div className="space-y-3">
                <a 
                  href="/demo"
                  className="btn-secondary flex items-center justify-center space-x-2 w-full"
                >
                  <Play size={16} />
                  <span>Try Demo</span>
                </a>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="btn-primary flex items-center justify-center space-x-2 w-full"
                >
                  <Download size={16} />
                  <span>Join Waitlist</span>
                </button>
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://x.com/Reflowcrypto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Twitter size={16} className="text-neutral-600" />
                  </a>
                  <ContractAddress />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </motion.header>
  )
}

export default Header
