import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, CalendarCheck, Palette, Utensils } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '../theme'
import { RoboLogo } from './RoboLogo'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const { currentTheme, themeName, setThemeName, availableThemes } = useTheme()
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

  // If on full menu page, links should point back to home with hash
  const isHomePage = location.pathname === '/'
  const getNavHref = (hash: string) => (isHomePage ? hash : `/${hash}`)

  const navLinks = [
    { name: 'Menu', href: getNavHref('#menu'), isRoute: false },
    { name: 'Our Story', href: getNavHref('#story'), isRoute: false },
    { name: 'Chef', href: getNavHref('#chef'), isRoute: false },
    { name: 'Reviews', href: getNavHref('#reviews'), isRoute: false },
    { name: 'Visit', href: getNavHref('#visit'), isRoute: false },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[var(--surface-strong)]/95 backdrop-blur-md shadow-lg border-b border-[var(--border)]/20 py-2.5'
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs uppercase font-semibold tracking-[0.14em] text-[var(--tertiary)] hover:text-white relative py-1 transition-colors group whitespace-nowrap flex items-center gap-1.5"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase font-medium tracking-[0.14em] text-white/80 hover:text-[var(--tertiary)] relative py-1 transition-colors group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--tertiary)] group-hover:w-full transition-all duration-200" />
                </a>
              )
            )}

            {/* Theme switcher dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
                title="Change theme"
              >
                <Palette className="w-3.5 h-3.5 text-[var(--tertiary)]" />
                <span className="capitalize hidden xl:inline">{currentTheme.displayName.split(' ')[0]}</span>
              </button>

              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[var(--surface-strong)] border border-[var(--border)]/30 shadow-2xl py-2 z-50">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-[var(--muted)]">
                    Theme Palette
                  </div>
                  {Object.values(availableThemes).map((t) => (
                    <button
                      key={t.name}
                      onClick={() => {
                        setThemeName(t.name)
                        setShowThemeMenu(false)
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-white/10 cursor-pointer ${themeName === t.name
                          ? 'text-[var(--accent)] font-bold'
                          : 'text-[var(--text-on-surface-strong)]'
                        }`}
                    >
                      <span>{t.displayName}</span>
                      <span
                        className="w-3 h-3 rounded-full border border-white/40"
                        style={{ backgroundColor: t.colors.accent }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button styled like reference */}
            <a
              href={getNavHref('#reservation')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[var(--tertiary)] hover:bg-[#d4a060] text-[var(--surface-strong)] font-semibold text-xs tracking-[0.14em] uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-95 shrink-0"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => {
                const keys = Object.keys(availableThemes)
                const nextIdx = (keys.indexOf(themeName) + 1) % keys.length
                setThemeName(keys[nextIdx])
              }}
              className="p-2 text-[var(--tertiary)] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cycle theme"
              title="Switch theme"
            >
              <Palette className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--text-on-surface-strong)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg transition-colors cursor-pointer"
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
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-[var(--accent)] py-2 border-b border-[var(--border)]/15 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs bg-[var(--accent)]/20 px-2 py-0.5 rounded-full">
                    100+ items
                  </span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[var(--text-on-surface-strong)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)]/15 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          <div className="pt-2">
            <Button
              asChild
              variant="default"
              className="w-full justify-center text-sm font-semibold uppercase tracking-wider py-3 bg-[var(--accent)] text-[var(--text-on-accent)]"
            >
              <a
                href={getNavHref('#reservation')}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Table / Party</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
