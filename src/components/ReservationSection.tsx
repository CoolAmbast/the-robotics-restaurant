import React from 'react'
import { Phone, MapPin, Users, ArrowRight, Cake, MessageSquare } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export const ReservationSection: React.FC = () => {
  return (
    <section
      id="reservation"
      aria-label="Reserve a table"
      className="py-20 sm:py-28 bg-[var(--primary)] text-[var(--text-on-surface-strong)] relative overflow-hidden"
    >
      {/* Decorative Radial Background Elements */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--tertiary) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reservation Info & Direct Contacts */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--tertiary)] mb-2.5 block">
              Reserve Your Table or Party
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-on-surface-strong)] leading-tight mb-6">
              Your table is <br />
              <span className="italic font-normal text-[var(--tertiary)]">already waiting</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-on-surface-strong)]/85 leading-relaxed mb-8 max-w-lg">
              Whether it’s a family weekend lunch, a birthday party with complimentary decoration, or an evening gathering — book with us directly via call or WhatsApp.
            </p>

            <div className="space-y-4 pt-2 border-t border-white/10">
              <a
                href="tel:+919296923861"
                className="flex items-center gap-3.5 text-sm sm:text-base text-[var(--text-on-surface-strong)]/90 hover:text-[var(--tertiary)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--text-on-accent)] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>
                  <strong className="text-[var(--text-on-surface-strong)] font-bold">+91 92969 23861</strong> — call or WhatsApp us
                </span>
              </a>

              <a
                href="https://wa.me/919296923861?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20table%20at%20The%20Robotics%20Restaurant%20Purnia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm sm:text-base text-[var(--text-on-surface-strong)]/90 hover:text-[var(--tertiary)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--text-on-accent)] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>
                  WhatsApp: <strong className="text-[var(--text-on-surface-strong)] font-bold">92969 23861</strong> (Instant Confirmation)
                </span>
              </a>

              <div className="flex items-center gap-3.5 text-sm sm:text-base text-[var(--text-on-surface-strong)]/80">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[var(--accent)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Jhanda Chowk Rd, opp. Gokul Sweets, Purnia, Bihar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Options Card */}
          <div className="lg:col-span-6">
            <Card className="rounded-3xl border-0 bg-[var(--bg)] p-6 sm:p-10 shadow-2xl text-[var(--text)]">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2">
                    Book your visit or party
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--fg)]">
                    Choose how you'd like to book — walk-ins and phone bookings both welcome!
                  </p>
                </div>

                <div className="space-y-3.5">
                  
                  {/* Option 1: Call Directly */}
                  <a
                    href="tel:+919296923861"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[var(--text)]">
                          Direct Call Booking
                        </div>
                        <div className="text-xs text-[var(--fg)]">
                          +91 92969 23861 — 12:00 PM to 11:00 PM
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Option 2: WhatsApp Booking */}
                  <a
                    href="https://wa.me/919296923861?text=Hi%2C%20I%20would%20like%20to%20book%20a%20table%20or%20party%20at%20Robotics%20Restaurant%20Purnia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[var(--text)]">
                          WhatsApp Message
                        </div>
                        <div className="text-xs text-[var(--fg)]">
                          Instant chat for menus &amp; dates
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Option 3: Birthday & Celebration Packages */}
                  <a
                    href="tel:+919296923861"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/30 group-hover:scale-105 transition-transform">
                        <Cake className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[var(--text)]">
                          Birthday / Anniversary Party
                        </div>
                        <div className="text-xs text-[var(--fg)]">
                          Complimentary party decoration packages
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </a>

                </div>

                {/* Large Group Note */}
                <div className="pt-2 text-center">
                  <p className="text-xs text-[var(--muted)] flex items-center justify-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[var(--accent)] inline" />
                    <span>Family gatherings &amp; party bookings? Contact us for dedicated party section.</span>
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
