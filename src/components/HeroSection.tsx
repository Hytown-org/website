'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servers = [
  { name: 'Global', ip: 'play.hytown.org', flag: '🌍', ping: 'Worldwide' },
  { name: 'European', ip: 'eu.hytown.org', flag: '🇪🇺', ping: 'EU Optimized' },
];

function FloatingParticle({ delay }: { delay: number }) {
  const randomX = Math.random() * 100;
  const randomSize = Math.random() * 3 + 2;
  const duration = Math.random() * 15 + 20;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
        background: `radial-gradient(circle, rgba(201, 170, 113, 0.8) 0%, rgba(201, 170, 113, 0) 70%)`,
      }}
      initial={{ y: '100vh', opacity: 0 }}
      animate={{
        y: '-100vh',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

function ServerCard({ server, index }: { server: typeof servers[0]; index: number }) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(server.ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#c9aa71]/20 to-[#f19d00]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-[#1A1714] to-[#14110F] rounded-2xl border border-[#c9aa71]/20 p-6 overflow-hidden backdrop-blur-sm hover:border-[#c9aa71]/40 transition-all duration-500">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9aa71] to-transparent opacity-50" />

        {/* Glow effect */}
        <motion.div
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          className="absolute inset-0 bg-gradient-radial from-[#c9aa71]/20 to-transparent"
        />

        <div className="relative z-10">
          {/* Server Name & Region */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{server.flag}</span>
              <div>
                <h3 className="font-['Cinzel'] text-lg font-semibold text-[#e8e0d5]">
                  {server.name}
                </h3>
                <span className="text-xs text-[#7c6a5d] tracking-wider uppercase">
                  {server.ping}
                </span>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#93B045] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#93B045]" />
              </span>
              <span className="text-xs text-[#93B045] font-medium">Online</span>
            </div>
          </div>

          {/* IP Address */}
          <div className="flex items-center gap-3 bg-[#0e0603]/50 rounded-xl p-4 border border-[#c9aa71]/10">
            <div className="flex-1 font-['Exo_2'] text-lg font-medium text-[#c9aa71] tracking-wider">
              {server.ip}
            </div>

            <motion.button
              onClick={copyToClipboard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#c9aa71] to-[#f19d00] text-[#0e0603] font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c9aa71]/30"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#c9aa71]/10 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#c9aa71]/10 rounded-bl-2xl" />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    // Simulate player count with animation
    const target = 247;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setPlayerCount(target);
        clearInterval(timer);
      } else {
        setPlayerCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}

        {/* Radial glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#c9aa71]/5 via-transparent to-transparent" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 170, 113, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(201, 170, 113, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9aa71]/10 border border-[#c9aa71]/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#93B045] animate-pulse" />
            <span className="text-sm text-[#c9aa71] font-medium tracking-wider uppercase">
              {playerCount} Players Online
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Cinzel'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-[#e8e0d5]">Welcome to</span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-[#c9aa71] via-[#FFE363] to-[#f19d00] bg-clip-text text-transparent">
                HYTOWN
              </span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#c9aa71] via-[#FFE363] to-[#f19d00] bg-clip-text text-transparent blur-2xl opacity-50" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Exo_2'] text-lg md:text-xl text-[#a89b8c] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A Hytale server with{' '}
            <span className="text-[#c9aa71] font-medium">RPG</span> and{' '}
            <span className="text-[#c9aa71] font-medium">MMO</span> mods.
            <br />
            Created by professionals with experience from{' '}
            <span className="text-[#FFE363]">RuneScape</span> and{' '}
            <span className="text-[#93B045]">Minecraft</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#c9aa71] to-[#f19d00] font-['Cinzel'] font-semibold text-[#0e0603] text-lg tracking-wider uppercase overflow-hidden shadow-lg shadow-[#c9aa71]/30 hover:shadow-xl hover:shadow-[#c9aa71]/40 transition-shadow duration-300"
            >
              <span className="relative z-10">Explore Features</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFE363] to-[#c9aa71] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="https://discord.gg/hytown"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-[#1A1714] border border-[#c9aa71]/30 font-['Exo_2'] font-medium text-[#c9aa71] text-lg hover:border-[#c9aa71]/60 hover:bg-[#1A1714]/80 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Community
            </motion.a>
          </motion.div>

          {/* Server Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {servers.map((server, index) => (
              <ServerCard key={server.name} server={server} index={index} />
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-[#7c6a5d]"
            >
              <span className="text-xs tracking-wider uppercase">Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
