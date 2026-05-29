"use client";
import React from 'react';
import { ShieldCheck, Star, MessageSquare, Calendar, Globe, Zap } from 'lucide-react';
import ProductCard from '@/components/marketplace/ProductCard';
import { motion } from 'framer-motion';

export default function SellerStorefront() {
  const stats = [
    { label: 'Total Sales', value: '4,520+', color: 'text-cyber-cyan' },
    { label: 'Trust Score', value: '99/100', color: 'text-cyber-green' },
    { label: 'Avg Delivery', value: '< 1 Hour', color: 'text-cyber-purple' },
    { label: 'Reputation', value: 'Elite', color: 'text-cyber-amber' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-12"
    >
      {/* Seller Banner */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative h-72 md:h-96 rounded-[3.5rem] overflow-hidden glass-morphism border-white/5 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-cyber-purple/10 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-cyber-cyan/5 blur-[100px] rounded-full"
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
           <Zap className="w-48 h-48 text-white" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 md:w-40 md:h-40 rounded-[2.5rem] bg-[#0d1117]/80 backdrop-blur-xl border-4 border-white/10 shadow-2xl flex items-center justify-center text-5xl md:text-7xl text-white font-black"
            >
              T
            </motion.div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">TechTitan</h1>
                <div className="bg-cyber-green/20 backdrop-blur-md border border-cyber-green/30 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-cyber-green/10">
                  <ShieldCheck className="w-4 h-4 text-cyber-green" />
                  <span className="text-[10px] font-black text-cyber-green uppercase tracking-[0.2em]">Verified Seller</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 md:gap-10 items-center text-sm font-bold text-gray-400">
                <div className="flex items-center gap-2 group cursor-default">
                  <Star className="w-5 h-5 text-cyber-amber fill-cyber-amber group-hover:scale-110 transition-transform" />
                  <span className="text-white font-black text-lg">4.9</span>
                  <span className="text-xs uppercase tracking-widest">(1.2k+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-xs uppercase tracking-widest">Joined Mar 2023</span>
                </div>
                <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-xs uppercase tracking-widest">United States</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
            >
              <MessageSquare className="w-5 h-5" />
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Seller Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.2)' }}
            className="glass-morphism rounded-3xl p-8 border-white/5 text-center space-y-2 group shadow-xl transition-all"
          >
            <div className={`text-3xl font-black ${stat.color} tracking-tighter group-hover:scale-110 transition-transform`}>{stat.value}</div>
            <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Seller Products */}
      <div className="space-y-10 pt-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <h2 className="text-3xl font-black text-white flex items-center gap-4 tracking-tight">
            <Zap className="w-8 h-8 text-cyber-cyan" />
            Active Inventory
          </h2>
          <div className="flex gap-2">
             <button className="bg-cyber-cyan/10 text-cyber-cyan px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-cyber-cyan/20">All Items</button>
             <button className="text-gray-500 hover:text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">Reviews</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
            >
              <ProductCard
                title="Premium Enterprise Automation Suite"
                price={49.99}
                category="Software"
                seller="TechTitan"
                isVerified={true}
                rating={4.9}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-10">
           <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] border border-white/10 transition-all">
             Load More Assets
           </button>
        </div>
      </div>
    </motion.div>
  );
}
