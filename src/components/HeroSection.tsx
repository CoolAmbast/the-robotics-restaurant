import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Bot } from 'lucide-react'
import heroImg from '../assets/hero.png'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-Bleed Background Image with Left-Weighted Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="The Robotics Restaurant Purnia dining interior"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Left-weighted dark gradient to match reference aesthetic: rich dark on left, revealing warm interior on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-strong)] via-transparent to-black/40" />
      </div>

      {/* Hero Content: Clean, Left-Aligned Luxury Editorial Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 pb-20 flex flex-col justify-between min-h-screen">
        
        {/* Middle Content */}
        <div className="my-auto max-w-2xl py-12">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[var(--tertiary)]">
              TECH-THEMED DINING · EST. 2026
            </span>
          </div>

          {/* Headline inspired by clean serif typography */}
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.04] mb-7 drop-shadow-md">
            Dine in <br />
            <span className="italic">Future's</span>{' '}
            <span className="text-[var(--tertiary)] italic">light.</span>
          </h1>

          {/* Refined 2-line atmospheric subtitle */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light max-w-xl mb-10 drop-shadow">
            Purnia’s first futuristic dining experience, where automated robot servers deliver honest Indian curries, tandoori grills, and Chinese specialties directly to your table.
          </p>

          {/* Action Buttons styled like reference */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
            {/* Primary Reserve Button */}
            <a
              href="#reservation"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm bg-[var(--tertiary)] hover:bg-[#d4a060] text-[var(--surface-strong)] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Reserve a Table
            </a>

            {/* Secondary Explore Menu Button */}
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm border border-white/35 hover:border-[var(--tertiary)] hover:text-[var(--tertiary)] text-white font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-200 bg-black/20 hover:bg-black/40 backdrop-blur-sm group active:scale-95"
            >
              <span>Explore the Menu</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Clean Subtle Badges / Details Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-white/70 font-light">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-[var(--tertiary)] text-[var(--tertiary)]" />
              <span className="font-medium text-white">3.8 / 5</span>
              <span>(81+ Google Reviews)</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div>
              <span>Price: </span>
              <strong className="text-white font-medium">₹200–400</strong> / person
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Interactive Robot Servers</span>
            </div>
          </div>

        </div>

        {/* Bottom Left Minimalist Scroll Indicator */}
        <div className="pt-6 flex items-center gap-3 text-white/50 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium select-none">
          {/* Minimalist mouse icon */}
          <div className="w-4 h-7 rounded-full border border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-[var(--tertiary)] animate-bounce" />
          </div>
          <span>Scroll</span>
        </div>

      </div>
    </section>
  )
}
