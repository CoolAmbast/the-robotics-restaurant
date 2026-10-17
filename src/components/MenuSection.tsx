import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Utensils, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { menuCategories } from '../data/menuData'

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(menuCategories[0].id)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollOffset = direction === 'left' ? -280 : 280
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section
      id="menu"
      aria-label="Menu highlights"
      className="py-16 sm:py-24 bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[var(--accent)]" />
              <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--accent)]">
                Multi-Cuisine Delicacies
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
              A kitchen with <span className="italic font-normal text-[var(--fg)]">soul,</span> <br />
              served with robotic precision
            </h2>
            <p className="text-sm sm:text-base text-[var(--fg)] mt-3 max-w-xl">
              Authentic Indian curries, tandoori grills, wok-fried Chinese delicacies, and handcrafted mocktails — served at ₹200–400 per person.
            </p>
          </div>

          <Button
            asChild
            variant="default"
            size="lg"
            className="self-start md:self-end bg-[var(--accent)] text-[var(--text-on-accent)] font-bold tracking-wide shadow-lg shrink-0"
          >
            <Link to="/menu" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Section Category Tabs with shadcn Scroll Buttons */}
        <div className="relative flex items-center gap-2 mb-8">
          {/* Scroll Left Button */}
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll categories left"
            className={`rounded-full shrink-0 h-10 w-10 border-[var(--border)] shadow-sm transition-all duration-200 ${
              canScrollLeft
                ? 'opacity-100 hover:bg-[var(--accent)] hover:text-white cursor-pointer'
                : 'opacity-30 cursor-not-allowed pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Scrollable container with native scrollbar hidden */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 flex-1"
          >
            {menuCategories.map((cat) => {
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
                    isActive
                      ? 'bg-[var(--primary)] text-[var(--text-on-surface-strong)] border-[var(--primary)] shadow-md'
                      : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--border)]/60 hover:border-[var(--accent)] hover:text-[var(--text)]'
                  }`}
                >
                  {cat.title}
                </button>
              )
            })}
          </div>

          {/* Scroll Right Button */}
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll categories right"
            className={`rounded-full shrink-0 h-10 w-10 border-[var(--border)] shadow-sm transition-all duration-200 ${
              canScrollRight
                ? 'opacity-100 hover:bg-[var(--accent)] hover:text-white cursor-pointer'
                : 'opacity-30 cursor-not-allowed pointer-events-none'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Active Section Preview - Exactly 5 items shown */}
        {menuCategories
          .filter((cat) => cat.id === activeTab)
          .map((cat) => (
            <div key={cat.id} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]/40">
                <div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text)]">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--fg)] mt-0.5">
                    {cat.subtitle} • Showing 5 preview specialties
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex text-xs font-semibold">
                  5 Highlights
                </Badge>
              </div>

              {/* Text-focused, elegant menu card list (NO IMAGES) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.slice(0, 5).map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:border-[var(--accent)]/60 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-start gap-2.5">
                        {/* Veg / Non-Veg Indicator Dot */}
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
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                              {item.name}
                            </h4>
                            {item.popular && (
                              <Badge
                                variant="gold"
                                className="text-[10px] py-0 px-1.5 font-bold tracking-tight"
                              >
                                {idx === 0 ? 'Chef Favorite' : 'Popular'}
                              </Badge>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs sm:text-sm text-[var(--fg)] leading-relaxed mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="font-serif-display text-xl sm:text-2xl font-bold text-[var(--primary)] whitespace-nowrap shrink-0">
                        ₹{item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Menu CTA Card Banner */}
              <div className="mt-8 p-6 rounded-2xl bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[var(--border)]/30">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[var(--accent)] font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complete 100+ Dish Multi-Cuisine Menu</span>
                  </div>
                  <h4 className="font-serif-display text-lg sm:text-xl font-semibold">
                    Want to see all Indian curries, Chinese starters, mocktails & shakes?
                  </h4>
                </div>

                <Button
                  asChild
                  variant="default"
                  className="bg-[var(--accent)] text-[var(--text-on-accent)] font-bold shrink-0"
                >
                  <Link to="/menu" className="flex items-center gap-2">
                    <span>Explore Full Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}

      </div>
    </section>
  )
}
