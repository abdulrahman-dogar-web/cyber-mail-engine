"use client";
import React from 'react';
import { ShoppingBag, Wallet, Clock, AlertCircle, Zap, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BuyerDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black text-white tracking-tight"
          >
            Buyer Dashboard
          </motion.h1>
          <p className="text-gray-500 font-medium text-sm">Welcome back! You have <span className="text-cyber-cyan font-bold">3 active</span> escrow transactions.</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl font-bold border border-white/5 transition-all text-sm">
             Order History
           </button>
           <motion.button
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white px-6 py-3 rounded-2xl font-black shadow-xl shadow-cyber-cyan/20 transition-all text-sm"
           >
             Top up Wallet
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wallet & Stats */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-morphism rounded-[2.5rem] p-8 border-white/5 bg-gradient-to-br from-cyber-cyan/10 to-transparent relative overflow-hidden shadow-2xl shadow-cyber-cyan/5"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyber-cyan/20 blur-[60px] rounded-full animate-pulse" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyber-cyan">
                  <Wallet className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-cyber-cyan uppercase tracking-widest bg-cyber-cyan/10 px-3 py-1 rounded-full border border-cyber-cyan/20">Primary Wallet</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Available Balance</span>
                <div className="text-5xl font-black text-white tracking-tighter">$1,240.50</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-1">
                   <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">In Escrow</span>
                   <div className="text-lg font-black text-cyber-purple">$450.00</div>
                </div>
                <div className="space-y-1">
                   <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Total Spent</span>
                   <div className="text-lg font-black text-white">$3,840.00</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="glass-morphism rounded-3xl p-6 border-white/5 space-y-6">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyber-purple" />
              Recent Transactions
            </h3>
            <div className="space-y-4">
              {[
                { type: 'deposit', amount: 500, date: 'Oct 24, 2023' },
                { type: 'purchase', amount: -89.99, date: 'Oct 22, 2023' },
                { type: 'purchase', amount: -150.00, date: 'Oct 20, 2023' },
              ].map((tx, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition-colors ${tx.type === 'deposit' ? 'bg-cyber-green/10 text-cyber-green' : 'bg-white/5 text-gray-400'}`}>
                      {tx.type === 'deposit' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">{tx.type === 'deposit' ? 'Wallet Top-up' : 'Product Purchase'}</div>
                      <div className="text-[10px] text-gray-600 font-bold uppercase tracking-wide">{tx.date}</div>
                    </div>
                  </div>
                  <div className={`text-sm font-black ${tx.amount > 0 ? 'text-cyber-green' : 'text-white'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Escrow Orders */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
             <h2 className="text-2xl font-black text-white flex items-center gap-3">
               <ShoppingBag className="w-6 h-6 text-cyber-cyan" />
               Active Orders
             </h2>
             <span className="text-[10px] font-black text-cyber-cyan bg-cyber-cyan/10 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-cyber-cyan/20">3 Items</span>
          </div>

          <div className="space-y-4">
            {[
              { id: '#82194', name: 'Premium SEO Master Toolset v4.2', seller: 'TechTitan', price: 89.99, status: 'In Delivery' },
              { id: '#82188', name: 'Aged Twitter Account (2012)', seller: 'SocialKing', price: 150.00, status: 'Awaiting Confirmation' },
              { id: '#82172', name: 'Full Stack React SaaS Boilerplate', seller: 'CodeMaster', price: 49.00, status: 'In Escrow' },
            ].map((order, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="glass-morphism rounded-3xl p-6 border-white/5 hover:border-cyber-cyan/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 blur-[40px] -z-10 group-hover:bg-cyber-cyan/10 transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-cyber-cyan shadow-inner">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{order.id}</span>
                        <div className="flex items-center gap-1 bg-cyber-cyan/10 px-2 py-0.5 rounded text-[9px] font-black text-cyber-cyan uppercase tracking-tighter border border-cyber-cyan/20">
                          {order.status}
                        </div>
                      </div>
                      <Link href="/product/1">
                        <h4 className="font-bold text-white text-xl group-hover:text-cyber-cyan transition-colors">{order.name}</h4>
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                        <span>Seller: <Link href="/seller/1" className="text-gray-300 font-bold hover:text-white transition-colors">{order.seller}</Link></span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span>Price: <span className="text-white font-black">${order.price}</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href="/product/1">
                      <button className="flex-1 md:flex-none bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold transition-all border border-white/5">
                        View Details
                      </button>
                    </Link>
                    {order.status === 'Awaiting Confirmation' ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 md:flex-none bg-cyber-green text-white px-6 py-3 rounded-xl text-xs font-black shadow-lg shadow-cyber-green/20"
                      >
                        Confirm Delivery
                      </motion.button>
                    ) : (
                      <Link href="/chat/1">
                        <button className="flex-1 md:flex-none bg-cyber-cyan/10 text-cyber-cyan px-6 py-3 rounded-xl text-xs font-black border border-cyber-cyan/20 hover:bg-cyber-cyan hover:text-white transition-all">
                          Chat with Seller
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-cyber-amber/5 border border-dashed border-cyber-amber/30 rounded-3xl p-6 flex items-start gap-5 shadow-inner"
          >
            <div className="p-3 rounded-2xl bg-cyber-amber/10 text-cyber-amber">
               <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">Need help with an order?</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                If you haven&apos;t received your product within the estimated time, you can open a <Link href="/dispute/1" className="text-cyber-amber font-bold underline">dispute</Link>.
                Our team usually resolves disputes within <span className="text-cyber-amber font-bold">15 minutes</span>.
              </p>
              <Link href="/chat/1">
                <button className="text-[10px] font-black text-cyber-amber uppercase tracking-[0.2em] pt-3 hover:text-white transition-colors">Open a Support Ticket &rarr;</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
