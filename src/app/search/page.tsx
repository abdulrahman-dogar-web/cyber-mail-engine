"use client";
import React from 'react';
import { Filter, SlidersHorizontal, Shield } from 'lucide-react';
import ProductCard from '@/components/marketplace/ProductCard';
import { motion } from 'framer-motion';

export default function SearchPage() {
  const categories = ['All Categories', 'Software', 'Accounts', 'Graphics', 'Scripts', 'Services'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10"
    >
      {/* Sidebar Filters */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full lg:w-72 space-y-8 flex-shrink-0"
      >
        <div className="glass-morphism rounded-3xl p-6 border-white/5 space-y-8 sticky top-24">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-cyber-cyan" />
              Filters
            </h3>
            <button className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Reset</button>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Categories</h4>
            <div className="flex flex-col gap-2">
              {categories.map((cat, i) => (
                <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                  <div className={`w-4 h-4 rounded border transition-all ${i === 0 ? 'bg-cyber-cyan border-cyber-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'border-white/10 group-hover:border-cyber-cyan/50'}`} />
                  <span className={`text-sm font-medium ${i === 0 ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Trust Level</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 group cursor-pointer">
                <div className="w-4 h-4 rounded border border-white/10 group-hover:border-cyber-cyan/50" />
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-cyber-green" />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200">Verified Sellers Only</span>
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Price Range</h4>
            <div className="space-y-6">
              <input type="range" className="w-full accent-cyber-cyan h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between gap-4">
                <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                  <span className="text-[9px] text-gray-500 block uppercase font-black mb-1">Min</span>
                  <span className="text-xs font-bold text-white">$0</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                  <span className="text-[9px] text-gray-500 block uppercase font-black mb-1">Max</span>
                  <span className="text-xs font-bold text-white">$500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h1 className="text-4xl font-black text-white tracking-tight">Search Results</h1>
            <p className="text-sm text-gray-500 font-medium tracking-wide">Found <span className="text-cyber-cyan font-bold">156 premium assets</span> matching your criteria</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <select className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-10 text-xs font-black text-gray-300 focus:outline-none focus:border-cyber-cyan/50 appearance-none transition-all cursor-pointer hover:bg-white/10">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Trusted</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            { title: 'Premium SEO Master Toolset v4.2', price: 89.99, category: 'Software', seller: 'TechTitan', isVerified: true, rating: 4.9 },
            { title: 'Aged Twitter Account (2012) - High Followers', price: 150.00, category: 'Accounts', seller: 'SocialKing', isVerified: true, rating: 4.8 },
            { title: 'Full Stack React SaaS Boilerplate', price: 49.00, category: 'Scripts', seller: 'CodeMaster', isVerified: false, rating: 4.5 },
            { title: 'Adobe Creative Cloud 1Y Subscription', price: 120.00, category: 'Accounts', seller: 'CloudDealer', isVerified: true, rating: 5.0 },
            { title: 'Exclusive 4K Video LUTs Pack', price: 25.00, category: 'Graphics', seller: 'VisualsHub', isVerified: false, rating: 4.2 },
            { title: 'High Authority Backlink Service (50 Sites)', price: 199.99, category: 'Services', seller: 'SEOGuru', isVerified: true, rating: 4.9 },
          ].map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}
