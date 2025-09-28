import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Award } from 'lucide-react'

const TrustSignals = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      avatar: "SC",
      content: "I've earned over $500 in Bitcoin just from my regular shopping. Reflow has completely changed how I think about online purchases.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Tech Enthusiast", 
      avatar: "MR",
      content: "The automatic coupon detection is incredible. I don't have to think about finding deals anymore - Reflow just works.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Frequent Shopper",
      avatar: "EJ", 
      content: "Finally, a way to earn crypto without trading! My wallet has grown significantly just from shopping online with Reflow.",
      rating: 5
    }
  ]

  const storeLogos = [
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon"
    },
    { 
      name: "eBay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      alt: "eBay"
    },
    { 
      name: "Best Buy", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Best_Buy_Logo.svg",
      alt: "Best Buy"
    },
    { 
      name: "Target", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
      alt: "Target"
    },
    { 
      name: "Walmart", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
      alt: "Walmart"
    },
    { 
      name: "Nike", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      alt: "Nike"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple"
    },
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft"
    }
  ]


  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>


        {/* Store Partners */}
        <motion.div 
          id="stores"
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-8">
            Shop at 30,000+ Stores
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
            {storeLogos.map((store, index) => (
              <motion.div
                key={store.name}
                className="flex items-center justify-center h-12 bg-white rounded-lg hover:bg-neutral-50 transition-colors border border-neutral-200 hover:border-neutral-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={store.logo} 
                  alt={store.alt}
                  className="h-6 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-neutral-600 font-semibold text-xs" style={{display: 'none'}}>
                  {store.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default TrustSignals
