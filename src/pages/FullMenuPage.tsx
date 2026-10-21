import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Phone, ChevronLeft, ChevronRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { menuCategories, type MenuItem } from '../data/menuData'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const FullMenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSection, setSelectedSection] = useState<string>('all')
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all')

  const scrollNavRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollNavRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollNavRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const handleResize = () => checkScroll()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavScroll = (direction: 'left' | 'right') => {
    if (scrollNavRef.current) {
      const scrollOffset = direction === 'left' ? -260 : 260
      scrollNavRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  // Filtered categories and dishes
  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((section) => {
        const matchingItems = section.items.filter((item: MenuItem) => {
          const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())

          const matchesVeg =
            vegFilter === 'all'
              ? true
              : vegFilter === 'veg'
              ? item.isVeg === true
              : item.isVeg === false

          return matchesSearch && matchesVeg
        })

        return {
          ...section,
          items: matchingItems,
        }
      })
      .filter((section) => {
        if (selectedSection !== 'all' && section.id !== selectedSection) {
          return false
        }
        return section.items.length > 0
      })
  }, [searchTerm, selectedSection, vegFilter])

  const totalFilteredCount = filteredCategories.reduce(
    (acc, sec) => acc + sec.items.length,
    0
  )

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* Menu Hero Header */}
        <section className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-12 sm:py-16 border-b border-[var(--border)]/15 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--tertiary)]/20 text-[var(--tertiary)] border border-[var(--tertiary)]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Multi-Cuisine Catalog • 115+ Items</span>
            </span>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Explore Our Complete Menu
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              From savory Robo Starter bites and royal North Indian curries to Dum Biryanis, Breads Circuit, and handcrafted Mojitos — served with robotic excitement in Purnia.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919296923861"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold text-xs uppercase tracking-wider hover:bg-[#d4a060] transition-colors shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Order: +91 92969 23861</span>
              </a>
              <Link
                to="/visit#reservation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:border-[var(--tertiary)] hover:text-[var(--tertiary)] bg-white/5 transition-colors"
              >
                <span>Reserve a Table</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar Toolbar */}
        <section className="sticky top-14 sm:top-16 z-30 bg-[var(--surface-strong)]/95 backdrop-blur-md border-b border-[var(--border)]/20 shadow-md py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search any dish, curry, roti, or drink..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-14 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)] text-xs sm:text-sm"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Veg / Non-Veg Toggle Filter */}
              <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-lg border border-white/15 self-start md:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setVegFilter('all')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    vegFilter === 'all'
                      ? 'bg-[var(--tertiary)] text-[var(--surface-strong)] shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  All Items
                </button>
                <button
                  type="button"
                  onClick={() => setVegFilter('veg')}
                  className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    vegFilter === 'veg'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-emerald-300 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Veg Only</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVegFilter('non-veg')}
                  className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    vegFilter === 'non-veg'
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-rose-300 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>Non-Veg Only</span>
                </button>
              </div>

            </div>

            {/* Horizontal Category Nav Scroll */}
            <div className="relative flex items-center gap-2 mt-3 pt-2 border-t border-white/10">
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => handleNavScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll categories left"
                className={`rounded-full shrink-0 h-8 w-8 bg-white/10 text-white border-0 hover:bg-white/20 transition-all ${
                  canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-20 cursor-not-allowed pointer-events-none'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div
                ref={scrollNavRef}
                onScroll={checkScroll}
                className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 flex-1"
              >
                <button
                  type="button"
                  onClick={() => setSelectedSection('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    selectedSection === 'all'
                      ? 'bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold'
                      : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  All Categories ({menuCategories.length})
                </button>

                {menuCategories.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSelectedSection(sec.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                      selectedSection === sec.id
                        ? 'bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold'
                        : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    {sec.title} ({sec.items.length})
                  </button>
                ))}
              </div>

              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => handleNavScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll categories right"
                className={`rounded-full shrink-0 h-8 w-8 bg-white/10 text-white border-0 hover:bg-white/20 transition-all ${
                  canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-20 cursor-not-allowed pointer-events-none'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

          </div>
        </section>

        {/* Menu Listings */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Status indicator */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--border)]/30 text-xs text-[var(--fg)]">
              <span>
                Showing <strong className="text-[var(--text)]">{totalFilteredCount}</strong> items
                {selectedSection !== 'all' && ` in ${menuCategories.find((c) => c.id === selectedSection)?.title}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </span>
              {(searchTerm || selectedSection !== 'all' || vegFilter !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedSection('all')
                    setVegFilter('all')
                  }}
                  className="text-[var(--accent)] font-semibold hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {/* If empty state */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-16 bg-[var(--surface)] rounded-2xl border border-[var(--border)]/60 max-w-lg mx-auto p-8">
                <Filter className="w-10 h-10 text-[var(--muted)] mx-auto mb-3" />
                <h3 className="font-serif-display text-2xl font-bold text-[var(--text)] mb-2">
                  No matching dishes found
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg)] mb-6">
                  Try adjusting your search terms or clearing the vegetarian filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedSection('all')
                    setVegFilter('all')
                  }}
                  variant="default"
                  className="bg-[var(--accent)] text-[var(--text-on-accent)]"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Categorized Dishes Grid */}
            <div className="space-y-12 sm:space-y-16">
              {filteredCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-36">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-[var(--border)]/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-[var(--accent)]" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent)]">
                          Category
                        </span>
                      </div>
                      <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text)] mt-1">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[var(--fg)] mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>

                    <Badge variant="outline" className="self-start sm:self-auto text-xs font-semibold">
                      {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                    </Badge>
                  </div>

                  {/* Dishes Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:border-[var(--accent)] hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-start gap-2.5 min-w-0">
                              {/* Veg / Non-Veg Indicator */}
                              <span
                                className={`w-4 h-4 rounded-sm border p-0.5 flex items-center justify-center shrink-0 mt-1 ${
                                  item.isVeg
                                    ? 'border-green-600 bg-green-50'
                                    : 'border-red-600 bg-red-50'
                                }`}
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                              >
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    item.isVeg ? 'bg-green-600' : 'bg-red-600'
                                  }`}
                                />
                              </span>

                              <div>
                                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[var(--text)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                                  {item.name}
                                </h3>
                                
                                {item.portion && (
                                  <span className="inline-block text-[11px] font-semibold text-[var(--muted)] mt-0.5">
                                    {item.portion}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Price */}
                            <div className="font-serif-display text-xl sm:text-2xl font-bold text-[var(--primary)] whitespace-nowrap shrink-0">
                              ₹{item.price}/-
                            </div>
                          </div>

                          {/* Description & Thali Breakdown */}
                          {item.description && (
                            <p className="text-xs sm:text-sm text-[var(--fg)] leading-relaxed mt-2">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Card Footer with Badges */}
                        <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-[var(--border)]/30 text-xs">
                          <span className="text-[11px] text-[var(--muted)] uppercase tracking-wider">
                            {category.title}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {item.popular && (
                              <Badge
                                variant="gold"
                                className="text-[10px] py-0 px-2 font-bold tracking-tight"
                              >
                                Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] border border-[var(--border)]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--tertiary)] flex items-center justify-center md:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                  <span>Dine-In • Takeaway • Party Bookings</span>
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  Ready to experience robotic dining?
                </h3>
                <p className="text-xs sm:text-sm text-white/75 max-w-lg">
                  Visit us at Jhanda Chowk Road (opposite Gokul Sweets), Purnia or call ahead to book your table.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="tel:+919296923861"
                  className="px-6 py-3 rounded-sm bg-[var(--tertiary)] hover:bg-[#d4a060] text-[var(--surface-strong)] font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Call +91 92969 23861
                </a>
                <Link
                  to="/visit#reservation"
                  className="px-6 py-3 rounded-sm border border-white/30 text-white hover:border-[var(--tertiary)] hover:text-[var(--tertiary)] font-bold text-xs uppercase tracking-wider bg-white/5 transition-colors"
                >
                  Book Table Online
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
