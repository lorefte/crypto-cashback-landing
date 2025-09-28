import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Wallet, 
  TrendingUp, 
  Smartphone, 
  Globe,
  Lock,
  Star
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Automatic Coupon Detection",
      description: "We scan 30,000+ stores in real-time to find the best available coupons and automatically apply them at checkout.",
      color: "primary"
    },
    {
      icon: Wallet,
      title: "Built-in Crypto Wallet",
      description: "Your own secure cryptocurrency wallet integrated directly into the extension. Store, send, and manage your crypto rewards.",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Real-time Crypto Conversion",
      description: "Your cashback is instantly converted to cryptocurrency at the best exchange rates. Watch your crypto portfolio grow.",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit encryption, cold storage, and multi-signature wallets keep your crypto rewards safe and secure.",
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Sync",
      description: "Access your crypto rewards and wallet from any device. Seamless sync between desktop and mobile.",
      color: "secondary"
    },
    {
      icon: Globe,
      title: "Global Store Network",
      description: "Shop at major retailers worldwide and earn crypto rewards. From Amazon to local stores, we've got you covered.",
      color: "accent"
    }
  ]

  const stats = [
    { label: "Stores Supported", value: "30,000+" },
    { label: "Average Savings", value: "15%" }
  ]

  return (
    <section id="features" className="py-20 bg-neutral-50">
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
            Why Choose Reflow?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            The only platform that combines automatic coupon finding with cryptocurrency cashback rewards.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              primary: "text-primary-main bg-primary-main/10",
              secondary: "text-secondary-main bg-secondary-main/10",
              accent: "text-accent-crypto bg-accent-crypto/10"
            }
            
            return (
              <motion.div
                key={feature.title}
                className="card-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses[feature.color]} mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Trusted by Crypto Enthusiasts Worldwide
            </h3>
            <p className="text-neutral-600">
              Join thousands of users who are already earning crypto rewards while shopping.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-main mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Trust Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left: Security Features */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
              Your Crypto is Safe with Reflow
            </h3>
            <p className="text-neutral-600 mb-8">
              Reflow uses industry-leading security measures to protect your cryptocurrency rewards and personal information.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="text-primary-main" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">256-bit Encryption</h4>
                  <p className="text-neutral-600 text-sm">Military-grade encryption protects all your data and transactions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-secondary-main" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Cold Storage</h4>
                  <p className="text-neutral-600 text-sm">Your crypto rewards are stored in offline cold storage for maximum security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-crypto/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-accent-crypto" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Audited & Compliant</h4>
                  <p className="text-neutral-600 text-sm">Regular security audits and compliance with international standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Security Badge */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary-main to-secondary-main rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield size={40} />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">Security First</h4>
                <p className="text-white/90 mb-6">
                  Your crypto rewards are protected by the same security standards used by major banks and financial institutions.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-white/80">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$0</div>
                    <div className="text-sm text-white/80">Lost Funds</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
