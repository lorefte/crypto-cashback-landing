import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const ContractAddress = () => {
  const [copied, setCopied] = useState(false)
  
  // Placeholder contract address - replace with actual address
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <motion.button
      onClick={handleCopy}
      className="btn-secondary flex items-center space-x-3 group relative px-8 py-4 text-lg"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>Contract Address</span>
      <motion.div
        className="flex items-center justify-center"
        animate={{ rotate: copied ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {copied ? (
          <Check size={20} className="text-accent-success" />
        ) : (
          <Copy size={20} className="group-hover:text-primary-main transition-colors" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none"
        animate={{ opacity: copied ? 1 : 0, y: copied ? -5 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {copied ? 'Copied!' : 'Click to copy'}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800" />
      </motion.div>
    </motion.button>
  )
}

export default ContractAddress
