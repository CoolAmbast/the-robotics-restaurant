import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { MenuSection } from '../components/MenuSection'
import { StorySection } from '../components/StorySection'
import { ChefSection } from '../components/ChefSection'
import { ReviewsSection } from '../components/ReviewsSection'
import { VisitSection } from '../components/VisitSection'
import { ReservationSection } from '../components/ReservationSection'
import { Footer } from '../components/Footer'
import { Bot, Sparkles, UtensilsCrossed, ArrowRight } from 'lucide-react'

// Assets
import robotImg1 from '../assets/robot1.jpeg'
import robotImg2 from '../assets/robot2.jpeg'
import interiorImg from '../assets/heroImage.jpeg'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Robotic Dining Spotlight Showcase */}
        <section className="py-16 sm:py-24 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] relative overflow-hidden border-b border-[var(--border)]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--tertiary)]/20 text-[var(--tertiary)] border border-[var(--tertiary)]/30 mb-3">
                <Bot className="w-3.5 h-3.5" />
                <span>The Future of Hospitality in Bihar</span>
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                Meet Purnia’s Friendly <br />
                <span className="italic font-normal text-[var(--tertiary)]">Robotic Waiter Crew</span>
              </h2>
              <p className="text-sm sm:text-base text-white/75 mt-4 leading-relaxed">
                Watch your freshly prepared dishes travel autonomously through our dining hall on sleek robotic trays. An unforgettable delight for children, family celebrations, and tech lovers.
              </p>
            </div>

            {/* Robot Image Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              {/* Photo 1: Frontal Robot Waiters */}
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)]/20 aspect-[4/3] bg-black/40">
                <img
                  src={robotImg1}
                  alt="Real robotic waiters at The Robotics Restaurant Purnia greeting diners"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--tertiary)] mb-1 block">
                    Automated Service
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white leading-snug">
                    Trained for Smooth, Contactless Delivery
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    Robots glide across custom guide paths directly stopping beside your table.
                  </p>
                </div>
              </div>

              {/* Photo 2: Angled Robot Servers with Wall Mural */}
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)]/20 aspect-[4/3] bg-black/40">
                <img
                  src={robotImg2}
                  alt="Autonomous robot servers ready with trays at The Robotics Restaurant"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--tertiary)] mb-1 block">
                    Interactive Joy
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white leading-snug">
                    Kids &amp; Family Favorite Attraction
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    Delightful voice interactions and cheerful serving that brings smiles to every table.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Pillars Callout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--tertiary)]/20 text-[var(--tertiary)] flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-lg font-bold text-white mb-2">
                  Robotic Precision
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Dual robot waiters carry steaming dishes directly from kitchen prep to table.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--tertiary)]/20 text-[var(--tertiary)] flex items-center justify-center mb-4">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-lg font-bold text-white mb-2">
                  Human Culinary Soul
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Authentic North Indian curries, Champaran handi, and wok-tossed starters handcrafted by master chefs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--tertiary)]/20 text-[var(--tertiary)] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-lg font-bold text-white mb-2">
                  Celebration Friendly
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Complimentary birthday and anniversary balloon decoration packages with music.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Menu Highlights Section */}
        <MenuSection />

        {/* 4. Dining Ambiance Banner */}
        <section className="py-14 bg-[var(--surface)] border-y border-[var(--border)]/40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Warm Ambiance &amp; Seating
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text)] leading-tight">
                  Spacious modern seating designed for families &amp; groups
                </h3>
                <p className="text-sm text-[var(--fg)] leading-relaxed">
                  With wall murals of robot culinary artists, comfortable dining booths, soothing indoor greenery, and ambient lighting, our restaurant offers Purnia a world-class dining haven.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/story"
                    className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[var(--muted)]">•</span>
                  <Link
                    to="/visit"
                    className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>View Location &amp; Hours</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]/70 aspect-[16/9]">
                  <img
                    src={interiorImg}
                    alt="Interior dining hall of The Robotics Restaurant Purnia"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-medium border border-white/20">
                    Jhanda Chowk Rd, Purnia · Fully Air Conditioned
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Story Preview Section */}
        <StorySection />

        {/* 6. Chef Preview Section */}
        <ChefSection />

        {/* 7. Reviews Section */}
        <ReviewsSection />

        {/* 8. Visit & Map Section */}
        <VisitSection />

        {/* 9. Reservation Section */}
        <ReservationSection />
      </main>

      <Footer />
    </div>
  )
}
