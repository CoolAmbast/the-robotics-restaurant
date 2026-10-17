import React from 'react'
import { Quote, Award, Sparkles, HeartHandshake, Utensils } from 'lucide-react'
import { Badge } from './ui/badge'
import chefPhoto from '../assets/c69dac6b-069f-44de-8f76-b6b0bf05e9cd.jpg'

export const ChefSection: React.FC = () => {
  const credentials = [
    { label: 'Master Indian & Chinese', icon: <Utensils className="w-3.5 h-3.5 text-[var(--primary)]" /> },
    { label: 'Tandoor Specialist', icon: <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" /> },
    { label: 'Champaran Handi Expert', icon: <Award className="w-3.5 h-3.5 text-[var(--primary)]" /> },
    { label: 'Fresh Daily Preparation', icon: <HeartHandshake className="w-3.5 h-3.5 text-[var(--primary)]" /> },
  ]

  return (
    <section
      id="chef"
      aria-label="Our chef"
      className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Content */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--accent)] mb-2.5 block">
              Behind the Flavors
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-2">
              Culinary Artistry Meets High Tech
            </h2>

            <p className="text-base sm:text-lg font-medium italic text-[var(--fg)] mb-6">
              Executive Culinary Team • Robotics Restaurant Purnia
            </p>

            <div className="space-y-4 text-base text-[var(--fg)] leading-relaxed mb-8">
              <p>
                While automated robotic servers bring the food to your table in style, every single dish is lovingly handcrafted by our experienced culinary team. From authentic slow-cooked Champaran Mutton and rich Paneer Butter Masala to hand-rolled butter naans and wok-tossed spicy Chinese starters, quality is never compromised.
              </p>
              <p>
                <em>"Technology handles the serving, but honest, authentic spices and heart go into every dish we cook for the people of Purnia."</em>
              </p>
            </div>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2.5">
              {credentials.map((cred, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="px-3.5 py-1.5 text-xs font-semibold tracking-wider flex items-center gap-1.5 rounded-full"
                >
                  {cred.icon}
                  <span>{cred.label}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Chef Image & Floating Quote Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-b-8 border-[var(--accent)] aspect-[3/4]">
                <img
                  src={chefPhoto}
                  alt="Executive Chef preparing dishes at Robotics Restaurant Purnia"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Quote Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-[var(--primary)] text-[var(--text-on-surface-strong)] p-5 sm:p-6 rounded-2xl shadow-2xl max-w-[85%] border border-[var(--border)]/20">
                <Quote className="w-8 h-8 text-[var(--accent)] mb-2" />
                <p className="text-xs sm:text-sm italic leading-relaxed text-[var(--text-on-surface-strong)]/90">
                  "The best meal is the one your family and friends celebrate together."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
