'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    game: 'RuneScape',
    icon: '⚔️',
    description: 'Years of RSPS development experience',
    color: '#FFE363',
  },
  {
    game: 'Minecraft',
    icon: '⛏️',
    description: 'Large-scale server management',
    color: '#93B045',
  },
  {
    game: 'Hytale',
    icon: '🏰',
    description: 'Ready for the next generation',
    color: '#c9aa71',
  },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '1M+', label: 'Players Served' },
  { value: '24/7', label: 'Uptime' },
  { value: '100%', label: 'Dedicated' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(201, 170, 113, 0.5) 50px,
              rgba(201, 170, 113, 0.5) 51px
            )`,
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#c9aa71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#FFE363]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9aa71]/10 border border-[#c9aa71]/20 mb-6"
            >
              <span className="text-sm text-[#c9aa71] font-medium tracking-wider uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Cinzel'] text-4xl md:text-5xl font-bold text-[#e8e0d5] mb-6"
            >
              Created by{' '}
              <span className="bg-gradient-to-r from-[#c9aa71] to-[#FFE363] bg-clip-text text-transparent">
                Professionals
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Exo_2'] text-lg text-[#a89b8c] leading-relaxed mb-8"
            >
              Hytown is built by a team of passionate developers who have spent years
              mastering the art of game server development. Our experience spans across
              multiple gaming communities, allowing us to bring the best practices and
              most engaging features to our Hytale server.
            </motion.p>

            {/* Experience cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.game}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-[#1A1714]/50 border border-[#c9aa71]/10 hover:border-[#c9aa71]/30 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ background: `${exp.color}15` }}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h4
                      className="font-['Cinzel'] font-semibold text-lg"
                      style={{ color: exp.color }}
                    >
                      {exp.game}
                    </h4>
                    <p className="font-['Exo_2'] text-sm text-[#7c6a5d]">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative">
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-[#1A1714] to-[#0e0603] rounded-2xl border border-[#c9aa71]/20 p-8 md:p-12 overflow-hidden">
                {/* Gold accent lines */}
                <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-[#c9aa71] to-transparent" />
                <div className="absolute top-0 left-0 w-[2px] h-32 bg-gradient-to-b from-[#c9aa71] to-transparent" />
                <div className="absolute bottom-0 right-0 w-32 h-[2px] bg-gradient-to-l from-[#c9aa71] to-transparent" />
                <div className="absolute bottom-0 right-0 w-[2px] h-32 bg-gradient-to-t from-[#c9aa71] to-transparent" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-['Cinzel'] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#c9aa71] to-[#FFE363] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="font-['Exo_2'] text-sm text-[#7c6a5d] uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#c9aa71]/30 to-transparent" />

                {/* Mission statement */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <p className="font-['Cinzel'] text-lg text-[#a89b8c] italic">
                    &ldquo;Our mission is to create the most immersive and engaging
                    Hytale experience possible.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-[#c9aa71]" />
                    <span className="font-['Exo_2'] text-sm text-[#c9aa71] uppercase tracking-wider">
                      The Hytown Team
                    </span>
                    <span className="w-8 h-px bg-[#c9aa71]" />
                  </div>
                </motion.div>

                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c9aa71]/5 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring' }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#c9aa71] to-[#f19d00] flex flex-col items-center justify-center shadow-lg shadow-[#c9aa71]/30 rotate-12"
              >
                <span className="font-['Cinzel'] font-bold text-[#0e0603] text-lg">Est.</span>
                <span className="font-['Cinzel'] font-bold text-[#0e0603] text-xl">2024</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
