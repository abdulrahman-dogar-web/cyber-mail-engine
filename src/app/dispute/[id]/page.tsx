"use client";
import React from 'react';
import { Gavel, AlertTriangle, FileText, Upload, ShieldAlert, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DisputePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-10 space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
             <motion.div
               initial={{ rotate: -20, scale: 0.8 }}
               animate={{ rotate: 0, scale: 1 }}
               className="p-4 rounded-3xl bg-cyber-red/10 text-cyber-red shadow-lg shadow-cyber-red/5"
             >
                <Gavel className="w-8 h-8" />
             </motion.div>
             <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Case #DP-82194</h1>
          </div>
          <p className="text-gray-500 font-medium text-sm flex items-center gap-3">
            <span className="bg-cyber-amber/10 text-cyber-amber px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyber-amber/20">Under Admin Review</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            Opened by <span className="text-white font-bold">Buyer_921</span> on Oct 24
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black border border-white/10 transition-all text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl"
        >
           <MessageSquare className="w-5 h-5 text-cyber-cyan" /> Contact Support
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Dispute Timeline & Evidence */}
        <div className="lg:col-span-2 space-y-10">
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="glass-morphism rounded-[3rem] p-10 md:p-12 border-white/5 space-y-10 shadow-2xl"
           >
              <h3 className="text-2xl font-black text-white flex items-center gap-4 tracking-tight">
                 <AlertTriangle className="w-7 h-7 text-cyber-amber" />
                 Detailed Evidence
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-3">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] block pl-1">Primary Reason</span>
                    <div className="text-white font-black text-xl leading-tight">Product Not as Described / License Key Invalid</div>
                 </div>
                 <div className="space-y-3">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] block pl-1">Claim Type</span>
                    <div className="text-cyber-cyan font-black text-xl leading-tight">Full Refund Requested</div>
                 </div>
              </div>

              <div className="space-y-4">
                 <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] block pl-1">Buyer Description</span>
                 <div className="bg-black/40 rounded-3xl p-8 border border-white/5">
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">
                       The seller delivered the license key, but when I attempted to activate the software, it returned an &quot;Invalid Key&quot; error.
                       I reached out to the seller 2 hours ago but haven&apos;t received a response yet. Attached is the screenshot of the error message.
                    </p>
                 </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                 <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] pl-1">Attached Files</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/2 border border-white/10 rounded-2xl p-5 flex items-center gap-5 group cursor-pointer hover:border-cyber-cyan/30 transition-all shadow-lg"
                    >
                       <div className="p-4 rounded-xl bg-cyber-cyan/10 text-cyber-cyan group-hover:scale-110 transition-transform shadow-inner">
                          <FileText className="w-6 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="text-sm font-black text-white truncate group-hover:text-cyber-cyan transition-colors">error_screenshot.png</div>
                          <div className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-1">1.2 MB • Oct 24, 10:55</div>
                       </div>
                    </motion.div>
                 </div>
              </div>
           </motion.div>

           {/* Submit More Evidence */}
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="glass-morphism rounded-[3rem] p-10 border-white/5 space-y-8 border-dashed shadow-2xl"
           >
              <h3 className="text-xl font-black text-white flex items-center gap-4">
                 <Upload className="w-6 h-6 text-cyber-cyan" />
                 Upload More Proof
              </h3>
              <div className="space-y-6">
                 <textarea
                    placeholder="Provide more context or update on the situation..."
                    className="w-full bg-black/40 border border-white/10 rounded-[2rem] p-8 text-sm text-white focus:outline-none focus:border-cyber-cyan/50 h-40 resize-none font-medium shadow-inner"
                 ></textarea>
                 <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 border-2 border-dashed border-white/10 rounded-[1.5rem] p-6 flex items-center justify-center gap-3 hover:bg-white/5 cursor-pointer transition-all group">
                       <Upload className="w-5 h-5 text-gray-500 group-hover:text-cyber-cyan transition-colors" />
                       <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Attach New Files</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="bg-cyber-cyan text-white px-12 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all"
                    >
                      Update Case
                    </motion.button>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Right: Dispute Status & Summary */}
        <div className="lg:col-span-1 space-y-10">
           <motion.div
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="glass-morphism rounded-[2.5rem] p-10 border-white/5 space-y-10 sticky top-24 shadow-2xl"
           >
              <h3 className="font-black text-white uppercase tracking-[0.3em] text-[10px] border-b border-white/5 pb-6">Case Summary</h3>

              <div className="space-y-8">
                 <div className="flex items-center justify-between group">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest group-hover:text-gray-400 transition-colors">Order Total</span>
                    <span className="text-3xl font-black text-white tracking-tighter">$89.99</span>
                 </div>
                 <div className="flex items-center justify-between group">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest group-hover:text-gray-400 transition-colors">Escrow Protection</span>
                    <span className="text-[10px] font-black text-cyber-amber bg-cyber-amber/10 px-4 py-2 rounded-full uppercase tracking-widest border border-cyber-amber/20 shadow-lg shadow-cyber-amber/5">Frozen</span>
                 </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                 <h4 className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em]">Official Timeline</h4>
                 <div className="space-y-8">
                    {[
                      { event: 'Dispute Opened', time: 'Oct 24, 10:55 AM', status: 'complete' },
                      { event: 'Seller Notified', time: 'Oct 24, 10:56 AM', status: 'complete' },
                      { event: 'Admin Review', time: 'Oct 24, 11:30 AM', status: 'complete' },
                      { event: 'Final Verdict', time: 'Awaiting', status: 'active' },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-5 relative group">
                        {i < 3 && <div className="absolute left-[13px] top-8 bottom-[-24px] w-0.5 bg-white/5 group-hover:bg-cyber-cyan/20 transition-colors" />}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-all duration-500 shadow-lg ${
                          step.status === 'complete' ? 'bg-cyber-green text-white shadow-cyber-green/10' : 'bg-[#0d1117] border-2 border-white/10 text-gray-600'
                        }`}>
                          {step.status === 'complete' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        </div>
                        <div className="space-y-1">
                           <div className={`text-xs font-black uppercase tracking-widest ${step.status === 'complete' ? 'text-white' : 'text-gray-600'}`}>{step.event}</div>
                           <div className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter">{step.time}</div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-cyber-red/5 border border-dashed border-cyber-red/30 rounded-[1.5rem] p-6 shadow-inner">
                 <div className="flex items-center gap-3 text-cyber-red mb-3">
                    <ShieldAlert className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Safety Warning</span>
                 </div>
                 <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                    Tampering with evidence or submitting falsified logs will result in <span className="text-white font-bold underline italic">PERMANENT BAN</span> and forfeiture of all wallet funds.
                 </p>
              </div>
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
