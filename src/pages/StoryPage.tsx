import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Bot, Sparkles, Cake, MapPin, Heart, ArrowRight } from 'lucide-react'

// Assets
import diningInteriorImg from '../assets/heroImage.jpeg'
import robotImg1 from '../assets/robot1.jpeg'
import robotImg2 from '../assets/robot2.jpeg'
import partyImg from '../assets/image.png'
import musicDecorImg from '../assets/musicPlayer.jpeg'

export const StoryPage: React.FC = () => {
  const milestones = [
    {
      year: 'September 2026',
      title: 'Purnia’s First Robotic Restaurant Opens',
      desc: 'Launched on Jhanda Chowk Road opposite Gokul Sweets, bringing futuristic dining to North Bihar.',
    },
    {
      year: 'Dual Robot Fleet',
      title: 'Autonomous Table Delivery',
      desc: 'Trained dual robot servers deployed for contactless, joyful table deliveries.',
    },
    {
      year: '115+ Dishes',
      title: 'Multi-Cuisine Expansion',
      desc: 'Authentic Champaran handi, tandoori grills, wok-fried Chinese, and signature mocktails.',
    },
    {
      year: 'Community Favorite',
      title: 'Birthday & Party Destination',
      desc: 'Over 200+ celebratory family gatherings with complimentary balloon and party decor packages.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* Story Hero with Background Texture & Interior Photo */}
        <section className="relative bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-16 sm:py-24 border-b border-[var(--border)]/20 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img
              src={diningInteriorImg}
              alt="Dining hall background at The Robotics Restaurant Purnia"
              className="w-full h-full object-cover object-center filter blur-xs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-strong)] via-[var(--surface-strong)]/85 to-[var(--surface-strong)]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--tertiary)]/20 text-[var(--tertiary)] border border-[var(--tertiary)]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded September 2026 • Purnia, Bihar</span>
            </span>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Our Story &amp; Technological Journey
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              How a dream to bring international robotics dining to Purnia became Bihar’s most exciting culinary destination for families, youth, and celebration lovers.
            </p>
          </div>
        </section>

        {/* The Origin Narrative & Mission */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)] mb-2 block">
                    The Genesis
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
                    Bringing the Future of Dining Home to Bihar
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[var(--fg)] leading-relaxed">
                  <p>
                    Until recently, experiencing automated robotic food delivery required traveling to metro cities like Bengaluru or Delhi. In September 2026, the founders of The Robotics Restaurant set out to change that by launching North Bihar’s very first robotics-themed dining lounge right in Bhatta Bazar, Purnia.
                  </p>
                  <p>
                    Nestled opposite Gokul Sweets on Jhanda Chowk Road, our venue combines state-of-the-art autonomous robotic delivery with the warmth, generosity, and rich spice palettes of authentic Indian and Indo-Chinese hospitality.
                  </p>
                  <p>
                    We built this space as a family sanctuary: fully air-conditioned, beautifully decorated with futuristic robotic murals, and priced honestly at ₹200–400 per person so that every family, student, and traveler can share in the magic.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-6 border-t border-[var(--border)]/40 text-xs sm:text-sm text-[var(--text)] font-semibold">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--accent)]" />
                    <span>Jhanda Chowk, Purnia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-[var(--accent)]" />
                    <span>Autonomous Fleet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[var(--accent)]" />
                    <span>100% Family Friendly</span>
                  </div>
                </div>
              </div>

              {/* Main Photo: Real Robot Waiters (robot1.jpeg) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--border)] aspect-[4/3] bg-black/40 group">
                  <img
                    src={robotImg1}
                    alt="Robot waiters in aprons standing in front of illuminated Robotics Restaurant sign in Purnia"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--tertiary)] block">
                      Welcome Crew
                    </span>
                    <p className="text-sm font-semibold mt-0.5">
                      Robotics Restaurant Purnia's autonomous serving robots
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Real Assets Photo Gallery */}
        <section className="py-16 sm:py-24 bg-[var(--surface)] border-y border-[var(--border)]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)] mb-2 block">
                Visual Experience
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
                Inside The Robotics Restaurant
              </h2>
              <p className="text-xs sm:text-sm text-[var(--fg)] mt-3">
                Real photos from our dining rooms, party setups, and decorative corners in Purnia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Dining Hall (heroImage.jpeg) */}
              <div className="group rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-md flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img
                    src={diningInteriorImg}
                    alt="Spacious dining hall with futuristic robot wall mural and modern seating"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-base font-bold text-[var(--text)] mb-1">
                      Modern Dining Hall
                    </h3>
                    <p className="text-xs text-[var(--fg)] leading-relaxed">
                      Sleek tables, robot culinary wall murals, and cozy family booths.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider mt-3 block">
                    Full AC Seating
                  </span>
                </div>
              </div>

              {/* Card 2: Robot Waiters Counter (robot2.jpeg) */}
              <div className="group rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-md flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img
                    src={robotImg2}
                    alt="Dual robot servers lined up at the dispatch counter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-base font-bold text-[var(--text)] mb-1">
                      Autonomous Service
                    </h3>
                    <p className="text-xs text-[var(--fg)] leading-relaxed">
                      Smart sensor navigation gliding food safely straight to table sides.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider mt-3 block">
                    Contactless Delivery
                  </span>
                </div>
              </div>

              {/* Card 3: Celebration & Party Hall (image.png) */}
              <div className="group rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-md flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img
                    src={partyImg}
                    alt="Celebration party balloon arch and glowing wall logo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-base font-bold text-[var(--text)] mb-1">
                      Birthday &amp; Party Space
                    </h3>
                    <p className="text-xs text-[var(--fg)] leading-relaxed">
                      Complimentary balloon decorations, custom music, and celebration cakes.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider mt-3 block">
                    Free Decoration
                  </span>
                </div>
              </div>

              {/* Card 4: Vintage Aesthetic Corner (musicPlayer.jpeg) */}
              <div className="group rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-md flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img
                    src={musicDecorImg}
                    alt="Vintage gramophone music player and Buddha statue decor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-base font-bold text-[var(--text)] mb-1">
                      Aesthetic Gramophone Lounge
                    </h3>
                    <p className="text-xs text-[var(--fg)] leading-relaxed">
                      Vintage gramophone player paired with calm Buddha decor for relaxing vibes.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider mt-3 block">
                    Warm Atmosphere
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Technological Innovation Spotlight */}
        <section className="py-16 sm:py-24 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--tertiary)] mb-2 block">
                How It Works
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                The Technology Behind the Trays
              </h2>
              <p className="text-sm text-white/75 mt-3">
                Precision engineering that guarantees your steaming hot dishes arrive reliably and joyfully.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-[var(--tertiary)]/20 text-[var(--tertiary)] flex items-center justify-center font-bold text-xl mb-5 font-serif-display">
                  01
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white mb-2">
                  Optical &amp; Lidar Pathing
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Sub-floor and optical ceiling sensors guide the robot precisely along pre-mapped dining corridors directly to each table number.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-[var(--tertiary)]/20 text-[var(--tertiary)] flex items-center justify-center font-bold text-xl mb-5 font-serif-display">
                  02
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white mb-2">
                  360° Obstacle Avoidance
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Infrared collision sensors immediately slow and pause the robot if a child or guest steps into the pathway, ensuring 100% safety.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-[var(--tertiary)]/20 text-[var(--tertiary)] flex items-center justify-center font-bold text-xl mb-5 font-serif-display">
                  03
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white mb-2">
                  Interactive Audio &amp; Voice
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  The robots greet guests, announce dish arrival, and say cheerful farewells after you pick up your plates.
                </p>
              </div>
            </div>

            {/* Birthday Package Featurette */}
            <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[var(--surface-strong)] via-black/80 to-[var(--surface-strong)] border-2 border-[var(--tertiary)]/40 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[var(--tertiary)] tracking-wider">
                  <Cake className="w-4 h-4" />
                  <span>Celebration Headquarters</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  Planning a Birthday or Anniversary Party?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                  We provide free celebration balloon decor, specialized cake tables, and custom music playlists for your family gatherings.
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap gap-3">
                <a
                  href="tel:+919296923861"
                  className="px-6 py-3 rounded-sm bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold text-xs uppercase tracking-wider hover:bg-[#d4a060] transition-colors"
                >
                  Book Party: +91 92969 23861
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)] mb-2 block">
                Journey
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text)]">
                Key Milestones
              </h2>
            </div>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:border-[var(--accent)] transition-all"
                >
                  <div className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white font-serif-display text-base font-bold shrink-0 text-center sm:w-44">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[var(--text)] mb-1">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--fg)] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[var(--accent)] text-[var(--text-on-accent)] font-bold text-xs uppercase tracking-wider hover:bg-[#7ea54f] transition-colors shadow"
              >
                <span>Plan Your Visit Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
