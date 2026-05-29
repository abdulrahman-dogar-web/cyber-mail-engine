import React from 'react';
import { ShieldCheck, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full mt-20 px-4 pb-10">
      <div className="max-w-7xl mx-auto glass-morphism rounded-3xl p-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-10">
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Platform Owner</h4>
              <div className="text-xl font-extrabold text-white">Sardar Muhammad Abdul Rahman Dogar</div>
              <div className="inline-block mt-2 px-3 py-1 bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-[10px] font-bold rounded-full uppercase">
                All-In-One Trusted Supplier Agent
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Get any digital asset through Mr. Abdul Rahman with complete trust and guaranteed scam-free escrow execution.
            </p>
            <div className="bg-black/20 border-l-2 border-cyber-cyan p-4 rounded-r-xl">
              <strong className="block text-[10px] text-cyber-cyan uppercase tracking-wider mb-1">What is a Digital Asset?</strong>
              <p className="text-[11px] text-gray-500 italic">
                Any product or service that can be bought, delivered, and used entirely online without needing any physical shipping.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
              Digital Products
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-cyber-cyan transition-colors cursor-pointer">
                <Globe className="w-3 h-3" /> Premium specialized courses
              </li>
              <li className="flex items-center gap-2 hover:text-cyber-cyan transition-colors cursor-pointer">
                <Globe className="w-3 h-3" /> Enterprise software
              </li>
              <li className="flex items-center gap-2 hover:text-cyber-cyan transition-colors cursor-pointer">
                <Globe className="w-3 h-3" /> Clean scripts & web files
              </li>
              <li className="bg-cyber-cyan/5 border border-dashed border-cyber-cyan/30 p-3 rounded-lg text-white font-bold text-[11px] animate-pulse">
                EVERYTHING ELSE THAT FALLS UNDER DIGITAL ASSETS ARE AVAILABLE!
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyber-purple" />
              Elite Agency Services
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-cyber-purple transition-colors cursor-pointer">Full Stack SMM Services</li>
              <li className="hover:text-cyber-purple transition-colors cursor-pointer">Advanced Web Development</li>
              <li className="hover:text-cyber-purple transition-colors cursor-pointer">High-Retention Video Editing</li>
              <li className="hover:text-cyber-purple transition-colors cursor-pointer">Professional Team Support</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-600">
            &copy; 2026 Elite Marketplace. All Rights Reserved. Secured Deals Only.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-green-500/20 hover:scale-105 transition-all"
          >
            <MessageSquare className="w-4 h-4" /> Deal on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
