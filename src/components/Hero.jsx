import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Shield, Zap, TrendingUp, Play } from 'lucide-react'
import WaitlistModal from './WaitlistModal'
import ContractAddress from './ContractAddress'

const Hero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  
  return (
    <section className="pt-20 pb-16 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-6 text-sm text-neutral-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="text-accent-success" size={16} />
                <span>256-bit encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-accent-crypto" size={16} />
                <span>Instant crypto rewards</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Earn{' '}
              <span className="crypto-gradient bg-clip-text text-transparent">
                Crypto Cashback
              </span>{' '}
              Every Time You Shop
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Earn crypto cashback every time you shop. 
              Spend, save, and watch your crypto flow. Powered by $REFLOW.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-main">30,000+</div>
                <div className="text-sm text-neutral-600">Stores</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <Download size={16} />
                <span>Join Waitlist - Free</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="/demo"
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <Play size={16} />
                <span>Try Demo</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <ContractAddress />
            </motion.div>

          </motion.div>

          {/* Right Content - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Browser Window Mockup */}
            <motion.div 
              className="bg-white rounded-2xl shadow-floating border border-neutral-200 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Browser Chrome */}
              <div className="h-8 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-neutral-500 ml-4">
                  amazon.com/product/example
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Product Card */}
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex space-x-4">
                      <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=100&h=100&fit=crop&crop=center" 
                          alt="AirPods Max"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900">AirPod Pro</h3>
                        <p className="text-neutral-600 text-sm">Premium quality sound</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-lg font-bold text-neutral-900">$199.99</span>
                          <span className="text-sm text-neutral-500 line-through">$249.99</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reflow Notification */}
                  <motion.div 
                    className="bg-gradient-to-r from-primary-main to-secondary-main rounded-lg p-4 text-white"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">₿</span>
                        </div>
                        <div>
                          <div className="font-semibold">Reflow Found!</div>
                          <div className="text-sm opacity-90">Earn 0.0023 BTC ($50) cashback</div>
                        </div>
                      </div>
                      <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-sm font-medium transition-colors">
                        Apply
                      </button>
                    </div>
                  </motion.div>

                  {/* Savings Highlight */}
                  <motion.div 
                    className="bg-accent-success/10 border border-accent-success/20 rounded-lg p-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-accent-success">Total Savings</div>
                        <div className="text-2xl font-bold text-accent-success">$100.00</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-neutral-600">Coupon + Crypto</div>
                        <div className="text-sm text-neutral-600">Cashback</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent-crypto/20 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-2xl">₿</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-main/20 rounded-full flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-lg">$</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  )
}

export default Hero
