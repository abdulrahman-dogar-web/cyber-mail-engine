"use client";
import React from 'react';
import { ShieldCheck, Zap, MessageSquare, Clock, Info, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-12"
    >
      {/* Breadcrumbs */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]"
      >
        <Link href="/" className="hover:text-cyber-cyan cursor-pointer transition-colors">Marketplace</Link>
        <ChevronRight className="w-3 h-3 text-gray-700" />
        <Link href="/search" className="hover:text-cyber-cyan cursor-pointer transition-colors">Software</Link>
        <ChevronRight className="w-3 h-3 text-cyber-cyan" />
        <span className="text-white">Premium SEO Master Toolset</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Product Images & Info */}
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-morphism rounded-[3rem] overflow-hidden aspect-video bg-white/5 flex items-center justify-center group relative border-white/5 shadow-2xl shadow-cyber-cyan/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5 group-hover:opacity-100 opacity-50 transition-opacity" />
            <Zap className="w-32 h-32 text-cyber-cyan/10 group-hover:scale-110 group-hover:text-cyber-cyan/20 transition-all duration-700" />

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div className="flex gap-3">
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="w-20 h-16 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 cursor-pointer hover:border-cyber-cyan/50 transition-all"
                  />
                ))}
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest">
                4K Preview Available
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl font-black text-white tracking-tight">Premium SEO Master Toolset v4.2</h1>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                 <div className="bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Software</div>
                 <div className="w-1 h-1 rounded-full bg-gray-700" />
                 <div className="flex items-center gap-2">
                    <div className="flex text-cyber-amber gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-cyber-amber" />)}
                    </div>
                    <span className="text-sm font-black text-white">5.0</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">(128 Reviews)</span>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Sales', value: '1,240', icon: Zap, color: 'text-cyber-cyan' },
                { label: 'Delivery', value: 'Instant', icon: Clock, color: 'text-cyber-green' },
                { label: 'File Size', value: '450 MB', icon: Info, color: 'text-cyber-purple' },
                { label: 'Support', value: '24/7', icon: ShieldCheck, color: 'text-cyber-amber' },
              ].map((item, i) => (
                <div key={i} className="glass-morphism rounded-3xl p-5 border-white/5 space-y-2 group hover:bg-white/5 transition-all">
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <div className="text-lg font-black text-white">{item.value}</div>
                    <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-[2.5rem] p-10 space-y-8 border-white/5 shadow-inner"
            >
              <h3 className="text-2xl font-black text-white flex items-center gap-4">
                <div className="p-2 rounded-xl bg-cyber-cyan/10">
                  <Info className="w-6 h-6 text-cyber-cyan" />
                </div>
                Detailed Description
              </h3>
              <div className="text-gray-400 leading-relaxed space-y-6 text-base font-medium">
                <p>Elevate your digital presence with the ultimate SEO automation suite. This toolset includes everything you need to dominate search rankings, from keyword research to backlink monitoring. Built for enterprise-level performance and individual entrepreneurs alike.</p>

                <div className="space-y-4">
                  <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] border-l-2 border-cyber-cyan pl-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Automated Keyword Research',
                      'Competitor Analysis Engine',
                      'Backlink Health Monitor',
                      'AI Content Optimizer',
                      'Real-time Ranking Tracker',
                      'Global Proxy Support'
                    ].map(feature => (
                      <li key={feature} className="flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-cyber-green/10 flex items-center justify-center group-hover:bg-cyber-green/20 transition-colors">
                          <CheckCircle className="w-3.5 h-3.5 text-cyber-green" />
                        </div>
                        <span className="text-sm group-hover:text-gray-200 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Purchase & Seller Info */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="glass-morphism rounded-[2.5rem] p-10 border-white/5 space-y-8 sticky top-24 shadow-2xl"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">Purchase Asset</span>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black text-white tracking-tighter">$89.99</span>
                <span className="text-lg text-gray-600 line-through font-bold">$129.99</span>
              </div>
              <p className="text-[10px] text-cyber-green font-black uppercase tracking-widest flex items-center gap-2">
                 <Zap className="w-3 h-3 fill-cyber-green" />
                 Special 30% Discount applied
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/chat/1" className="block w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white py-6 rounded-[1.5rem] font-black text-xl shadow-xl shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all flex items-center justify-center gap-4"
                >
                  <ShieldCheck className="w-7 h-7" />
                  Buy with Escrow
                </motion.button>
              </Link>
              <Link href="/chat/1" className="block w-full">
                <button className="w-full bg-white/5 hover:bg-white/10 text-white py-5 rounded-[1.5rem] font-bold transition-all border border-white/10 flex items-center justify-center gap-3">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  Inquiry for Seller
                </button>
              </Link>
            </div>

            <div className="pt-10 border-t border-white/5 space-y-8">
              <div className="flex items-center gap-5">
                <Link href="/seller/1">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 flex items-center justify-center text-2xl text-white font-black shadow-inner cursor-pointer hover:scale-105 transition-transform">T</div>
                </Link>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Link href="/seller/1" className="hover:text-cyber-cyan transition-colors">
                      <h4 className="text-lg font-bold text-white tracking-tight">TechTitan</h4>
                    </Link>
                    <CheckCircle className="w-4 h-4 text-cyber-green" />
                  </div>
                  <div className="bg-cyber-green/10 px-2 py-0.5 rounded text-[8px] font-black text-cyber-green uppercase tracking-widest inline-block border border-cyber-green/20">Verified Seller</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-2xl p-4 border border-white/5 text-center group cursor-default">
                  <span className="text-[9px] text-gray-600 block uppercase font-black mb-1 group-hover:text-cyber-cyan transition-colors">Trust Score</span>
                  <span className="text-xl font-black text-white">99/100</span>
                </div>
                <div className="bg-black/40 rounded-2xl p-4 border border-white/5 text-center group cursor-default">
                  <span className="text-[9px] text-gray-600 block uppercase font-black mb-1 group-hover:text-cyber-purple transition-colors">Avg Response</span>
                  <span className="text-xl font-black text-white">12m</span>
                </div>
              </div>
              <Link href="/seller/1" className="block w-full">
                <button className="w-full text-[10px] font-black text-cyber-cyan hover:text-white transition-colors uppercase tracking-[0.3em] text-center bg-white/2 py-3 rounded-xl border border-white/5 hover:bg-cyber-cyan/10">View Storefront</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
