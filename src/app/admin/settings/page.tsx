"use client";
import React from 'react';
import { Settings, Shield, DollarSign, Clock, Save, ShieldAlert, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminSettings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white tracking-tight"
          >
            Platform Settings
          </motion.h1>
          <p className="text-gray-500 font-medium text-sm">Configure marketplace commissions, escrow timers, and global security.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all text-sm flex items-center gap-3 uppercase tracking-widest"
        >
           <Save className="w-5 h-5" /> Save Changes
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Marketplace Config */}
        <div className="lg:col-span-2 space-y-10">
           <div className="glass-morphism rounded-[3rem] p-10 md:p-12 border-white/5 space-y-10 shadow-2xl">
              <h3 className="text-2xl font-black text-white flex items-center gap-4 tracking-tight">
                 <div className="p-2 rounded-xl bg-cyber-cyan/10">
                    <Settings className="w-7 h-7 text-cyber-cyan" />
                 </div>
                 Core Configuration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {[
                   { label: 'Base Commission (%)', val: '5.0', icon: DollarSign },
                   { label: 'Verified Seller Commission (%)', val: '2.5', icon: DollarSign },
                   { label: 'Escrow Release Timer (Hours)', val: '48', icon: Clock },
                   { label: 'Max Disputes Per User', val: '3', icon: ShieldAlert },
                 ].map((field, i) => (
                   <div key={i} className="space-y-4">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block pl-1">{field.label}</label>
                      <div className="relative group">
                         <field.icon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-cyan transition-colors" />
                         <input type="number" defaultValue={field.val} className="w-full bg-black/40 border border-white/10 rounded-[1.25rem] py-4 pl-14 pr-6 text-white focus:outline-none focus:border-cyber-cyan/50 transition-all font-black text-lg" />
                      </div>
                   </div>
                 ))}
              </div>

              <div className="space-y-8 pt-10 border-t border-white/5">
                 <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Global Platform Toggles</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Require Product Approval', enabled: true },
                      { label: 'Enable Live Feed', enabled: true },
                      { label: 'Automatic KYC', enabled: false },
                      { label: 'Maintenance Mode', enabled: false },
                    ].map((toggle, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-white/2 rounded-[1.5rem] border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                         <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{toggle.label}</span>
                         <div className={`w-12 h-6 rounded-full p-1 transition-all duration-300 ${toggle.enabled ? 'bg-cyber-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-800'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${toggle.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Security & Access */}
        <div className="lg:col-span-1 space-y-10">
           <motion.div
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="glass-morphism rounded-[2.5rem] p-8 border-white/5 space-y-8 shadow-2xl"
           >
              <h3 className="text-xl font-black text-white flex items-center gap-4">
                 <div className="p-2 rounded-xl bg-cyber-purple/10">
                    <Shield className="w-6 h-6 text-cyber-purple" />
                 </div>
                 User Control
              </h3>
              <div className="space-y-6">
                 <div className="relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Search user ID/Email..." className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-xs text-white focus:border-cyber-purple/50 transition-all" />
                 </div>
                 <div className="bg-cyber-red/5 border border-dashed border-cyber-red/20 rounded-[1.5rem] p-6 space-y-4">
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                       Enter target credentials to instantly <span className="text-white font-bold underline">FREEZE</span> all financial activities.
                    </p>
                    <button className="w-full bg-cyber-red text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-cyber-red/20 hover:scale-[1.02] transition-all">Freeze Account</button>
                 </div>
              </div>
           </motion.div>

           <div className="glass-morphism rounded-[2.5rem] p-8 border-white/5 space-y-8 shadow-2xl">
              <h3 className="text-xl font-black text-white flex items-center gap-4">
                 <div className="p-2 rounded-xl bg-cyber-cyan/10">
                    <Globe className="w-6 h-6 text-cyber-cyan" />
                 </div>
                 Support Links
              </h3>
              <div className="space-y-6">
                 {[
                   { label: 'Support WhatsApp', val: '+92 300 1412943' },
                   { label: 'Admin Telegram', val: '@EliteMarketAdmin' },
                   { label: 'Official Email', val: 'support@elitemarket.com' },
                 ].map((item, i) => (
                   <div key={i} className="space-y-2">
                      <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] pl-1">{item.label}</span>
                      <input type="text" defaultValue={item.val} className="w-full bg-white/2 border border-white/10 rounded-xl py-3.5 px-5 text-xs text-white focus:border-cyber-cyan/50 transition-all font-bold" />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
