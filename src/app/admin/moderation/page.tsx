"use client";
import React from 'react';
import { ShieldCheck, UserCheck, Package, AlertCircle, Check, X, Eye, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminModeration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-12"
    >
      <div className="space-y-2">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-black text-white tracking-tight"
        >
          Platform Moderation
        </motion.h1>
        <p className="text-gray-500 font-medium text-sm">Review pending products, KYC applications, and active disputes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation / Filters Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
           <div className="glass-morphism rounded-3xl p-4 border-white/5 space-y-2 sticky top-24">
              {[
                { name: 'Product Approvals', icon: Package, count: 12, active: true },
                { name: 'KYC Applications', icon: UserCheck, count: 4, active: false },
                { name: 'Active Disputes', icon: AlertCircle, count: 3, active: false },
                { name: 'Reported Users', icon: ShieldCheck, count: 0, active: false },
              ].map((item, i) => (
                <button key={i} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${item.active ? 'bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 shadow-lg shadow-cyber-cyan/5' : 'text-gray-500 hover:bg-white/5'}`}>
                   <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-bold">{item.name}</span>
                   </div>
                   {item.count > 0 && (
                     <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.active ? 'bg-cyber-cyan text-white' : 'bg-white/5 text-gray-500'}`}>
                       {item.count}
                     </span>
                   )}
                </button>
              ))}
           </div>
        </motion.aside>

        {/* Review Queue */}
        <main className="lg:col-span-3 space-y-8">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="relative flex-1 max-w-md">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                 <input
                    type="text"
                    placeholder="Search queue..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-cyber-cyan/30 transition-all"
                 />
              </div>
              <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-xs font-black text-gray-400 hover:text-white transition-all uppercase tracking-widest">
                 <Filter className="w-4 h-4" /> Filter By Date
              </button>
           </div>

           <div className="space-y-4">
              {[
                { id: '#PRD-9102', type: 'Product', name: 'Premium Discord Nitro Gen (Source Code)', seller: 'HackerX', date: '2 mins ago' },
                { id: '#KYC-1284', type: 'KYC', name: 'Identity Verification: Sardar Muhammad', seller: 'SardarMuhammad', date: '15 mins ago' },
                { id: '#PRD-9098', type: 'Product', name: 'Aged Instagram Accounts (2012-2015)', seller: 'SocialDealer', date: '1 hour ago' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="glass-morphism rounded-3xl p-6 border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-white/10 transition-all shadow-xl"
                >
                   <div className="flex items-center gap-5">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform ${item.type === 'Product' ? 'bg-cyber-cyan/10 text-cyber-cyan' : 'bg-cyber-purple/10 text-cyber-purple'}`}>
                         {item.type === 'Product' ? <Package className="w-7 h-7" /> : <UserCheck className="w-7 h-7" />}
                      </div>
                      <div className="space-y-1">
                         <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{item.id}</span>
                            <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full border ${item.type === 'Product' ? 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20' : 'bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20'}`}>
                               {item.type}
                            </span>
                         </div>
                         <h4 className="font-bold text-white text-lg group-hover:text-cyber-cyan transition-colors">{item.name}</h4>
                         <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-[0.1em]">
                            <span>Seller: <span className="text-gray-300">{item.seller}</span></span>
                            <span className="w-1 h-1 rounded-full bg-gray-700" />
                            <span>Submitted: <span className="text-gray-300">{item.date}</span></span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <button className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all shadow-lg">
                         <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3.5 rounded-xl bg-cyber-green/10 hover:bg-cyber-green text-cyber-green hover:text-white transition-all shadow-lg border border-cyber-green/20">
                         <Check className="w-5 h-5" />
                      </button>
                      <button className="p-3.5 rounded-xl bg-cyber-red/10 hover:bg-cyber-red text-cyber-red hover:text-white transition-all shadow-lg border border-cyber-red/20">
                         <X className="w-5 h-5" />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>

           <div className="flex justify-center pt-8">
              <button className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors">Load More Items &darr;</button>
           </div>
        </main>
      </div>
    </motion.div>
  );
}
