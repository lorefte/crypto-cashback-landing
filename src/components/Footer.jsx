import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Twitter, ArrowRight } from 'lucide-react'
import WaitlistModal from './WaitlistModal'
import ContractAddress from './ContractAddress'

const Footer = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  
  const footerLinks = {
    product: [
      { name: 'How it Works', href: 'https://placeholder.com/how-it-works' },
      { name: 'Features', href: 'https://placeholder.com/features' },
      { name: 'Supported Stores', href: 'https://placeholder.com/stores' },
      { name: 'Crypto Wallet', href: 'https://placeholder.com/wallet' }
    ],
    company: [
      { name: 'About Us', href: 'https://placeholder.com/about' },
      { name: 'Blog', href: 'https://placeholder.com/blog' },
      { name: 'Careers', href: 'https://placeholder.com/careers' },
      { name: 'Press', href: 'https://placeholder.com/press' }
    ],
    support: [
      { name: 'Help Center', href: 'https://placeholder.com/help' },
      { name: 'Contact Us', href: 'https://placeholder.com/contact' },
      { name: 'Privacy Policy', href: 'https://placeholder.com/privacy' },
      { name: 'Terms of Service', href: 'https://placeholder.com/terms' }
    ],
    security: [
      { name: 'Security', href: 'https://placeholder.com/security' },
      { name: 'Compliance', href: 'https://placeholder.com/compliance' },
      { name: 'Audit Reports', href: 'https://placeholder.com/audits' },
      { name: 'Bug Bounty', href: 'https://placeholder.com/bounty' }
    ]
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-primary-main to-secondary-main py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Earning Crypto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access to Reflow. 
            Be among the first to earn crypto cashback when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-main px-8 py-3 rounded-lg font-semibold text-base hover:bg-neutral-100 transition-colors flex items-center justify-center space-x-2 group">
              <Download size={20} />
              <span>Join Free Waitlist</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-primary-main transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://cdn.discordapp.com/attachments/1252971251899830374/1421678062843596921/IMG_6322.png?ex=68d9e85f&is=68d896df&hm=f2aa5d915464c7b9a794824e34228fe5be872e68e302e8f715c37e3633489570&" 
                  alt="Reflow" 
                  className="w-8 h-8 rounded"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <span className="hidden bg-primary-main text-white px-2 py-1 rounded text-sm font-bold">R</span>
                <span className="font-heading font-bold text-xl">
                  Reflow
                </span>
              </motion.div>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Reflow is live. Earn crypto cashback every time you shop. 
                Spend, save, and watch your crypto flow.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/Reflowcrypto" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Security</h3>
              <ul className="space-y-3">
                {footerLinks.security.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2025 Reflow. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>256-bit SSL Encryption</span>
              <span>•</span>
              <span>SOC 2 Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
