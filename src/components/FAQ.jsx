import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does automatic coupon detection work?",
      answer: "We scan 30,000+ stores in real-time to find the best available coupons and automatically apply them at checkout. Our AI-powered system continuously monitors for new deals and applies the highest savings available."
    },
    {
      question: "What is the built-in crypto wallet?",
      answer: "Your own secure cryptocurrency wallet integrated directly into the extension. Store, send, and manage your crypto rewards with bank-level security. No need for external wallets - everything is built right into Reflow."
    },
    {
      question: "How does real-time crypto conversion work?",
      answer: "Your cashback is instantly converted to cryptocurrency at the best exchange rates. Watch your crypto portfolio grow as you shop. We partner with top exchanges to ensure you get the most value from your rewards."
    },
    {
      question: "How secure is my crypto wallet?",
      answer: "We use 256-bit encryption, cold storage, and multi-signature wallets to keep your crypto rewards safe and secure. Your private keys are encrypted and stored with enterprise-grade security measures."
    },
    {
      question: "Can I access my wallet from multiple devices?",
      answer: "Yes! Access your crypto rewards and wallet from any device with seamless sync between desktop and mobile. Your wallet data is securely synchronized across all your devices."
    },
    {
      question: "Which stores support crypto cashback?",
      answer: "Shop at major retailers worldwide and earn crypto rewards. From Amazon to local stores, we've got you covered with our global network of 30,000+ supported stores."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about Reflow's crypto cashback platform.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
