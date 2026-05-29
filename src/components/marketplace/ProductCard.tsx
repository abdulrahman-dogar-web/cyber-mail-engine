"use client";
import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductCardProps {
  id?: string;
  title: string;
  price: number;
  category: string;
  seller: string;
  isVerified: boolean;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id = "1", title, price, category, seller, isVerified, rating }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-morphism rounded-[2rem] overflow-hidden group border-white/5 hover:border-cyber-cyan/30 transition-all duration-500 shadow-xl hover:shadow-cyber-cyan/10 flex flex-col h-full"
    >
      <Link href={`/product/${id}`} className="block">
        <div className="aspect-video bg-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-cyber-purple/10 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-black/60 backdrop-blur-md border border-white/10 text-cyber-cyan text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
              {category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-4">
          <Link href={`/product/${id}`}>
            <h3 className="font-bold text-white leading-tight text-lg group-hover:text-cyber-cyan transition-colors line-clamp-2 min-h-[3rem]">
              {title}
            </h3>
          </Link>

          <div className="flex items-center justify-between gap-2">
            <Link href={`/seller/${id}`} className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 flex-shrink-0 flex items-center justify-center text-xs text-white font-black shadow-inner">
                {seller[0]}
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-200 font-bold truncate">{seller}</span>
                  {isVerified && <CheckCircle className="w-3 h-3 text-cyber-green flex-shrink-0" />}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-cyber-amber fill-cyber-amber" />
                  <span className="text-[10px] text-gray-500 font-black">{rating}</span>
                </div>
              </div>
            </Link>
            {isVerified && (
              <div className="flex-shrink-0 bg-cyber-green/10 px-2 py-1 rounded-lg border border-cyber-green/20">
                <span className="text-[8px] text-cyber-green font-black uppercase tracking-tighter">Verified</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-0.5">Price</span>
            <div className="text-xl font-black text-white tracking-tighter">${price}</div>
          </div>
          <Link href={`/product/${id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 hover:bg-cyber-cyan hover:text-white border border-white/10 hover:border-cyber-cyan text-gray-300 text-[10px] font-black px-4 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-cyber-cyan/20 uppercase tracking-widest"
            >
              Buy Now
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
