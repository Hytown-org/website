'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    title: 'Towns',
    description: 'Build and manage your own towns. Create communities, establish trade routes, and defend against invaders.',
    color: '#c9aa71',
    stats: ['100+ Plots', 'Custom Buildings', 'Town Wars'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Skills',
    description: 'Master over 20 unique skills. From combat to crafting, forge your own path to greatness.',
    color: '#FFE363',
    stats: ['20+ Skills', 'Skill Trees', 'Mastery Ranks'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: 'Dungeons',
    description: 'Explore procedurally generated dungeons. Face challenging bosses and claim legendary loot.',
    color: '#00BDF5',
    stats: ['50+ Dungeons', 'Boss Fights', 'Rare Loot'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    title: 'Events',
    description: 'Participate in weekly events and seasonal celebrations. Win exclusive rewards and titles.',
    color: '#93B045',
    stats: ['Weekly Events', 'Seasonal Content', 'Exclusive Rewards'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'PvP',
    description: 'Battle other players in arenas, open world, and guild wars. Prove your worth in combat.',
    color: '#ea4335',
    stats: ['Arena Battles', 'Guild Wars', 'Leaderboards'],
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `${feature.color}15` }}
      />

      <div className="relative h-full bg-gradient-to-br from-[#1A1714] to-[#14110F] rounded-2xl border border-[#c9aa71]/10 group-hover:border-[#c9aa71]/30 transition-all duration-500 overflow-hidden">
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
        />

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative"
            style={{
              background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
              border: `1px solid ${feature.color}30`,
            }}
          >
            <div style={{ color: feature.color }}>{feature.icon}</div>
            {/* Icon glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: `0 0 30px ${feature.color}30` }}
            />
          </motion.div>

          {/* Title */}
          <h3 className="font-['Cinzel'] text-xl md:text-2xl font-semibold text-[#e8e0d5] mb-3 group-hover:text-[#c9aa71] transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="font-['Exo_2'] text-[#a89b8c] leading-relaxed mb-6">
            {feature.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-2">
            {feature.stats.map((stat, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#0e0603]/50 border border-[#c9aa71]/10 text-[#7c6a5d] group-hover:border-[#c9aa71]/20 group-hover:text-[#a89b8c] transition-all duration-300"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Corner decorations */}
        <div
          className="absolute top-4 right-4 w-8 h-8 border-t border-r rounded-tr-lg opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ borderColor: feature.color }}
        />
        <div
          className="absolute bottom-4 left-4 w-8 h-8 border-b border-l rounded-bl-lg opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ borderColor: feature.color }}
        />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-24 md:py-32" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9aa71]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BDF5]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9aa71]/10 border border-[#c9aa71]/20 mb-6"
          >
            <span className="text-sm text-[#c9aa71] font-medium tracking-wider uppercase">
              Game Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Cinzel'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e0d5] mb-6"
          >
            Endless{' '}
            <span className="bg-gradient-to-r from-[#c9aa71] via-[#FFE363] to-[#f19d00] bg-clip-text text-transparent">
              Adventures
            </span>
            <br />
            Await
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Exo_2'] text-lg text-[#a89b8c] max-w-2xl mx-auto"
          >
            Discover a world of possibilities with our custom-built gameplay systems.
            Every feature designed to enhance your adventure.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#c9aa71] to-transparent"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-['Exo_2'] text-[#7c6a5d] mb-6">
            Ready to experience these features for yourself?
          </p>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#c9aa71]/20 to-[#f19d00]/20 border border-[#c9aa71]/30 font-['Cinzel'] font-semibold text-[#c9aa71] hover:border-[#c9aa71]/50 transition-all duration-300"
          >
            Start Playing Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
