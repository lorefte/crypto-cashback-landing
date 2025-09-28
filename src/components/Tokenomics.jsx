import React from 'react'
import { motion } from 'framer-motion'

const Tokenomics = () => {
  const tokenomicsData = [
    { 
      label: "Reflow Ecosystem (User Rewards)", 
      percentage: 50, 
      color: "#6366f1",
      description: "Rewards for users earning crypto cashback"
    },
    { 
      label: "Team", 
      percentage: 10, 
      color: "#10b981",
      description: "Vested over 2 years"
    },
    { 
      label: "Investors", 
      percentage: 10, 
      color: "#f59e0b",
      description: "Vested over 1 year"
    },
    { 
      label: "Airdrop to Solana Ecosystem", 
      percentage: 10, 
      color: "#ef4444",
      description: "Community distribution"
    },
    { 
      label: "Marketing & Exchange Listings", 
      percentage: 10, 
      color: "#8b5cf6",
      description: "Growth and adoption"
    },
    { 
      label: "Future Growth", 
      percentage: 10, 
      color: "#06b6d4",
      description: "Vested over 2 years"
    }
  ]

  // Calculate pie chart paths
  const createPieSlice = (startAngle, endAngle, radius) => {
    const start = polarToCartesian(100, 100, radius, endAngle)
    const end = polarToCartesian(100, 100, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    
    return [
      "M", 100, 100,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ")
  }

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }

  let cumulativePercentage = 0
  const pieData = tokenomicsData.map(item => {
    const startAngle = (cumulativePercentage / 100) * 360
    const endAngle = ((cumulativePercentage + item.percentage) / 100) * 360
    cumulativePercentage += item.percentage
    
    const path = createPieSlice(startAngle, endAngle, 80)
    
    return {
      ...item,
      startAngle,
      endAngle,
      path
    }
  })


  return (
    <section id="tokenomics" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            $REFLOW Tokenomics
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Transparent token distribution designed to reward users and ensure sustainable growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full" 
                style={{ maxWidth: '100%', height: 'auto' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                {pieData.map((item, index) => (
                  <path
                    key={item.label}
                    d={item.path}
                    fill={item.color}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ 
                      opacity: 1,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                ))}
              </svg>
              
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-neutral-900">{item.label}</h3>
                    <span className="text-lg font-bold text-neutral-900">{item.percentage}%</span>
                  </div>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary-main/5 to-secondary-main/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-main mb-2">1B</div>
              <div className="text-neutral-600">Total Supply</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-main mb-2">Solana</div>
              <div className="text-neutral-600">Blockchain</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-crypto mb-2">SPL</div>
              <div className="text-neutral-600">Token Standard</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tokenomics
