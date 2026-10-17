import React from 'react'
import { MapPin, Clock, PhoneCall, ExternalLink, Navigation, UtensilsCrossed, Package, Truck } from 'lucide-react'
import { Button } from './ui/button'

export const VisitSection: React.FC = () => {
  const mapQueryUrl =
    'https://maps.google.com/maps?q=Robotics+Restaurant,+Jhanda+Chowk+Rd,+Mehboob+Khan+Tola,+Purnia,+Bihar+854301&t=&z=16&ie=UTF8&iwloc=&output=embed'
  const mapsExternalUrl =
    'https://www.google.com/maps/search/?api=1&query=Robotics+Restaurant+Jhanda+Chowk+Rd+opposite+Gokul+Sweets+Purnia+Bihar+854301'

  return (
    <section
      id="visit"
      aria-label="Find us"
      className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visit Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--accent)] mb-2.5 block">
                Find Us in Purnia
              </span>

              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
                Come in. The robots are waiting for you.
              </h2>

              <p className="text-sm sm:text-base text-[var(--fg)] mt-3">
                Located right on Jhanda Chowk Road (opposite Gokul Sweets) in Bhatta Bazar / Mehboob Khan Tola, Purnia.
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[var(--accent)]" />
                Dine-in
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
                <Package className="w-3.5 h-3.5 text-[var(--accent)]" />
                Takeaway
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
                <Truck className="w-3.5 h-3.5 text-[var(--accent)]" />
                Delivery
              </span>
            </div>

            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)]/70 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">
                    Location &amp; Address
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
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)]/70 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[var(--text)] leading-snug">
                    Open Daily: 12:00 PM – 11:00 PM
                  </p>
                  <p className="text-xs text-[var(--fg)] mt-1">
                    Lunch, Evening Snacks &amp; Dinner service
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)]/70 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">
                    Phone &amp; WhatsApp
                  </h3>
                  <a
                    href="tel:+919296923861"
                    className="text-base sm:text-lg font-bold text-[var(--primary)] hover:text-[var(--accent)] leading-snug transition-colors"
                  >
                    +91 92969 23861
                  </a>
                  <p className="text-xs text-[var(--fg)] mt-1">
                    Call for reservations, takeaway orders, or party decoration booking
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Google Maps Embed (Replaces static image as requested) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)] aspect-[4/3] sm:aspect-square max-h-[500px] w-full bg-slate-100 flex flex-col">
              
              {/* Google Maps iFrame */}
              <iframe
                title="Google Maps Location of Robotics Restaurant Purnia"
                src={mapQueryUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full flex-1"
              />

              {/* Overlay Bar to open in Google Maps App/Browser */}
              <div className="p-3.5 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] border-t border-[var(--border)]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs truncate">
                  <Navigation className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span className="truncate font-medium">Jhanda Chowk Rd, opp. Gokul Sweets, Purnia</span>
                </div>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="bg-[var(--accent)] text-[var(--text-on-accent)] text-xs font-bold shrink-0"
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
  )
}
