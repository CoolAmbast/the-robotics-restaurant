import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './theme'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { MenuSection } from './components/MenuSection'
import { StorySection } from './components/StorySection'
import { ChefSection } from './components/ChefSection'
import { ReviewsSection } from './components/ReviewsSection'
import { VisitSection } from './components/VisitSection'
import { ReservationSection } from './components/ReservationSection'
import { Footer } from './components/Footer'
import { FullMenuPage } from './pages/FullMenuPage'

// Automatically scroll to hash or top on route transition
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-[var(--accent)]/30 selection:text-[var(--text)]">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <MenuSection />
        <StorySection />
        <ChefSection />
        <ReviewsSection />
        <VisitSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="warmRustic">
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<FullMenuPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
