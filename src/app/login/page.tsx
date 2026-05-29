"use client";
import React from 'react';
import { ShieldCheck, Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-morphism rounded-[2.5rem] p-10 md:p-12 border-white/5 shadow-2xl space-y-10"
      >
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyber-cyan/10 text-cyber-cyan mb-2 shadow-lg shadow-cyber-cyan/10">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight uppercase tracking-[0.1em]">Secure Login</h1>
          <p className="text-gray-500 text-sm font-medium">Access your elite digital dashboard</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-cyan transition-colors" />
                <input type="email" placeholder="name@company.com" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-cyan/50 transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end pr-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Password</label>
                <button className="text-[9px] font-black text-cyber-cyan uppercase tracking-widest hover:text-white transition-colors">Forgot?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-cyan transition-colors" />
                <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-cyan/50 transition-all text-sm" />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all flex items-center justify-center gap-3"
          >
            Authenticate <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="space-y-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <span className="relative px-4 bg-[#030712] text-[9px] font-black text-gray-600 uppercase tracking-[0.3em]">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-xs font-bold text-gray-300 transition-all">
               <Github className="w-4 h-4" /> Github
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-xs font-bold text-gray-300 transition-all">
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.34-2.03 4.41-1.34 1.34-3.34 2.1-6.5 2.1-5.12 0-9.27-4.15-9.27-9.27s4.15-9.27 9.27-9.27c2.8 0 4.88 1.1 6.32 2.48l2.32-2.32C18.44 1.3 15.64 0 12.48 0 5.58 0 0 5.58 0 12.48s5.58 12.48 12.48 12.48c3.7 0 6.48-1.24 8.77-3.6 2.32-2.32 3.04-5.58 3.04-8.15 0-.6-.05-1.15-.15-1.65h-11.64z"/></svg> Google
            </button>
          </div>
        </div>

        <p className="text-center text-xs font-medium text-gray-500">
          Don&apos;t have an account? <Link href="/register" className="text-cyber-cyan font-black uppercase tracking-widest hover:underline">Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
}
