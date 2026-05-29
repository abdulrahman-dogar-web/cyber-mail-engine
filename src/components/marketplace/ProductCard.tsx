"use client";
import React from 'react';
import { ShieldCheck, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  price: number;
  category: string;
  seller: string;
  isVerified: boolean;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, category, seller, isVerified, rating }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-morphism rounded-[2rem] overflow-hidden group border-white/5 hover:border-cyber-cyan/30 transition-all duration-500 shadow-xl hover:shadow-cyber-cyan/10"
    >
      <div className="aspect-video bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-cyber-purple/10 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-black/60 backdrop-blur-md border border-white/10 text-cyber-cyan text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>
      <div className="p-7 space-y-5">
        <h3 className="font-bold text-white leading-tight text-xl group-hover:text-cyber-cyan transition-colors line-clamp-2 h-14">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 flex items-center justify-center text-sm text-white font-black shadow-inner">
              {seller[0]}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-200 font-bold">{seller}</span>
                {isVerified && <CheckCircle className="w-3.5 h-3.5 text-cyber-green" />}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-cyber-amber fill-cyber-amber" />
                <span className="text-[11px] text-gray-500 font-black">{rating}</span>
              </div>
            </div>
          </div>
          {isVerified && (
            <div className="hidden sm:flex items-center gap-1.5 bg-cyber-green/10 px-3 py-1.5 rounded-xl border border-cyber-green/20 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-cyber-green" />
              <span className="text-[8px] text-cyber-green font-black uppercase tracking-widest">Verified</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-0.5">Price</span>
            <div className="text-2xl font-black text-white tracking-tighter">${price}</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/5 hover:bg-cyber-cyan hover:text-white border border-white/10 hover:border-cyber-cyan text-gray-300 text-xs font-black px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-cyber-cyan/20"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
