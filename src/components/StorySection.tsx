import React from 'react'
import { CheckCircle2, Cake } from 'lucide-react'
import storyImg from '../assets/image.png'

export const StorySection: React.FC = () => {
  const storyValues = [
    {
      title: 'Bihar’s First Robotic Service',
      desc: 'Interactive automated robot servers bringing fresh, hot food right to your table',
    },
    {
      title: 'Multi-Cuisine Delights',
      desc: 'Authentic Indian curries, Champaran mutton, tandoori grills, and Chinese specialties',
    },
    {
      title: 'Celebrations & Birthday Parties',
      desc: 'Complimentary celebration decoration packages for birthdays and family anniversaries',
    },
  ]

  return (
    <section
      id="story"
      aria-label="Our story"
      className="py-20 sm:py-28 bg-[var(--surface-strong)] relative overflow-hidden text-[var(--text-on-surface-strong)]"
    >
      {/* Decorative Radial Background */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Restaurant Photo (image.png) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Photo: image.png */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)]/20 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={storyImg}
                  alt="Inside Robotics Restaurant Purnia with the wall robot logo and party celebration setup"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-strong)]/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[var(--surface-strong)]/90 backdrop-blur-md rounded-xl p-3 border border-[var(--border)]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-on-surface-strong)]">
                    <Cake className="w-4 h-4 text-[var(--tertiary)]" />
                    <span>Birthday &amp; Party Celebrations</span>
                  </div>
                  <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider">
                    Free Decoration
                  </span>
                </div>
              </div>

              {/* Year Founded Badge */}
              <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 bg-[var(--accent)] text-[var(--text-on-accent)] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl text-center border-2 border-[var(--surface-strong)]">
                <span className="block font-serif-display text-xl sm:text-2xl font-bold leading-none">
                  Sep 2026
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase opacity-90">
                  Founded
                </span>
              </div>

            </div>
          </div>

          {/* Story Narrative & Values */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--tertiary)] mb-2.5 block">
              Our Story &amp; Vision
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-on-surface-strong)] leading-tight mb-6">
              Purnia’s First <br />
              <span className="italic font-normal text-[var(--tertiary)]">Futuristic Dining Spot</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-on-surface-strong)]/80 leading-relaxed mb-8">
              <p>
                Founded in September 2026 at Jhanda Chowk Road (opposite Gokul Sweets), The Robotics Restaurant was born out of a desire to bring world-class robotic dining technology to Purnia, Bihar.
              </p>
              <p>
                Here, automated robot waiters deliver sizzling plates right to your table, adding excitement and joy for kids, youth, and families alike — while our master chefs focus on culinary perfection across Indian, Chinese, and Continental menus.
              </p>
            </div>

            {/* Values Checklist */}
            <div className="space-y-4 pt-2">
              {storyValues.map((val, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-[var(--text-on-surface-strong)]/90 leading-normal">
                    <strong className="text-[var(--text-on-surface-strong)] font-semibold">
                      {val.title}
                    </strong>{' '}
                    — {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
