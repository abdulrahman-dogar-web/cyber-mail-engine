"use client";
import React from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto glass-morphism rounded-2xl md:rounded-[2rem] px-6 md:px-10 py-4 flex items-center justify-between shadow-2xl border-white/10"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-purple shadow-lg shadow-cyber-cyan/20"
          >
            <ShieldCheck className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase group-hover:text-cyber-cyan transition-colors">
            Elite<span className="text-cyber-cyan">Market</span>
          </span>
        </Link>

        <div className="hidden lg:flex flex-1 max-w-md mx-12">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-cyan transition-colors" />
            <input
              type="text"
              placeholder="Search premium assets..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-cyber-cyan/50 transition-all placeholder:text-gray-600"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden group-focus-within:flex items-center gap-1">
               <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-gray-500">ESC</kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm font-black text-gray-400 hover:text-white transition-colors uppercase tracking-widest">Market</Link>
            <Link href="/login" className="text-sm font-black text-gray-400 hover:text-white transition-colors uppercase tracking-widest">Login</Link>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/register"
              className="bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white text-xs font-black px-6 md:px-8 py-3.5 rounded-xl md:rounded-[1.25rem] shadow-xl shadow-cyber-cyan/20 uppercase tracking-widest"
            >
              Join Now
            </Link>
          </motion.div>

          <button className="lg:hidden p-2 text-gray-400">
             <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
