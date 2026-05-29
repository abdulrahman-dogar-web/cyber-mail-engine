"use client";
import React from 'react';
import { Package, TrendingUp, DollarSign, Users, Plus, Edit3, Trash2, CheckCircle, ShieldAlert, BarChart3, ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SellerDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white tracking-tight"
          >
            Seller Dashboard
          </motion.h1>
          <p className="text-gray-500 font-medium text-sm">Welcome back, TechTitan! Performance: <span className="text-cyber-green font-bold">+24% growth</span></p>
        </div>
        <div className="flex gap-4">
           <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl font-bold border border-white/5 transition-all text-sm">
             Store Analytics
           </button>
           <motion.button
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white px-6 py-3 rounded-2xl font-black shadow-xl shadow-cyber-cyan/20 transition-all text-sm flex items-center gap-2"
           >
             <Plus className="w-4 h-4" /> Add Product
           </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-cyber-green/5 border border-dashed border-cyber-green/30 rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-inner"
      >
        <div className="flex items-start gap-5">
          <div className="p-4 rounded-2xl bg-cyber-green/10 text-cyber-green shadow-lg shadow-cyber-green/10">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div className="space-y-1">
             <h4 className="text-lg font-bold text-white">KYC Verified Seller</h4>
             <p className="text-sm text-gray-500 font-medium max-w-xl">You have unlocked premium benefits: 2.5% commission, instant payouts, and the &quot;Verified&quot; trust badge.</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="text-right hidden md:block border-r border-white/10 pr-6">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-1">Commission</span>
              <span className="text-2xl font-black text-white">2.5%</span>
           </div>
           <Link href="/verify">
             <button className="text-[10px] font-black text-cyber-green uppercase tracking-[0.2em] bg-cyber-green/10 px-6 py-3 rounded-xl border border-cyber-green/20 hover:bg-cyber-green hover:text-white transition-all">Benefits</button>
           </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$12,450.00', icon: DollarSign, color: 'text-cyber-green', trend: '+12.5%' },
          { label: 'Active Listings', value: '24', icon: Package, color: 'text-cyber-cyan', trend: '+2' },
          { label: 'Total Sales', value: '1,240', icon: TrendingUp, color: 'text-cyber-purple', trend: '+14%' },
          { label: 'Store Visitors', value: '45.2k', icon: Users, color: 'text-cyber-amber', trend: '+8.4%' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ y: -5 }}
            className="glass-morphism rounded-[2rem] p-8 border-white/5 space-y-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-cyber-green bg-cyber-green/5 px-2 py-1 rounded-lg border border-cyber-green/10">
                <ArrowUpRight className="w-3 h-3" />
                {stat.trend}
              </div>
            </div>
            <div className="space-y-1">
               <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
               <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <Package className="w-7 h-7 text-cyber-cyan" />
                Store Inventory
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Sort: Latest</span>
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                <Link href="/search" className="text-[10px] font-black text-cyber-cyan uppercase tracking-widest hover:underline">View All</Link>
              </div>
           </div>

           <div className="space-y-4">
             {[
               { id: '1', name: 'Premium SEO Master Toolset v4.2', price: 89.99, sales: 128, status: 'Active' },
               { id: '3', name: 'Enterprise Automation Suite (Source)', price: 499.00, sales: 12, status: 'Active' },
               { id: '5', name: 'Aged Social Media Bundle (2015+)', price: 250.00, sales: 45, status: 'Pending' },
             ].map((product, i) => (
               <motion.div
                 key={product.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 * i + 0.6 }}
                 className="glass-morphism rounded-3xl p-6 border-white/5 hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
               >
                  <div className="flex items-center gap-5">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-cyber-cyan shadow-inner group-hover:scale-105 transition-transform">
                        <Package className="w-7 h-7" />
                     </div>
                     <div className="space-y-1">
                        <div className="flex items-center gap-3">
                           <Link href={`/product/${product.id}`}>
                             <h4 className="font-bold text-white text-lg group-hover:text-cyber-cyan transition-colors">{product.name}</h4>
                           </Link>
                           <span className={`text-[8px] font-black uppercase px-2.5 py-1 rounded-full border ${product.status === 'Active' ? 'bg-cyber-green/10 text-cyber-green border-cyber-green/20' : 'bg-cyber-amber/10 text-cyber-amber border-cyber-amber/20'}`}>
                              {product.status}
                           </span>
                        </div>
                        <div className="flex items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.1em]">
                           <span>Price: <span className="text-white font-black">${product.price}</span></span>
                           <span>Sales: <span className="text-white font-black">{product.sales}</span></span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                        <Edit3 className="w-4 h-4" />
                     </button>
                     <button className="p-3.5 rounded-xl bg-cyber-red/5 hover:bg-cyber-red/20 text-cyber-red transition-all">
                        <Trash2 className="w-4 h-4" />
                     </button>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.8 }}
             className="glass-morphism rounded-[2.5rem] p-8 border-white/5 space-y-8 shadow-2xl"
           >
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                 <BarChart3 className="w-6 h-6 text-cyber-purple" />
                 Finances
              </h3>
              <div className="space-y-5">
                 <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                    <div className="space-y-1">
                       <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Next Payout</span>
                       <div className="text-3xl font-black text-white">$2,840.50</div>
                    </div>
                    <button className="w-full bg-cyber-cyan text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-cyber-cyan/20 hover:scale-[1.02] transition-all">Withdraw Now</button>
                 </div>
                 <div className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="space-y-1">
                       <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Processing</span>
                       <div className="text-xl font-black text-cyber-purple">$850.00</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-cyber-purple/10 text-cyber-purple">
                       <Clock className="w-5 h-5" />
                    </div>
                 </div>
              </div>
           </motion.div>

           <div className="bg-cyber-purple/5 border border-dashed border-cyber-purple/30 rounded-[2rem] p-8 space-y-4 shadow-inner">
              <div className="flex items-center gap-3 text-cyber-purple">
                 <ShieldAlert className="w-6 h-6" />
                 <h4 className="text-sm font-black text-white uppercase tracking-widest">Seller Safety</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                 Keep all transactions and chats on ELITE MARKET. Off-platform deals are <span className="text-white font-bold">NOT</span> protected by our automated Escrow.
              </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
