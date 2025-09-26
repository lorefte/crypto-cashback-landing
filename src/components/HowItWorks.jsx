import React from 'react'
import { motion } from 'framer-motion'
import { Download, ShoppingCart, Coins, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Add in Seconds",
      description: "Install our Chrome extension with just a few clicks. It's 100% free and takes less than 30 seconds.",
      icon: Download,
      color: "primary"
    },
    {
      number: "02", 
      title: "Shop Like Normal",
      description: "Browse and shop at 30,000+ stores. We automatically detect when you're on a supported site.",
      icon: ShoppingCart,
      color: "secondary"
    },
    {
      number: "03",
      title: "Earn Crypto Rewards",
      description: "We find the best coupons and pay you back in cryptocurrency. Watch your crypto wallet grow with every purchase.",
      icon: Coins,
      color: "accent"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            How it Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Start earning crypto rewards in three simple steps. No complicated setup, no hidden fees.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colorClasses = {
              primary: "text-primary-main bg-primary-main/10",
              secondary: "text-secondary-main bg-secondary-main/10", 
              accent: "text-accent-crypto bg-accent-crypto/10"
            }
            
            return (
              <motion.div
                key={step.number}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 text-neutral-400 font-bold text-lg mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${colorClasses[step.color]} mb-6`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="text-neutral-300" size={24} />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Demo Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Demo Content */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                See CryptoCashback in Action
              </h3>
              <p className="text-neutral-600 mb-6">
                Watch how we automatically find the best deals and convert your savings into cryptocurrency rewards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                  <span className="text-neutral-700">Automatic coupon detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-main rounded-full"></div>
                  <span className="text-neutral-700">Real-time crypto conversion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-crypto rounded-full"></div>
                  <span className="text-neutral-700">Secure wallet integration</span>
                </div>
              </div>
            </div>

            {/* Right: Mockup */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-floating border border-neutral-200 overflow-hidden">
                {/* Browser Chrome */}
                <div className="h-8 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-neutral-500 ml-4">
                    checkout.example-store.com
                  </div>
                </div>
                
                {/* Checkout Demo */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                      <span className="text-neutral-600">Subtotal</span>
                      <span className="font-semibold">$199.99</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                      <span className="text-neutral-600">Shipping</span>
                      <span className="font-semibold">$9.99</span>
                    </div>
                    
                    {/* CryptoCashback Applied */}
                    <motion.div 
                      className="bg-primary-main/10 border border-primary-main/20 rounded-lg p-3"
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-primary-main font-semibold">CryptoCashback</span>
                          <span className="text-xs bg-primary-main text-white px-2 py-1 rounded">SAVE20</span>
                        </div>
                        <span className="text-primary-main font-bold">-$40.00</span>
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                      <span className="text-neutral-600">Crypto Rewards</span>
                      <span className="text-secondary-main font-semibold">+0.001 BTC</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 bg-neutral-50 rounded-lg px-4">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-bold text-lg">$169.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
