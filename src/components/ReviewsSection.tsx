import { Star, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from './ui/card'

interface Review {
  name: string
  tag: string
  date: string
  rating: number
  text: string
  avatarLetter: string
  avatarBg: string
}

export const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      name: 'Amit Kumar Verma',
      tag: 'Local Guide • Family Dinner',
      date: 'October 2026',
      rating: 5,
      text: "First of its kind in Purnia! Kids were thrilled to see the robot servers bringing our food directly to the table. We ordered Chicken Biryani, Paneer Butter Masala, and Green Mint Mojito — the taste was delicious and prices are very reasonable (around ₹200–₹350 per person). A must-visit with family!",
      avatarLetter: 'A',
      avatarBg: 'bg-[var(--accent)] text-[var(--text-on-accent)]',
    },
    {
      name: 'Sneha Singh',
      tag: 'Birthday Celebration',
      date: 'September 2026',
      rating: 4,
      text: "Celebrated my brother's birthday here. The complimentary decoration and ambiance are super nice. Robot service is very unique for North Bihar. Drums of Heaven, Chilli Paneer, and Virgin Mojito were top notch. Wonderful place for birthdays and party celebrations.",
      avatarLetter: 'S',
      avatarBg: 'bg-[var(--primary)] text-white',
    },
    {
      name: 'Rahul Jha',
      tag: 'Dine-in Customer',
      date: 'October 2026',
      rating: 5,
      text: "Superb concept in Bhatta Bazar / Jhanda Chowk area. The automated robot delivery was smooth and fun to watch. Chicken Tikka and Butter Naan were served fresh and steaming hot. Courteous staff, clean seating, and very reasonable pricing.",
      avatarLetter: 'R',
      avatarBg: 'bg-[var(--tertiary)] text-[var(--primary)]',
    },
  ]

  return (
    <section
      id="reviews"
      aria-label="Google reviews"
      className="py-16 sm:py-24 bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Score Summary from Google Maps */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--accent)] mb-2.5 block">
            Google Maps Reviews
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-4">
            Loved by Purnia Diners &amp; Families
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <div className="flex items-center gap-1" aria-label="3.8 out of 5 stars">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[var(--tertiary)] text-[var(--tertiary)]"
                />
              ))}
              <Star className="w-5 h-5 fill-[var(--tertiary)]/70 text-[var(--tertiary)]" />
              <Star className="w-5 h-5 text-[var(--muted)]/40" />
            </div>
            <span className="font-serif-display text-3xl font-bold text-[var(--primary)] leading-none">
              3.8
            </span>
            <span className="text-sm text-[var(--muted)] font-medium">
              / 5 &nbsp;(81+ Google Reviews) • ₹200–400 / person
            </span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Robotics+Restaurant+Jhanda+Chowk+Rd+Purnia+Bihar+854301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] bg-[var(--surface)] px-3.5 py-1.5 rounded-full border border-[var(--border)] transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            <span>Verified Google Maps Listing (Purnia, Bihar)</span>
          </a>
        </div>

        {/* Top 3 Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border-[var(--border)] bg-[var(--surface)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <CardContent className="p-0 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1" aria-label={`${rev.rating} stars`}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[var(--tertiary)] text-[var(--tertiary)]"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wide">
                      {rev.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text)] italic leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]/40 mt-auto">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-serif-display text-lg font-bold shrink-0 ${rev.avatarBg}`}
                  >
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text)]">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-[var(--muted)]">
                      {rev.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
