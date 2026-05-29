"use client";
import React from 'react';
import { ShieldCheck, UserCheck, Smartphone, Mail, Camera, FileText, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KYCVerification() {
  const steps = [
    { name: 'Identity Info', icon: FileText, status: 'complete' },
    { name: 'ID Documents', icon: ShieldCheck, status: 'active' },
    { name: 'Face Verification', icon: Camera, status: 'pending' },
    { name: 'Final Review', icon: UserCheck, status: 'pending' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-16 space-y-12"
    >
      <div className="text-center space-y-5">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl font-black text-white tracking-tighter"
        >
          Seller Verification
        </motion.h1>
        <p className="text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
          Complete your KYC to unlock <span className="text-cyber-cyan font-bold">Priority Support</span>,
          <span className="text-cyber-green font-bold">Lower Fees</span>, and the trusted seller badge.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between relative px-6 md:px-10">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 -z-10 mx-10" />
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center border-2 transition-all duration-500 ${
                step.status === 'complete' ? 'bg-cyber-green border-cyber-green text-white shadow-xl shadow-cyber-green/20' :
                step.status === 'active' ? 'bg-cyber-cyan border-cyber-cyan text-white shadow-xl shadow-cyber-cyan/30 scale-110' :
                'bg-[#0d1117] border-white/10 text-gray-600'
              }`}
            >
              {step.status === 'complete' ? <Check className="w-7 h-7" /> : <step.icon className="w-7 h-7" />}
            </motion.div>
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${step.status === 'pending' ? 'text-gray-600' : 'text-white'}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-morphism rounded-[3rem] p-10 md:p-16 border-white/5 space-y-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 blur-[80px] -z-10" />

        <div className="space-y-6">
          <h2 className="text-3xl font-black text-white flex items-center gap-4 tracking-tight">
             <div className="p-2 rounded-xl bg-cyber-cyan/10">
                <ShieldCheck className="w-7 h-7 text-cyber-cyan" />
             </div>
             Upload Identity Documents
          </h2>
          <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-2xl">
            Please provide a high-resolution photo of your government-issued ID card, Passport, or Driver&apos;s License.
            Ensure all text is clearly legible and the photo is not blurry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {[
             { label: 'Front of Document', desc: 'ID Card or Passport Front' },
             { label: 'Back of Document', desc: 'ID Card Back (if applicable)' }
           ].map((side, i) => (
             <div key={i} className="space-y-5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block pl-1">{side.label}</label>
                <motion.div
                  whileHover={{ borderColor: 'rgba(34, 211, 238, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  className="aspect-[1.6/1] rounded-[2rem] border-2 border-dashed border-white/10 bg-white/2 flex flex-col items-center justify-center gap-5 transition-all cursor-pointer group relative"
                >
                   <div className="p-5 rounded-2xl bg-white/5 text-gray-500 group-hover:text-cyber-cyan group-hover:scale-110 transition-all duration-500">
                      <Camera className="w-10 h-10" />
                   </div>
                   <div className="text-center space-y-1">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Drop file here</span>
                      <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{side.desc}</span>
                   </div>
                </motion.div>
             </div>
           ))}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-2xl border border-white/5">
                 <Smartphone className="w-4 h-4 text-cyber-green" />
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Phone OK</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-2xl border border-white/5">
                 <Mail className="w-4 h-4 text-cyber-green" />
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Email OK</span>
              </div>
           </div>
           <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none text-xs font-black text-gray-600 uppercase tracking-[0.2em] px-10 py-5 hover:text-white transition-colors">Previous</button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 md:flex-none bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all"
              >
                Continue Verification
              </motion.button>
           </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-start gap-6 bg-cyber-purple/5 border border-dashed border-cyber-purple/30 rounded-[2rem] p-8 shadow-inner"
      >
         <div className="p-3 rounded-xl bg-cyber-purple/10">
            <ShieldCheck className="w-6 h-6 text-cyber-purple" />
         </div>
         <div className="space-y-2">
            <h4 className="text-sm font-black text-white uppercase tracking-widest">Military-Grade Encryption</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-2xl">
              Your identity documents are encrypted using <span className="text-gray-300 font-bold">AES-256-GCM</span> and are stored in an isolated vault.
              Verification is performed by our automated biometric engine. We never sell or share user data.
            </p>
         </div>
      </motion.div>
    </motion.div>
  );
}
