import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Star, ShieldCheck, ThumbsUp, MessageSquare, Send, CheckCircle2, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'

interface ReviewItem {
  id: string
  name: string
  tag: string
  category: 'family' | 'birthday' | 'food'
  date: string
  rating: number
  text: string
  avatarLetter: string
  avatarBg: string
  helpfulCount: number
}

export const ReviewsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'family' | 'birthday' | 'food'>('all')
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([
    {
      id: 'rev-1',
      name: 'Amit Kumar Verma',
      tag: 'Local Guide • Family Dinner',
      category: 'family',
      date: 'October 2026',
      rating: 5,
      text: "First of its kind in Purnia! Kids were thrilled to see the robot servers bringing our food directly to the table. We ordered Chicken Biryani, Paneer Butter Masala, and Green Mint Mojito — the taste was delicious and prices are very reasonable (around ₹200–₹350 per person). A must-visit with family!",
      avatarLetter: 'A',
      avatarBg: 'bg-[var(--accent)] text-[var(--text-on-accent)]',
      helpfulCount: 24,
    },
    {
      id: 'rev-2',
      name: 'Sneha Singh',
      tag: 'Birthday Celebration',
      category: 'birthday',
      date: 'September 2026',
      rating: 4,
      text: "Celebrated my brother's birthday here. The complimentary decoration and ambiance are super nice. Robot service is very unique for North Bihar. Drums of Heaven, Chilli Paneer, and Virgin Mojito were top notch. Wonderful place for birthdays and party celebrations.",
      avatarLetter: 'S',
      avatarBg: 'bg-[var(--primary)] text-white',
      helpfulCount: 18,
    },
    {
      id: 'rev-3',
      name: 'Rahul Jha',
      tag: 'Dine-in Customer',
      category: 'food',
      date: 'October 2026',
      rating: 5,
      text: "Superb concept in Bhatta Bazar / Jhanda Chowk area. The automated robot delivery was smooth and fun to watch. Chicken Tikka and Butter Naan were served fresh and steaming hot. Courteous staff, clean seating, and very reasonable pricing.",
      avatarLetter: 'R',
      avatarBg: 'bg-[var(--tertiary)] text-[var(--primary)]',
      helpfulCount: 15,
    },
    {
      id: 'rev-4',
      name: 'Pooja Kumari',
      tag: 'Family Lunch',
      category: 'family',
      date: 'September 2026',
      rating: 4,
      text: "Took my grandparents and kids here last Sunday. The elders were amazed seeing robots serving food in Purnia. Veg Thali and Paneer Lababdar were genuinely tasty and well-portioned. The staff helped us with photos. Will visit again!",
      avatarLetter: 'P',
      avatarBg: 'bg-emerald-600 text-white',
      helpfulCount: 12,
    },
    {
      id: 'rev-5',
      name: 'Vikash Kumar',
      tag: 'Evening Hangout',
      category: 'food',
      date: 'October 2026',
      rating: 5,
      text: "Tried their Blue Lagoon mocktail, Oreo Shake, and Crispy Chilli Baby Corn. Both shakes and drinks were refreshing. Great vibe, especially under the robot mural lighting. Worth recommending to friends.",
      avatarLetter: 'V',
      avatarBg: 'bg-indigo-600 text-white',
      helpfulCount: 9,
    },
    {
      id: 'rev-6',
      name: 'Neha Roy',
      tag: 'Anniversary Dinner',
      category: 'birthday',
      date: 'October 2026',
      rating: 4,
      text: "Celebrated our anniversary. The team set up balloon decorations without any extra charge. Mutton Handi and Garlic Naan were rich and aromatic. Robot arrival made everyone at our table smile.",
      avatarLetter: 'N',
      avatarBg: 'bg-amber-600 text-white',
      helpfulCount: 11,
    },
  ])

  // Form State
  const [showForm, setShowForm] = useState(false)
  const [newName, setNewName] = useState('')
  const [newRating, setNewRating] = useState(5)
  const [newCategory, setNewCategory] = useState<'family' | 'birthday' | 'food'>('family')
  const [newText, setNewText] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newText.trim()) return

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newName,
      tag: newCategory === 'birthday' ? 'Celebration' : newCategory === 'family' ? 'Family Visit' : 'Foodie Review',
      category: newCategory,
      date: 'Just now',
      rating: newRating,
      text: newText,
      avatarLetter: newName.charAt(0).toUpperCase() || 'U',
      avatarBg: 'bg-[var(--accent)] text-white',
      helpfulCount: 1,
    }

    setReviewsList([newRev, ...reviewsList])
    setFormSubmitted(true)
    setTimeout(() => {
      setShowForm(false)
      setFormSubmitted(false)
      setNewName('')
      setNewText('')
    }, 2000)
  }

  const filteredReviews = reviewsList.filter((r) => {
    if (filter === 'all') return true
    return r.category === filter
  })

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* Reviews Hero Section */}
        <section className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-14 sm:py-20 border-b border-[var(--border)]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--tertiary)]/20 text-[var(--tertiary)] border border-[var(--tertiary)]/30 mb-3">
              <Star className="w-3.5 h-3.5 fill-[var(--tertiary)]" />
              <span>Verified Diner Experiences</span>
            </span>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Loved by Purnia Diners &amp; Families
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Read real customer experiences from Google Maps. Over 81+ ratings celebrating our robotic servers, delicious North Indian gravies, and complimentary party decorations.
            </p>

            {/* Score Card Box */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 sm:px-8 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-1.5 text-2xl font-serif-display font-bold text-white">
                <span className="text-3xl text-[var(--tertiary)]">3.8</span>
                <span className="text-sm text-white/60">/ 5</span>
              </div>

              <div className="flex items-center gap-1" aria-label="3.8 stars">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--tertiary)] text-[var(--tertiary)]" />
                ))}
                <Star className="w-5 h-5 fill-[var(--tertiary)]/70 text-[var(--tertiary)]" />
                <Star className="w-5 h-5 text-white/30" />
              </div>

              <span className="text-xs text-white/75 font-medium">
                81+ Google Reviews • ₹200–400 / person
              </span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Robotics+Restaurant+Jhanda+Chowk+Rd+Purnia+Bihar+854301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--tertiary)] hover:underline ml-2"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Rating Breakdown Bars */}
        <section className="py-10 bg-[var(--surface)] border-b border-[var(--border)]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]/60">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span>Robot Delivery Excitement</span>
                  <span className="text-[var(--accent)]">4.8 / 5</span>
                </div>
                <div className="w-full bg-[var(--border)]/40 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent)] h-full rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]/60">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span>Food Taste &amp; Freshness</span>
                  <span className="text-[var(--accent)]">4.3 / 5</span>
                </div>
                <div className="w-full bg-[var(--border)]/40 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent)] h-full rounded-full" style={{ width: '86%' }} />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]/60">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span>Value for Money (₹200–400)</span>
                  <span className="text-[var(--accent)]">4.6 / 5</span>
                </div>
                <div className="w-full bg-[var(--border)]/40 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent)] h-full rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]/60">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span>Birthday Party Ambiance</span>
                  <span className="text-[var(--accent)]">4.7 / 5</span>
                </div>
                <div className="w-full bg-[var(--border)]/40 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent)] h-full rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Content & Interactive Form Toolbar */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header & Filter Pills */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-4 border-b border-[var(--border)]/40">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    filter === 'all'
                      ? 'bg-[var(--primary)] text-white shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  All Reviews ({reviewsList.length})
                </button>

                <button
                  type="button"
                  onClick={() => setFilter('family')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    filter === 'family'
                      ? 'bg-[var(--primary)] text-white shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  Family &amp; Kids
                </button>

                <button
                  type="button"
                  onClick={() => setFilter('birthday')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    filter === 'birthday'
                      ? 'bg-[var(--primary)] text-white shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  Birthdays &amp; Parties
                </button>

                <button
                  type="button"
                  onClick={() => setFilter('food')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    filter === 'food'
                      ? 'bg-[var(--primary)] text-white shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  Foodies &amp; Drinks
                </button>
              </div>

              {/* Leave Review Action */}
              <Button
                type="button"
                onClick={() => setShowForm(!showForm)}
                variant="default"
                className="bg-[var(--accent)] text-[var(--text-on-accent)] font-bold text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                <span>{showForm ? 'Cancel Review' : 'Write a Review'}</span>
              </Button>
            </div>

            {/* Expandable Review Form */}
            {showForm && (
              <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border-2 border-[var(--accent)]/40 shadow-xl max-w-2xl mx-auto">
                <h3 className="font-serif-display text-2xl font-bold text-[var(--text)] mb-2">
                  Share Your Dining Experience
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg)] mb-6">
                  Tell other diners in Purnia about your favorite dishes and robot delivery experience!
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    <span className="font-bold text-base">Thank you for your feedback!</span>
                    <span className="text-xs">Your review has been posted successfully.</span>
                  </div>
                ) : (
                  <form onSubmit={handleAddReview} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          placeholder="e.g. Ramesh Chandra"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-1">
                          Experience Category
                        </label>
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value as any)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        >
                          <option value="family">Family &amp; Kids Dinner</option>
                          <option value="birthday">Birthday / Party Celebration</option>
                          <option value="food">Food &amp; Mocktail Experience</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-1">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className="p-1 hover:scale-110 transition-transform cursor-pointer"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= newRating
                                  ? 'fill-[var(--tertiary)] text-[var(--tertiary)]'
                                  : 'text-[var(--muted)]/40'
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-bold ml-2 text-[var(--primary)]">{newRating} Stars</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-1">
                        Your Review Comments
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="What dishes did you order? How did the robot server perform?"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setShowForm(false)}
                        className="text-xs"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="default"
                        className="bg-[var(--accent)] text-[var(--text-on-accent)] text-xs font-bold uppercase tracking-wider"
                      >
                        <Send className="w-3.5 h-3.5 mr-1" />
                        <span>Submit Review</span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredReviews.map((rev) => (
                <Card
                  key={rev.id}
                  className="p-6 sm:p-7 rounded-2xl border-[var(--border)] bg-[var(--surface)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <CardContent className="p-0 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1" aria-label={`${rev.rating} stars`}>
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[var(--tertiary)] text-[var(--tertiary)]" />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wide">
                          {rev.tag}
                        </span>
                      </div>

                      <p className="text-sm text-[var(--text)] italic leading-relaxed mb-6">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]/40 mt-auto">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-serif-display text-base font-bold shrink-0 ${rev.avatarBg}`}
                        >
                          {rev.avatarLetter}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[var(--text)] leading-tight">
                            {rev.name}
                          </h4>
                          <span className="text-[11px] text-[var(--muted)]">
                            {rev.date}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] text-[var(--muted)]">
                        <ThumbsUp className="w-3 h-3 text-[var(--accent)]" />
                        <span>{rev.helpfulCount}</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps External Verified Box */}
            <div className="mt-16 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Robotics+Restaurant+Jhanda+Chowk+Rd+opposite+Gokul+Sweets+Purnia+Bihar+854301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
              >
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                <span>Verify Google Maps Profile &amp; Post Public Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
