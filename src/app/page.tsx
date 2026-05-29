"use client";
import React from 'react';
import { Search, ShieldCheck, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="flex flex-col gap-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-10 md:pt-20 px-4">
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-cyan/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple/10 blur-[120px] rounded-full"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyber-cyan" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Next-Gen Digital Commerce</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.1]">
            Unlock Premium <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Digital Assets</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            The most secure digital marketplace for premium accounts, software, and creative assets.
            Backed by professional escrow and AI-assisted moderation.
          </motion.p>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-cyan rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative flex items-center bg-[#0d1117]/90 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl">
              <Search className="ml-4 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for premium products, sellers, or services..."
                className="w-full bg-transparent border-none py-4 px-4 text-white focus:ring-0 placeholder:text-gray-600 font-medium"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white px-8 py-4 rounded-xl font-black shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all"
              >
                Search
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { label: 'Active Users', value: '50k+', icon: Users, color: 'text-cyber-cyan' },
              { label: 'Successful Trades', value: '120k+', icon: TrendingUp, color: 'text-cyber-green' },
              { label: 'Secured Payments', value: '$2.4M+', icon: ShieldCheck, color: 'text-cyber-purple' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.3)' }}
                className="glass-morphism rounded-2xl p-8 flex flex-col items-center gap-3 border-white/5 transition-all group"
              >
                <div className={`p-4 rounded-2xl bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Assets */}
      <section className="px-4 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black text-white flex items-center gap-4">
              <div className="p-2 rounded-xl bg-cyber-cyan/10">
                <Zap className="w-8 h-8 text-cyber-cyan" />
              </div>
              Featured Assets
            </h2>
            <button className="text-sm font-black text-cyber-cyan hover:text-white transition-colors uppercase tracking-widest border-b-2 border-cyber-cyan/30 pb-1">View All</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: 'Premium SEO Master Toolset v4.2', price: '$89.99', category: 'Software' },
              { title: 'Aged Twitter Account (2012)', price: '$150.00', category: 'Accounts' },
              { title: 'Enterprise Automation Suite', price: '$499.00', category: 'Software' },
              { title: 'Discord Nitro (1 Year) - Global', price: '$49.99', category: 'Accounts' },
              { title: 'React SaaS Starter Kit', price: '$29.00', category: 'Scripts' },
              { title: 'Adobe Creative Cloud 1Y', price: '$120.00', category: 'Accounts' },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism rounded-[2rem] overflow-hidden group border-white/5 hover:border-cyber-cyan/30 transition-all duration-500 shadow-xl hover:shadow-cyber-cyan/10"
              >
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-cyber-purple/10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-cyber-cyan text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">{product.category}</span>
                  </div>
                </div>
                <div className="p-8 space-y-5">
                  <h3 className="font-bold text-white leading-tight text-xl group-hover:text-cyber-cyan transition-colors line-clamp-2 h-14">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-cyber-green" />
                    </div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Verified Seller</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="text-3xl font-black text-white">{product.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 hover:bg-cyber-cyan hover:text-white border border-white/10 hover:border-cyber-cyan text-gray-300 text-xs font-black px-6 py-3 rounded-xl transition-all"
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyber-green/10">
              <TrendingUp className="w-5 h-5 text-cyber-green" />
            </div>
            Live Activity
          </h2>
          <div className="glass-morphism rounded-[2.5rem] p-8 space-y-6 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 blur-[50px] -z-10" />
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 pb-6 border-b border-white/5 last:border-0 last:pb-0 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-cyber-cyan/10 transition-colors">
                  <Zap className="w-5 h-5 text-cyber-cyan" />
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-white font-black">User_{900 + i}</span> purchased <br />
                    <span className="text-cyber-cyan font-black">Premium Asset #{800 + i}</span>
                  </p>
                  <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.2em]">{i * 2}m ago</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-morphism rounded-[2rem] p-8 border-white/5 bg-gradient-to-br from-cyber-purple/10 to-transparent">
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">Want to Sell?</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
              Join 5,000+ sellers earning passive income daily.
              Get verified and start selling in 15 mins.
            </p>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/10">
              Start Selling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
