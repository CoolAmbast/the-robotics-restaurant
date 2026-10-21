import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Quote, Utensils, Award, Sparkles, HeartHandshake, Flame, Bot, CheckCircle2, ArrowRight } from 'lucide-react'
import { Badge } from '../components/ui/badge'

// Assets
import chefPhoto from '../assets/c69dac6b-069f-44de-8f76-b6b0bf05e9cd.jpg'
import robotImg from '../assets/robot2.jpeg'

export const ChefPage: React.FC = () => {
  const credentials = [
    { label: 'Master of North Indian Curries', icon: Utensils },
    { label: 'Clay Tandoor Specialist', icon: Flame },
    { label: 'Champaran Handi & Bhunna Expert', icon: Award },
    { label: 'Indo-Chinese Wok Master', icon: Sparkles },
    { label: '100% Fresh Daily Ingredients', icon: HeartHandshake },
  ]

  const chefSignatures = [
    {
      name: 'Chief Special Mutton Bhunna',
      price: 599,
      isVeg: false,
      tag: 'Executive Signature',
      desc: 'Tender baby goat meat slow-roasted dry in heavy copper kadhai with whole roasted spices, caramelized shallots, and cracked black pepper.',
    },
    {
      name: 'Paneer Tikka Masala',
      price: 289,
      isVeg: true,
      tag: 'Vegetarian Masterpiece',
      desc: 'Clay-oven char-grilled cottage cheese cubes folded into a velvety, smoked tomato makhani sauce with crunchy bell peppers.',
    },
    {
      name: 'Dehati Chicken',
      price: 349,
      isVeg: false,
      tag: 'Rustic Bihar Classic',
      desc: 'Authentic village-style spicy chicken curry cooked in mustard oil with whole pods of garlic and hand-ground rustic spices.',
    },
    {
      name: 'Drums of Heaven',
      price: 299,
      isVeg: false,
      tag: 'Wok Sensation',
      desc: 'Crisp chicken drumettes tossed on high wok flame in chef’s house-made fiery Schezwan glaze with crunchy scallions.',
    },
    {
      name: 'Chicken Tikka Butter Masala',
      price: 349,
      isVeg: false,
      tag: 'Tandoor Classic',
      desc: 'Charcoal-charred chicken tikka bathed in an unctuous makhani gravy enriched with churned butter and dried kasoori methi.',
    },
    {
      name: 'Brownie Thickshake',
      price: 179,
      isVeg: true,
      tag: 'Sweet Finale',
      desc: 'Fudgy Dutch chocolate brownie baked in-house, blended thick with whole milk, vanilla cream, and dark chocolate ganache.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* Page Hero Header */}
        <section className="bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] py-14 sm:py-20 border-b border-[var(--border)]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--tertiary)]/20 text-[var(--tertiary)] border border-[var(--tertiary)]/30 mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>Behind the Flavor &amp; Fire</span>
            </span>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Meet the Culinary Masters
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              While high-tech automated robots deliver your orders with futuristic charm, every flavor on your plate is handcrafted by experienced culinary artisans passionate about authentic Indian cooking.
            </p>
          </div>
        </section>

        {/* Executive Chef Spotlight */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Chef Image with Gold Border & Quote Card */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--border)] aspect-[3/4] bg-[var(--surface)]">
                    <img
                      src={chefPhoto}
                      alt="Executive Chef crafting authentic dishes at The Robotics Restaurant Purnia"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Quote Box */}
                  <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] p-5 sm:p-6 rounded-2xl shadow-2xl max-w-[90%] border border-[var(--border)]/30">
                    <Quote className="w-6 h-6 text-[var(--tertiary)] mb-2" />
                    <p className="text-xs sm:text-sm italic leading-relaxed text-white/90">
                      "Technology glides through the aisle, but real flavor only comes from time, care, and genuine respect for the spice."
                    </p>
                    <span className="block text-[11px] font-bold text-[var(--tertiary)] uppercase tracking-wider mt-2">
                      — Executive Chef, Robotics Restaurant
                    </span>
                  </div>

                </div>
              </div>

              {/* Chef Narrative & Credentials */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)] mb-2 block">
                    Our Culinary Philosophy
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
                    Where Royal Heritage Spices Meet Futuristic Precision
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[var(--fg)] leading-relaxed">
                  <p>
                    At The Robotics Restaurant Purnia, technology does not replace the cook — it elevates the entire dining atmosphere. In our kitchen, master cooks honor slow-cooking heritage: roasting whole spices in traditional iron kadhais, marinating fresh poultry in spiced hung yogurt overnight, and sealing clay handis for that unmistakable earthy Champaran aroma.
                  </p>
                  <p>
                    Every order is freshly prepared on fire upon your command. Once our chefs plate your dishes with garnishes of ginger juliennes, fresh cream, and chopped coriander, our automated robotic servers escort the food safely to your table, ensuring it reaches you at optimal serving temperature.
                  </p>
                </div>

                {/* Credentials Pills */}
                <div className="pt-2">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--muted)] mb-3">
                    Kitchen Highlights &amp; Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {credentials.map((cred, idx) => {
                      const Icon = cred.icon
                      return (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="px-3.5 py-2 text-xs font-semibold tracking-wide flex items-center gap-2 rounded-xl bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]"
                        >
                          <Icon className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>{cred.label}</span>
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[var(--accent)] text-[var(--text-on-accent)] font-bold text-xs uppercase tracking-wider shadow hover:bg-[#7ea54f] transition-all"
                  >
                    <span>Explore Full Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/visit#reservation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Reserve a Table</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Robot Sous-Chefs & Waiters Synergy Section (Featuring robot2.jpeg) */}
        <section className="py-16 sm:py-24 bg-[var(--surface-strong)] text-[var(--text-on-surface-strong)] border-y border-[var(--border)]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--tertiary)] flex items-center gap-1.5">
                  <Bot className="w-4 h-4" />
                  <span>The Service Synergy</span>
                </span>
                
                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Why Robotic Delivery Keeps Food Hotter &amp; Fresher
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  In a traditional restaurant, hot dishes often sit on pickup counters waiting for available staff. At The Robotics Restaurant, our kitchen pass connects seamlessly to our autonomous robotic assistants.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm font-semibold">Immediate Dispatch:</strong>
                      <span className="text-white/75 text-sm ml-1">Dishes leave the tandoor or wok and are dispatched without delay.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm font-semibold">Contactless Hygiene:</strong>
                      <span className="text-white/75 text-sm ml-1">Covered wide serving trays ensure strict hygienic standards from kitchen window to table.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm font-semibold">Memorable Table Presentation:</strong>
                      <span className="text-white/75 text-sm ml-1">Robots announce dish arrival with friendly voice audio, turning every course into a fun event.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)]/30 aspect-[4/3] bg-black/40">
                  <img
                    src={robotImg}
                    alt="Robot servers standing at the kitchen counter ready to deliver freshly prepared meals"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--tertiary)]">
                      Kitchen Dispatch Zone
                    </span>
                    <p className="text-xs text-white/90 mt-0.5">
                      Robots queued at the illuminated dining wall counter in Purnia.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Chef's Signature Dishes Cards */}
        <section className="py-16 sm:py-24 bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)] mb-2 block">
                Executive Recommendations
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
                Chef’s Handpicked Signatures
              </h2>
              <p className="text-xs sm:text-sm text-[var(--fg)] mt-3">
                Crafted with exclusive spice blends and recommended for first-time visitors and discerning foodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chefSignatures.map((sig, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]/80 hover:border-[var(--accent)] hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20">
                        {sig.tag}
                      </span>
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border p-0.5 flex items-center justify-center shrink-0 ${
                          sig.isVeg ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'
                        }`}
                        title={sig.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span className={`w-2 h-2 rounded-full ${sig.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">
                      {sig.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--fg)] leading-relaxed mb-4">
                      {sig.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)]/40 flex items-center justify-between">
                    <span className="text-xs text-[var(--muted)] font-medium">Price</span>
                    <span className="font-serif-display text-2xl font-bold text-[var(--primary)]">
                      ₹{sig.price}/-
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
              >
                <span>View All 115+ Dishes in Full Menu</span>
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
