import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Twitter, Github, ArrowRight } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Supported Stores', href: '#stores' },
      { name: 'Crypto Wallet', href: '#wallet' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ],
    security: [
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
      { name: 'Audit Reports', href: '#audits' },
      { name: 'Bug Bounty', href: '#bounty' }
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
            Join thousands of users earning cryptocurrency rewards while shopping online. 
            It's free to start and takes less than 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-main px-8 py-3 rounded-lg font-semibold text-base hover:bg-neutral-100 transition-colors flex items-center justify-center space-x-2 group">
              <Download size={20} />
              <span>Add to Chrome - Free</span>
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
                <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">₿</span>
                </div>
                <span className="font-heading font-bold text-xl">
                  CryptoCashback
                </span>
              </motion.div>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                The browser extension that automatically finds coupons and pays you back in cryptocurrency. 
                Start earning crypto rewards while shopping online.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <Mail size={18} />
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
              © 2024 CryptoCashback. All rights reserved.
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
