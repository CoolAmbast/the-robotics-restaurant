import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, Phone, UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { menuCategories, type MenuItem } from '../data/menuData'
import { RoboLogo } from '../components/RoboLogo'

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

  // Flatten all items for unified search or section filtering
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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      
      {/* Sticky Full Menu Header */}
      <header className="sticky top-0 z-40 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] border-b border-[var(--border)]/20 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-on-surface-strong)] hover:text-[var(--accent)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <RoboLogo className="w-8 h-8 shrink-0" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-serif-display text-base font-bold leading-tight">
                Robotics Restaurant Purnia
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[var(--tertiary)]">
                Complete Food &amp; Beverage Menu
              </span>
            </div>
          </div>

          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-[var(--accent)] text-[var(--text-on-accent)] font-bold text-xs"
          >
            <a href="tel:+919296923861" className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>Call to Order</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Banner for Menu */}
      <div className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-12 sm:py-16 border-b border-[var(--border)]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="gold" className="mb-3 text-[11px] font-bold tracking-widest uppercase">
            Pure Indulgence • ₹200–₹400 / Person
          </Badge>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-on-surface-strong)] mb-4">
            Our Complete Menu
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-on-surface-strong)]/80 max-w-2xl mx-auto leading-relaxed">
            From North Indian rich curries and slow-cooked Champaran mutton to spicy Indo-Chinese, tandoori grills, and over 15+ mocktail flavors.
          </p>

          {/* Search Bar & Filters */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[var(--muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search any dish, curry, mocktail, or biryani..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Filter Chips */}
            <div className="flex items-center gap-1.5 justify-center bg-[var(--surface)] p-1 rounded-xl border border-[var(--border)]">
              <button
                type="button"
                onClick={() => setVegFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  vegFilter === 'all'
                    ? 'bg-[var(--primary)] text-[var(--text-on-surface-strong)]'
                    : 'text-[var(--fg)] hover:text-[var(--text)]'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setVegFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1 transition-colors ${
                  vegFilter === 'veg'
                    ? 'bg-green-700 text-white'
                    : 'text-green-700 hover:bg-green-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-600" />
                Veg
              </button>
              <button
                type="button"
                onClick={() => setVegFilter('non-veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1 transition-colors ${
                  vegFilter === 'non-veg'
                    ? 'bg-red-700 text-white'
                    : 'text-red-700 hover:bg-red-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Pills with shadcn Scroll Buttons */}
      <div className="sticky top-[57px] z-30 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]/40 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center gap-2">
            
            {/* Scroll Left Button */}
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => handleNavScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll categories left"
              className={`rounded-full shrink-0 h-9 w-9 border-[var(--border)] shadow-sm transition-all duration-200 ${
                canScrollLeft
                  ? 'opacity-100 hover:bg-[var(--accent)] hover:text-white cursor-pointer'
                  : 'opacity-30 cursor-not-allowed pointer-events-none'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Scroll Container with native scrollbar hidden */}
            <div
              ref={scrollNavRef}
              onScroll={checkScroll}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 flex-1"
            >
              <button
                type="button"
                onClick={() => setSelectedSection('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                  selectedSection === 'all'
                    ? 'bg-[var(--accent)] text-[var(--text-on-accent)] border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--border)] hover:border-[var(--accent)]'
                }`}
              >
                All Dishes ({totalFilteredCount})
              </button>
              {menuCategories.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                    selectedSection === sec.id
                      ? 'bg-[var(--accent)] text-[var(--text-on-accent)] border-[var(--accent)] shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => handleNavScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll categories right"
              className={`rounded-full shrink-0 h-9 w-9 border-[var(--border)] shadow-sm transition-all duration-200 ${
                canScrollRight
                  ? 'opacity-100 hover:bg-[var(--accent)] hover:text-white cursor-pointer'
                  : 'opacity-30 cursor-not-allowed pointer-events-none'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

          </div>
        </div>
      </div>

      {/* Menu Categories & Items List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <UtensilsCrossed className="w-12 h-12 text-[var(--muted)] mx-auto opacity-40" />
            <h3 className="font-serif-display text-2xl font-bold text-[var(--text)]">
              No matching dishes found
            </h3>
            <p className="text-sm text-[var(--fg)]">
              Try adjusting your search terms or clearing the veg/non-veg filter.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('')
                setSelectedSection('all')
                setVegFilter('all')
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          filteredCategories.map((section) => (
            <section key={section.id} id={section.id} className="space-y-6 scroll-mt-28">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b-2 border-[var(--border)]">
                <div>
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text)]">
                    {section.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--fg)] mt-1">
                    {section.subtitle}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs self-start sm:self-auto font-semibold">
                  {section.items.length} {section.items.length === 1 ? 'item' : 'items'}
                </Badge>
              </div>

              {/* Items Grid (Strictly NO IMAGES) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:border-[var(--accent)] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-start gap-2.5">
                          {/* Veg/Non-Veg Dot */}
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

                          <h3 className="font-serif-display text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                            {item.name}
                          </h3>
                        </div>

                        <div className="font-serif-display text-xl font-bold text-[var(--primary)] shrink-0">
                          ₹{item.price}
                        </div>
                      </div>

                      {item.description && (
                        <p className="text-xs text-[var(--fg)] leading-relaxed pl-6.5 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-[var(--border)]/30 text-[11px] text-[var(--muted)] pl-6.5">
                      <span>{item.category}</span>
                      {item.popular && (
                        <Badge variant="gold" className="text-[10px] py-0 px-2 font-bold">
                          Chef Pick
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      {/* Floating Order / Reservation Footer */}
      <footer className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-8 border-t border-[var(--border)]/20 mt-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h4 className="font-serif-display text-2xl font-bold">
            Craving these dishes?
          </h4>
          <p className="text-sm text-[var(--text-on-surface-strong)]/80">
            Visit us at Jhanda Chowk Rd, opposite Gokul Sweets, Mehboob Khan Tola, Purnia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button asChild variant="default" className="bg-[var(--accent)] text-[var(--text-on-accent)] font-bold">
              <a href="tel:+919296923861" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call +91 92969 23861</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link to="/#reservation">Book a Table Online</Link>
            </Button>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default FullMenuPage
