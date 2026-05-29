"use client";
import React from 'react';
import { Send, Paperclip, ShieldCheck, Zap, MoreVertical, Search, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatPage() {
  const messages = [
    { id: 1, type: 'received', text: "Hello! I've received the order. I'm preparing the toolset access keys for you now. It usually takes about 5-10 minutes to generate the custom enterprise license.", time: '10:42 AM' },
    { id: 2, type: 'sent', text: "Great, thank you! Let me know if you need any additional info from my side.", time: '10:45 AM' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-6 h-[calc(100vh-120px)] flex gap-6"
    >
      {/* Sidebar: Active Conversations */}
      <aside className="hidden lg:flex w-80 flex-col glass-morphism rounded-[2.5rem] border-white/5 overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 space-y-5 bg-white/2">
          <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight">
            <div className="p-2 rounded-xl bg-cyber-cyan/10">
              <Send className="w-5 h-5 text-cyber-cyan -rotate-45" />
            </div>
            Messages
          </h2>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-cyan transition-colors" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-black/40 border border-white/10 rounded-[1.25rem] py-3 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-cyber-cyan/50 transition-all"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {[
            { name: 'TechTitan', last: 'Payment released to escrow.', time: '2m', active: true, verified: true },
            { name: 'SocialKing', last: 'Account details sent.', time: '1h', active: false, verified: true },
            { name: 'CodeMaster', last: 'Checking the repo now.', time: '5h', active: false, verified: false },
          ].map((chat, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 5 }}
              className={`p-5 rounded-3xl flex gap-4 cursor-pointer transition-all border ${chat.active ? 'bg-cyber-cyan/10 border-cyber-cyan/30 shadow-lg shadow-cyber-cyan/5' : 'hover:bg-white/5 border-transparent'}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 flex items-center justify-center text-white font-black text-xl shadow-inner">
                {chat.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                 <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-white truncate">{chat.name}</span>
                      {chat.verified && <CheckCircle className="w-3.5 h-3.5 text-cyber-green" />}
                    </div>
                    <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest">{chat.time}</span>
                 </div>
                 <p className="text-[11px] text-gray-500 truncate font-medium">{chat.last}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col glass-morphism rounded-[2.5rem] border-white/5 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/2 to-cyber-purple/2 pointer-events-none" />

        {/* Chat Header */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-xl z-10">
           <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 flex items-center justify-center text-white font-black text-2xl shadow-inner">T</div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyber-green border-4 border-[#030712] rounded-full" />
              </div>
              <div>
                 <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white tracking-tight">TechTitan</h3>
                    <CheckCircle className="w-4 h-4 text-cyber-green" />
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Verified Seller</span>
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end">
                 <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Order #82194</span>
                 <div className="flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 rounded-full border border-cyber-cyan/20">
                    <ShieldCheck className="w-3 h-3 text-cyber-cyan" />
                    <span className="text-[9px] font-black text-cyber-cyan uppercase tracking-widest">$89.99 Escrow</span>
                 </div>
              </div>
              <button className="p-3.5 rounded-2xl hover:bg-white/5 text-gray-500 transition-all border border-white/5">
                 <MoreVertical className="w-5 h-5" />
              </button>
           </div>
        </div>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10 space-y-8 z-10 custom-scrollbar">
           <div className="flex justify-center">
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] backdrop-blur-md">
                 Escrow Transaction Active
              </div>
           </div>

           <AnimatePresence>
             {messages.map((msg) => (
               <motion.div
                 key={msg.id}
                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 className={`flex items-start gap-4 ${msg.type === 'sent' ? 'flex-row-reverse' : ''}`}
               >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black flex-shrink-0 shadow-lg ${msg.type === 'sent' ? 'bg-cyber-purple/20' : 'bg-white/5'}`}>
                    {msg.type === 'sent' ? 'U' : 'T'}
                  </div>
                  <div className={`space-y-2 max-w-[70%] ${msg.type === 'sent' ? 'text-right' : ''}`}>
                     <div className={`p-5 text-sm leading-relaxed font-medium shadow-xl ${
                       msg.type === 'sent'
                       ? 'bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-[2rem] rounded-tr-none text-gray-200'
                       : 'bg-white/5 border border-white/10 rounded-[2rem] rounded-tl-none text-gray-300'
                     }`}>
                        {msg.text}
                     </div>
                     <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest px-2">{msg.time}</span>
                  </div>
               </motion.div>
             ))}

             {/* Delivery Proof Card */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="flex items-start gap-4"
             >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white font-black flex-shrink-0 shadow-lg">T</div>
                <div className="space-y-3 max-w-[70%]">
                   <div className="bg-cyber-purple/10 border border-cyber-purple/20 rounded-[2.5rem] rounded-tl-none p-8 space-y-6 shadow-2xl">
                      <div className="flex items-center gap-3">
                         <div className="p-2 rounded-lg bg-cyber-purple/20">
                            <Zap className="w-5 h-5 text-cyber-purple" />
                         </div>
                         <h4 className="text-base font-black text-white tracking-tight uppercase tracking-widest">Delivery Proof</h4>
                      </div>
                      <div className="bg-black/60 rounded-[1.5rem] p-5 flex items-center justify-between gap-8 border border-white/10 group cursor-pointer hover:border-cyber-purple/50 transition-all">
                         <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-xl bg-white/5 text-cyber-purple group-hover:scale-110 transition-transform shadow-inner">
                               <ImageIcon className="w-6 h-6" />
                            </div>
                            <div>
                               <div className="text-sm font-black text-white">license_keys_encrypted.png</div>
                               <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">1.2 MB • Ready for Review</div>
                            </div>
                         </div>
                         <button className="text-[10px] font-black text-cyber-purple uppercase tracking-[0.3em] hover:text-white transition-colors underline">View</button>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                         The seller has uploaded the digital assets. Please verify the contents before releasing funds from escrow.
                      </p>
                      <button className="w-full bg-cyber-purple text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-cyber-purple/20 hover:scale-[1.02] transition-all">
                         Confirm Delivery & Release Funds
                      </button>
                   </div>
                   <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest px-2">10:53 AM</span>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Message Input */}
        <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-2xl z-10">
           <div className="glass-morphism rounded-[2rem] p-3 border-white/10 flex items-center gap-3 shadow-2xl">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="p-4 rounded-[1.25rem] hover:bg-white/5 text-gray-500 transition-all"
              >
                 <Paperclip className="w-6 h-6" />
              </motion.button>
              <input
                 type="text"
                 placeholder="Secure message for TechTitan..."
                 className="flex-1 bg-transparent border-none py-4 px-3 text-white focus:ring-0 placeholder:text-gray-600 font-medium text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-cyan text-white p-5 rounded-[1.25rem] shadow-xl shadow-cyber-cyan/30 hover:shadow-cyber-cyan/50 transition-all"
              >
                 <Send className="w-6 h-6" />
              </motion.button>
           </div>
           <div className="flex justify-center pt-5">
              <div className="flex items-center gap-3 opacity-40 group cursor-default">
                 <ShieldCheck className="w-4 h-4 text-cyber-cyan group-hover:scale-110 transition-transform" />
                 <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] group-hover:text-gray-400 transition-colors">Elite Escrow Protected Channel</span>
              </div>
           </div>
        </div>
      </main>
    </motion.div>
  );
}
