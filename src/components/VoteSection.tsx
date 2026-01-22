'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const voteSites = [
  {
    name: 'TopG',
    url: '#',
    icon: '🏆',
    bonus: '+10 Coins',
  },
  {
    name: 'GTOP100',
    url: '#',
    icon: '⭐',
    bonus: '+10 Coins',
  },
  {
    name: 'TopServers',
    url: '#',
    icon: '🎮',
    bonus: '+10 Coins',
  },
];

const discordStats = {
  members: '2,547',
  online: '342',
};

export default function VoteSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="vote" className="relative py-24 md:py-32" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0603]/50 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vote Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#93B045]/10 border border-[#93B045]/20 mb-6">
              <span className="text-sm text-[#93B045] font-medium tracking-wider uppercase">
                Vote & Earn
              </span>
            </div>

            <h2 className="font-['Cinzel'] text-4xl md:text-5xl font-bold text-[#e8e0d5] mb-4">
              Support{' '}
              <span className="text-[#93B045]">Hytown</span>
            </h2>

            <p className="font-['Exo_2'] text-lg text-[#a89b8c] mb-8">
              Vote for us on server lists and earn exclusive rewards! Every vote helps
              us grow and rewards you with in-game currency.
            </p>

            {/* Vote Cards */}
            <div className="space-y-4">
              {voteSites.map((site, index) => (
                <motion.a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-[#1A1714]/50 border border-[#93B045]/20 hover:border-[#93B045]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#93B045]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {site.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-['Cinzel'] font-semibold text-lg text-[#e8e0d5] group-hover:text-[#93B045] transition-colors">
                      {site.name}
                    </h4>
                    <p className="font-['Exo_2'] text-sm text-[#7c6a5d]">
                      Click to vote
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#93B045]/20 text-[#93B045] text-sm font-medium">
                      {site.bonus}
                    </span>
                    <svg
                      className="w-5 h-5 text-[#7c6a5d] group-hover:text-[#93B045] group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Total Bonus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#93B045]/10 to-transparent border border-[#93B045]/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Exo_2'] text-[#a89b8c]">Vote on all sites for:</span>
                <span className="font-['Cinzel'] font-bold text-xl text-[#93B045]">+30 Coins Daily!</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Discord Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 mb-6">
              <span className="text-sm text-[#5865F2] font-medium tracking-wider uppercase">
                Join Community
              </span>
            </div>

            <h2 className="font-['Cinzel'] text-4xl md:text-5xl font-bold text-[#e8e0d5] mb-4">
              Join Our{' '}
              <span className="text-[#5865F2]">Discord</span>
            </h2>

            <p className="font-['Exo_2'] text-lg text-[#a89b8c] mb-8">
              Connect with fellow players, get support, stay updated on news, and
              participate in exclusive Discord events!
            </p>

            {/* Discord Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-gradient-to-br from-[#5865F2]/20 to-[#1A1714] rounded-2xl border border-[#5865F2]/30 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#5865F2]/20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9aa71] to-[#f19d00] flex items-center justify-center shadow-lg">
                    <span className="font-['Cinzel'] text-2xl font-bold text-[#0e0603]">H</span>
                  </div>
                  <div>
                    <h3 className="font-['Cinzel'] text-xl font-semibold text-[#e8e0d5]">
                      Hytown Official
                    </h3>
                    <p className="font-['Exo_2'] text-sm text-[#7c6a5d]">
                      discord.gg/hytown
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-6 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#a89b8c]" />
                    <span className="font-['Exo_2'] text-sm text-[#7c6a5d]">Members</span>
                  </div>
                  <span className="font-['Cinzel'] text-3xl font-bold text-[#e8e0d5]">
                    {discordStats.members}
                  </span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#93B045]" />
                    <span className="font-['Exo_2'] text-sm text-[#7c6a5d]">Online</span>
                  </div>
                  <span className="font-['Cinzel'] text-3xl font-bold text-[#93B045]">
                    {discordStats.online}
                  </span>
                </div>
              </div>

              {/* Join Button */}
              <div className="p-6 pt-0">
                <motion.a
                  href="https://discord.gg/hytown"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-['Exo_2'] font-semibold text-lg transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord Server
                </motion.a>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#5865F2]/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

            {/* Community highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {[
                { icon: '💬', label: 'Active Chat' },
                { icon: '📢', label: 'Announcements' },
                { icon: '🎁', label: 'Giveaways' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#1A1714]/50 border border-[#c9aa71]/10"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-['Exo_2'] text-xs text-[#7c6a5d] text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
