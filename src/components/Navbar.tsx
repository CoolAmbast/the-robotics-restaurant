import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, CalendarCheck, Utensils, Sparkles, BookOpen, Star, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { RoboLogo } from './RoboLogo'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', href: '/', icon: Sparkles },
    { name: 'Menu', href: '/menu', icon: Utensils },
    { name: 'Chef', href: '/chef', icon: Utensils },
    { name: 'Our Story', href: '/story', icon: BookOpen },
    { name: 'Reviews', href: '/reviews', icon: Star },
    { name: 'Visit', href: '/visit', icon: MapPin },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface-strong)]/95 backdrop-blur-md shadow-xl border-b border-[var(--border)]/20 py-2.5'
          : 'bg-[var(--surface-strong)]/90 backdrop-blur-sm border-b border-[var(--border)]/15 py-3.5'
      }`}
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">

          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg p-1"
            aria-label="The Robotics Restaurant Purnia Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full transition-transform group-hover:scale-105 shadow-md">
              <RoboLogo className="w-full h-full filter drop-shadow" />
            </div>

            <div className="flex flex-col whitespace-nowrap min-w-0">
              <span className="font-serif-display text-lg sm:text-xl font-semibold tracking-tight text-white leading-tight group-hover:text-[var(--tertiary)] transition-colors">
                The Robotics <span className="italic font-normal text-[var(--tertiary)]">Restaurant</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.22em] uppercase text-white/60 leading-none mt-0.5">
                Purnia · Est. 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs uppercase font-medium tracking-[0.14em] relative py-1 transition-colors whitespace-nowrap ${
                    active
                      ? 'text-[var(--tertiary)] font-bold'
                      : 'text-white/80 hover:text-[var(--tertiary)]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[var(--tertiary)] transition-all duration-200 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}

            {/* CTA Button */}
            <Link
              to="/visit#reservation"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[var(--tertiary)] hover:bg-[#d4a060] text-[var(--surface-strong)] font-semibold text-xs tracking-[0.14em] uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-95 shrink-0"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (Theme switcher removed completely) */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/visit#reservation"
              className="px-3 py-1.5 rounded-sm bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold text-[11px] uppercase tracking-wider shrink-0"
            >
              Reserve
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--text-on-surface-strong)] hover:text-[var(--tertiary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--surface-strong)] border-b border-[var(--border)]/20 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-lg border-b border-[var(--border)]/15 transition-colors flex items-center justify-between ${
                    active
                      ? 'text-[var(--tertiary)] bg-white/5 font-semibold'
                      : 'text-[var(--text-on-surface-strong)] hover:text-[var(--tertiary)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[var(--tertiary)]" />
                    <span>{link.name}</span>
                  </div>
                  {link.name === 'Menu' && (
                    <span className="text-[10px] bg-[var(--accent)]/20 text-[var(--accent)] px-2 py-0.5 rounded-full font-bold">
                      115+ Items
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="pt-2">
            <Button
              asChild
              variant="default"
              className="w-full justify-center text-sm font-semibold uppercase tracking-wider py-3 bg-[var(--tertiary)] text-[var(--surface-strong)] hover:bg-[#d4a060]"
            >
              <Link
                to="/visit#reservation"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Table / Party</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
