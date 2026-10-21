import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, MapPin, Clock } from 'lucide-react'
import { RoboLogo } from './RoboLogo'

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      aria-label="Site footer"
      className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] pt-16 pb-12 border-t border-[var(--border)]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-10 h-1 bg-[var(--tertiary)] rounded-full mb-4" aria-hidden="true" />
            
            <div className="flex items-center gap-3">
              <RoboLogo className="w-10 h-10 shrink-0" />
              <span className="font-serif-display text-2xl font-bold tracking-tight text-[var(--text-on-surface-strong)]">
                The Robotics Restaurant Purnia
              </span>
            </div>

            <div className="text-xs uppercase font-bold tracking-[0.16em] text-[var(--tertiary)]">
              रोबोटिक्स रेस्टोरेंट पूर्णिया • Founded September 2026
            </div>

            <p className="text-sm text-[var(--text-on-surface-strong)]/70 max-w-sm leading-relaxed">
              Purnia's premier futuristic dining experience featuring automated robot food service, multi-cuisine delicacies, and birthday celebrations.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/theroboticsrestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-[var(--text-on-surface-strong)]/80 hover:text-[var(--tertiary)] hover:border-[var(--tertiary)] hover:bg-[var(--tertiary)]/10 transition-all duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/theroboticsrestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-[var(--text-on-surface-strong)]/80 hover:text-[var(--tertiary)] hover:border-[var(--tertiary)] hover:bg-[var(--tertiary)]/10 transition-all duration-200"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-on-surface-strong)] mb-5">
              Pages &amp; Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[var(--text-on-surface-strong)]/75">
              <li>
                <Link to="/" className="hover:text-[var(--tertiary)] transition-colors">
                  Landing Page
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[var(--tertiary)] transition-colors font-semibold text-[var(--tertiary)]">
                  Full 115+ Dish Menu →
                </Link>
              </li>
              <li>
                <Link to="/chef" className="hover:text-[var(--tertiary)] transition-colors">
                  Meet the Chef &amp; Kitchen
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[var(--tertiary)] transition-colors">
                  Our Story &amp; Tech
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[var(--tertiary)] transition-colors">
                  Reviews &amp; Ratings (3.8★)
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[var(--tertiary)] transition-colors">
                  Visit Us &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Contact Column */}
          <div className="lg:col-span-4 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-on-surface-strong)] mb-5">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3.5 text-sm text-[var(--text-on-surface-strong)]/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>
                  Jhanda Chowk Rd, opp. Gokul Sweets, Mehboob Khan Tola, Purnia, Bihar 854301
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>Open Daily: 12:00 PM – 11:00 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a
                  href="tel:+919296923861"
                  className="hover:text-[var(--accent)] transition-colors font-semibold text-[var(--text-on-surface-strong)]"
                >
                  +91 92969 23861
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/visit#reservation"
                  className="inline-block px-4 py-2 bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#d4a060] transition-colors"
                >
                  Reserve Table / Party
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-on-surface-strong)]/50">
          <p>© 2026 The Robotics Restaurant Purnia. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[var(--tertiary)] fill-[var(--tertiary)]" />
            <span>&amp; robotic precision in Purnia, Bihar.</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
