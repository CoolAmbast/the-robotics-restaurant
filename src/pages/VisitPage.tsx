import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import {
  MapPin,
  Clock,
  PhoneCall,
  ExternalLink,
  Navigation,
  UtensilsCrossed,
  Package,
  Truck,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '../components/ui/button'

// Assets
import diningImg from '../assets/heroImage.jpeg'
import musicImg from '../assets/musicPlayer.jpeg'
import partyImg from '../assets/image.png'

export const VisitPage: React.FC = () => {
  const mapQueryUrl =
    'https://maps.google.com/maps?q=Robotics+Restaurant,+Jhanda+Chowk+Rd,+Mehboob+Khan+Tola,+Purnia,+Bihar+854301&t=&z=16&ie=UTF8&iwloc=&output=embed'
  const mapsExternalUrl =
    'https://www.google.com/maps/search/?api=1&query=Robotics+Restaurant+Jhanda+Chowk+Rd+opposite+Gokul+Sweets+Purnia+Bihar+854301'

  // Form State
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('19:30')
  const [guests, setGuests] = useState('4')
  const [occasion, setOccasion] = useState('Family Dinner')
  const [booked, setBooked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBooked(true)
    const textMsg = encodeURIComponent(
      `Hi, I want to reserve a table at The Robotics Restaurant Purnia.\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`
    )
    window.open(`https://wa.me/919296923861?text=${textMsg}`, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* Visit Hero Section */}
        <section className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-14 sm:py-20 border-b border-[var(--border)]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--tertiary)]/20 text-[var(--tertiary)] border border-[var(--tertiary)]/30 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location &amp; Table Bookings</span>
            </span>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Visit The Robotics Restaurant
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Centrally located on Jhanda Chowk Road (opposite Gokul Sweets) in Bhatta Bazar, Purnia. Come experience robotic dining, authentic handi curries, and warm hospitality.
            </p>
          </div>
        </section>

        {/* Location & Map Interactive Block */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Quick Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--accent)] mb-2 block">
                    Find Us Easily
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
                    Come in. The robots are waiting for you.
                  </h2>
                  <p className="text-sm text-[var(--fg)] mt-3">
                    Located in the heart of Purnia’s prominent shopping hub, accessible from all parts of town.
                  </p>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[var(--accent)]" />
                    Dine-in (Full AC)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]">
                    <Package className="w-3.5 h-3.5 text-[var(--accent)]" />
                    Takeaway
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]">
                    <Truck className="w-3.5 h-3.5 text-[var(--accent)]" />
                    Home Delivery
                  </span>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:shadow-sm transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">
                        Address &amp; Landmark
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[var(--text)] leading-snug">
                        Jhanda Chowk Rd (Janta Chowk / Bhatta Bazar), <br />
                        opposite Gokul Sweets, Mehboob Khan Tola, <br />
                        Purnia, Bihar 854301
                      </p>
                      <p className="text-xs text-[var(--fg)] mt-1.5 font-medium">
                        Plus code: <strong className="text-[var(--text)]">QFCH+78 Purnia, Bihar</strong>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:shadow-sm transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">
                        Operating Hours
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[var(--text)] leading-snug">
                        Open Daily: 12:00 PM – 11:00 PM
                      </p>
                      <p className="text-xs text-[var(--fg)] mt-1">
                        Lunch, Evening Mocktails, Snacks &amp; Family Dinner
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/70 hover:shadow-sm transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">
                        Direct Phone &amp; WhatsApp
                      </h3>
                      <a
                        href="tel:+919296923861"
                        className="text-base sm:text-lg font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-colors block"
                      >
                        +91 92969 23861
                      </a>
                      <p className="text-xs text-[var(--fg)] mt-1">
                        Call for instant table booking, takeaway orders, or celebration planning
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)] aspect-[4/3] sm:aspect-square max-h-[500px] w-full bg-slate-100 flex flex-col">
                  <iframe
                    title="Google Maps Location of The Robotics Restaurant Purnia"
                    src={mapQueryUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full flex-1"
                  />

                  {/* Navigation Bar */}
                  <div className="p-3.5 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] border-t border-[var(--border)]/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs truncate">
                      <Navigation className="w-4 h-4 text-[var(--tertiary)] shrink-0" />
                      <span className="truncate font-medium text-white/90">
                        Jhanda Chowk Rd, opp. Gokul Sweets, Purnia
                      </span>
                    </div>

                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="bg-[var(--tertiary)] text-[var(--surface-strong)] hover:bg-[#d4a060] text-xs font-bold shrink-0"
                    >
                      <a
                        href={mapsExternalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <span>Directions</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Ambiance & Facilities Showcase (Using musicPlayer.jpeg & heroImage.jpeg) */}
        <section className="py-14 sm:py-20 bg-[var(--surface)] border-y border-[var(--border)]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)] mb-2 block">
                The In-Restaurant Atmosphere
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text)]">
                Dine Comfortably with Family &amp; Friends
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={diningImg}
                    alt="Spacious air conditioned dining hall with booth seating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif-display text-lg font-bold text-[var(--text)] mb-1">
                    Full AC Dining Hall
                  </h3>
                  <p className="text-xs text-[var(--fg)] leading-relaxed">
                    Spacious tables, comfortable wooden chairs, and custom robot chef murals.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={musicImg}
                    alt="Vintage gramophone music corner and Buddha decor"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif-display text-lg font-bold text-[var(--text)] mb-1">
                    Vintage Gramophone Lounge
                  </h3>
                  <p className="text-xs text-[var(--fg)] leading-relaxed">
                    Pleasant background music and meditative corner decor for relaxed meals.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] shadow-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={partyImg}
                    alt="Birthday balloon setup and celebration area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif-display text-lg font-bold text-[var(--text)] mb-1">
                    Free Celebration Decoration
                  </h3>
                  <p className="text-xs text-[var(--fg)] leading-relaxed">
                    Complimentary balloons and special cake tables for birthdays and anniversaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Reservation Form Section (id="reservation") */}
        <section id="reservation" className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] p-6 sm:p-12 shadow-2xl border border-[var(--border)]/20">
              
              <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--tertiary)] flex items-center justify-center gap-1.5 mb-2">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Instant Booking</span>
                </span>
                <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mb-2">
                  Reserve Your Table Online
                </h2>
                <p className="text-xs sm:text-sm text-white/75">
                  Fill in your details below to send an instant reservation request directly to our restaurant manager on WhatsApp.
                </p>
              </div>

              {booked ? (
                <div className="p-8 rounded-2xl bg-white/10 border border-[var(--tertiary)]/50 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[var(--tertiary)] mx-auto" />
                  <h3 className="font-serif-display text-2xl font-bold text-white">
                    Reservation Details Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
                    We’ve opened WhatsApp with your booking details. You can also call us directly at <strong>+91 92969 23861</strong> to confirm immediately.
                  </p>
                  <Button
                    onClick={() => setBooked(false)}
                    variant="outline"
                    className="mt-4 text-xs font-semibold text-white border-white/30"
                  >
                    Make Another Booking
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                        Number of Guests *
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-strong)] text-white border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)]"
                      >
                        <option value="1-2">1 to 2 Guests</option>
                        <option value="3-4">3 to 4 Guests</option>
                        <option value="5-8">5 to 8 Guests (Family Table)</option>
                        <option value="9-15">9 to 15 Guests (Party Group)</option>
                        <option value="15+">15+ Guests (Full Section)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                      Occasion / Special Request
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-strong)] text-white border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--tertiary)]"
                    >
                      <option value="Casual Dine-in">Casual Lunch or Dinner</option>
                      <option value="Birthday Celebration (Free Decor Needed)">Birthday Celebration (Free Balloon Decor)</option>
                      <option value="Anniversary Celebration">Anniversary Celebration</option>
                      <option value="Family Get-Together">Family Get-Together</option>
                      <option value="Friends Hangout">Friends Hangout &amp; Drinks</option>
                    </select>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/60 text-center sm:text-left">
                      Walk-ins are also welcome daily 12:00 PM – 11:00 PM.
                    </p>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto bg-[var(--tertiary)] text-[var(--surface-strong)] font-bold text-xs uppercase tracking-wider hover:bg-[#d4a060] transition-colors"
                    >
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      <span>Confirm via WhatsApp</span>
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
