import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <span className="font-heading font-bold text-xl text-neutral-900">
              CryptoCashback
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-neutral-600 hover:text-primary-main transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-neutral-600 hover:text-primary-main transition-colors">
              Features
            </a>
            <a href="#stores" className="text-neutral-600 hover:text-primary-main transition-colors">
              Stores
            </a>
            <button className="btn-primary flex items-center space-x-2">
              <Download size={16} />
              <span>Add to Chrome</span>
            </button>
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
              <a href="#features" className="text-neutral-600 hover:text-primary-main transition-colors">
                Features
              </a>
              <a href="#stores" className="text-neutral-600 hover:text-primary-main transition-colors">
                Stores
              </a>
              <button className="btn-primary flex items-center justify-center space-x-2 w-full">
                <Download size={16} />
                <span>Add to Chrome</span>
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
