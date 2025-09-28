import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Zap, TrendingUp, CheckCircle } from 'lucide-react'

const Demo = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showCashback, setShowCashback] = useState(false)
  const [cashbackAmount, setCashbackAmount] = useState(0)
  const [walletBalance, setWalletBalance] = useState(125.50)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'clothing', name: 'Clothing', icon: '👕' },
    { id: 'home', name: 'Home & Garden', icon: '🏠' },
    { id: 'sports', name: 'Sports & Fitness', icon: '⚽' }
  ]

  const products = [
    {
      id: 1,
      name: "AirPods Pro (2nd Gen)",
      price: 289.49,
      originalPrice: 299.99,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
      cashbackRate: 3.5,
      store: "Apple Store",
      storeUrl: "apple.com",
      category: "electronics"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 874.79,
      originalPrice: 899.99,
      image: "https://images.samsung.com/ca/smartphones/galaxy-s24/images/galaxy-s24-highlights-kv-mo.jpg",
      cashbackRate: 2.8,
      store: "Best Buy",
      storeUrl: "bestbuy.com",
      category: "electronics"
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      price: 172.43,
      originalPrice: 179.99,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-max-270-mens-shoes-KkLcGR.png",
      cashbackRate: 4.2,
      store: "Nike",
      storeUrl: "nike.com",
      category: "clothing"
    },
    {
      id: 4,
      name: "MacBook Air M2",
      price: 1272.69,
      originalPrice: 1299.99,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
      cashbackRate: 2.1,
      store: "Apple Store",
      storeUrl: "apple.com",
      category: "electronics"
    },
    {
      id: 5,
      name: "Adidas Ultraboost 22",
      price: 211.64,
      originalPrice: 220.00,
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_HP9201_01_standard.jpg",
      cashbackRate: 3.8,
      store: "Adidas",
      storeUrl: "adidas.com",
      category: "clothing"
    },
    {
      id: 6,
      name: "Dyson V15 Vacuum",
      price: 682.49,
      originalPrice: 699.99,
      image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/vacuum-cleaners/cordless/v15-detect/hero/376251-01.png",
      cashbackRate: 2.5,
      store: "Target",
      storeUrl: "target.com",
      category: "home"
    },
    {
      id: 7,
      name: "Yoga Mat Premium",
      price: 94.79,
      originalPrice: 99.99,
      image: "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SX679_.jpg",
      cashbackRate: 5.2,
      store: "Amazon",
      storeUrl: "amazon.com",
      category: "sports"
    },
    {
      id: 8,
      name: "KitchenAid Mixer",
      price: 368.21,
      originalPrice: 379.99,
      image: "https://www.kitchenaid.com/content/dam/global/documents/202201/ksm150ps-wh-1.jpg",
      cashbackRate: 3.1,
      store: "Williams Sonoma",
      storeUrl: "williams-sonoma.com",
      category: "home"
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    const cashback = (product.price * product.cashbackRate / 100).toFixed(2)
    setCashbackAmount(parseFloat(cashback))
    setShowCashback(true)
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      setWalletBalance(prev => prev + cashbackAmount)
      setShowCashback(false)
      setSelectedProduct(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reflow Extension Bar */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.discordapp.com/attachments/1252971251899830374/1421678062843596921/IMG_6322.png?ex=68d9e85f&is=68d896df&hm=f2aa5d915464c7b9a794824e34228fe5be872e68e302e8f715c37e3633489570&" 
              alt="Reflow" 
              className="w-8 h-8 rounded"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
            <span className="hidden bg-white text-purple-600 px-2 py-1 rounded text-sm font-bold">R</span>
            <span className="font-bold text-lg">Reflow</span>
            <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Active</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm opacity-90">Wallet Balance</div>
              <div className="font-bold">${walletBalance.toFixed(2)} $REFLOW</div>
            </div>
            <button 
              onClick={() => window.history.back()}
              className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Fake Shopping Site Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">TechStore Demo</h1>
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="text-sm text-gray-600">Demo Shopping Site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                      selectedCategory === category.id
                        ? 'bg-purple-100 text-purple-700 font-medium'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleProductClick(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">${product.price}</span>
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Available at{' '}
                      <a 
                        href={`https://${product.storeUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {product.storeUrl}
                      </a>
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-1 text-green-600">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-medium">{product.cashbackRate}% Cashback</span>
                      </div>
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Reflow Extension Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Zap className="w-5 h-5 text-purple-600 mr-2" />
                Reflow Extension Active
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Crypto Cashback</span>
                  <span className="text-sm font-medium text-green-600">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Auto-Apply Coupons</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Wallet Integration</span>
                  <span className="text-sm font-medium text-green-600">Connected</span>
                </div>
              </div>
            </div>

            {/* Wallet Balance */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Your $REFLOW Wallet</h3>
              <div className="text-3xl font-bold mb-2">${walletBalance.toFixed(2)}</div>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <TrendingUp className="w-4 h-4" />
                <span>+${cashbackAmount.toFixed(2)} pending</span>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">How Reflow Works</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-medium text-sm">Shop Normally</div>
                    <div className="text-xs text-gray-600">Browse and add items to cart</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-medium text-sm">Earn Crypto</div>
                    <div className="text-xs text-gray-600">Get $REFLOW tokens automatically</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-medium text-sm">Watch It Grow</div>
                    <div className="text-xs text-gray-600">Your crypto rewards accumulate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cashback Notification Modal */}
      <AnimatePresence>
        {showCashback && selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Crypto Cashback Available!</h3>
                <p className="text-gray-600 mb-4">
                  You'll earn <span className="font-bold text-green-600">${cashbackAmount.toFixed(2)} $REFLOW</span> when you purchase the {selectedProduct.name}
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Product Price:</span>
                    <span className="font-medium">${selectedProduct.price}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Cashback Rate:</span>
                    <span className="font-medium text-green-600">{selectedProduct.cashbackRate}%</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span className="font-medium">You'll Earn:</span>
                    <span className="font-bold text-green-600">${cashbackAmount.toFixed(2)} $REFLOW</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowCashback(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add to Cart & Earn
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Demo
