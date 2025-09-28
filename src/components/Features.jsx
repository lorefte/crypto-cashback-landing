import React from 'react'
import { motion } from 'framer-motion'
import { Store, TrendingUp } from 'lucide-react'

const Features = () => {
  const stats = [
    { label: "Stores Supported", value: "30,000+" },
    { label: "Average Savings", value: "15%" }
  ]

  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div 
          className="bg-white rounded-3xl shadow-lg p-8 lg:p-12"
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
      </div>
    </section>
  )
}

export default Features