"use client";
import React from 'react';
import { ShieldCheck, Mail, Lock, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-cyber-purple/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-morphism rounded-[2.5rem] p-10 md:p-12 border-white/5 shadow-2xl space-y-10"
      >
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyber-purple/10 text-cyber-purple mb-2 shadow-lg shadow-cyber-purple/10">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight uppercase tracking-[0.1em]">Join Elite</h1>
          <p className="text-gray-500 text-sm font-medium">Create your secure commerce identity</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-purple transition-colors" />
                <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-purple/50 transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-purple transition-colors" />
                <input type="email" placeholder="name@company.com" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-purple/50 transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">Secure Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-purple transition-colors" />
                <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-purple/50 transition-all text-sm" />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 pl-1">
             <input type="checkbox" className="mt-1 accent-cyber-purple" />
             <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
               I agree to the <span className="text-gray-300 font-bold underline">Terms of Service</span> and acknowledge the <span className="text-gray-300 font-bold underline">Escrow Protocol</span> requirements.
             </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-cyber-purple/20 hover:shadow-cyber-purple/40 transition-all flex items-center justify-center gap-3"
          >
            Create Account <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <p className="text-center text-xs font-medium text-gray-500">
          Already have an account? <Link href="/login" className="text-cyber-purple font-black uppercase tracking-widest hover:underline">Secure Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
