import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Award, CheckCircle } from 'lucide-react'

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
    { name: "Amazon", logo: "AMZN" },
    { name: "eBay", logo: "EBAY" },
    { name: "Best Buy", logo: "BBY" },
    { name: "Target", logo: "TGT" },
    { name: "Walmart", logo: "WMT" },
    { name: "Nike", logo: "NIKE" },
    { name: "Apple", logo: "AAPL" },
    { name: "Microsoft", logo: "MSFT" }
  ]

  const certifications = [
    { name: "SOC 2 Type II", description: "Security Compliance" },
    { name: "PCI DSS", description: "Payment Security" },
    { name: "ISO 27001", description: "Information Security" },
    { name: "256-bit SSL", description: "Data Encryption" }
  ]

  return (
    <section className="py-20 bg-white">
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
            Trusted by Thousands of Users
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Join the growing community of crypto enthusiasts earning rewards while shopping.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-crypto text-accent-crypto" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-main/10 rounded-full flex items-center justify-center">
                  <span className="text-primary-main font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Store Partners */}
        <motion.div 
          className="text-center mb-16"
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
                className="flex items-center justify-center h-12 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-neutral-600 font-semibold text-sm">{store.logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Security */}
        <motion.div 
          className="bg-neutral-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Security & Compliance
            </h3>
            <p className="text-neutral-600">
              Your data and crypto rewards are protected by industry-leading security standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary-main/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary-main" size={24} />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-1">{cert.name}</h4>
                <p className="text-sm text-neutral-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-main mb-2">4.9/5</div>
              <div className="text-neutral-600">Chrome Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-main mb-2">50K+</div>
              <div className="text-neutral-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-crypto mb-2">$2.3M+</div>
              <div className="text-neutral-600">Crypto Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-main mb-2">30K+</div>
              <div className="text-neutral-600">Supported Stores</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSignals
