'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Vote', href: '#vote' },
  ],
  community: [
    { name: 'Discord', href: 'https://discord.gg/hytown', external: true },
    { name: 'Twitter', href: '#', external: true },
    { name: 'YouTube', href: '#', external: true },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Rules', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9aa71]/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9aa71]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#c9aa71] to-[#f19d00] flex items-center justify-center shadow-lg shadow-[#c9aa71]/20">
                <span className="font-['Cinzel'] text-xl font-bold text-[#0e0603]">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Cinzel'] text-xl font-bold tracking-wider text-[#c9aa71]">
                  HYTOWN
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#7c6a5d] uppercase">
                  Hytale Server
                </span>
              </div>
            </Link>

            <p className="font-['Exo_2'] text-[#7c6a5d] mb-6 leading-relaxed">
              A Hytale server with RPG and MMO mods, created by professionals with
              experience from RuneScape and Minecraft.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://discord.gg/hytown"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] hover:bg-[#5865F2]/30 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2]/30 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-[#FF0000]/20 border border-[#FF0000]/30 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000]/30 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-['Cinzel'] text-lg font-semibold text-[#c9aa71] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-['Exo_2'] text-[#a89b8c] hover:text-[#c9aa71] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-['Cinzel'] text-lg font-semibold text-[#c9aa71] mb-6">
              Community
            </h4>
            <ul className="space-y-4">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="font-['Exo_2'] text-[#a89b8c] hover:text-[#c9aa71] transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.name}
                    {link.external && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-['Cinzel'] text-lg font-semibold text-[#c9aa71] mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-['Exo_2'] text-[#a89b8c] hover:text-[#c9aa71] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Server IPs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 py-8 border-y border-[#c9aa71]/10">
          <div className="flex items-center gap-3">
            <span className="text-[#7c6a5d]">🌍</span>
            <span className="font-['Exo_2'] text-[#a89b8c]">Global:</span>
            <span className="font-['Exo_2'] font-medium text-[#c9aa71]">play.hytown.org</span>
          </div>
          <div className="w-px h-6 bg-[#c9aa71]/20 hidden sm:block" />
          <div className="flex items-center gap-3">
            <span className="text-[#7c6a5d]">🇪🇺</span>
            <span className="font-['Exo_2'] text-[#a89b8c]">Europe:</span>
            <span className="font-['Exo_2'] font-medium text-[#c9aa71]">eu.hytown.org</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-['Exo_2'] text-sm text-[#7c6a5d]">
            © {new Date().getFullYear()} Hytown. All rights reserved.
          </p>

          <p className="font-['Exo_2'] text-sm text-[#7c6a5d]">
            Not affiliated with Hypixel Studios or Hytale.
          </p>
        </div>
      </div>
    </footer>
  );
}
