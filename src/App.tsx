import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './theme'
import { LandingPage } from './pages/LandingPage'
import { FullMenuPage } from './pages/FullMenuPage'
import { ChefPage } from './pages/ChefPage'
import { StoryPage } from './pages/StoryPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { VisitPage } from './pages/VisitPage'

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

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="warmRustic">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollManager />
        <Routes>
          {/* 1. Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* 2. Menu Page */}
          <Route path="/menu" element={<FullMenuPage />} />

          {/* 3. Chef Page */}
          <Route path="/chef" element={<ChefPage />} />

          {/* 4. Our Story Page */}
          <Route path="/story" element={<StoryPage />} />
          <Route path="/our-story" element={<StoryPage />} />

          {/* 5. Reviews Page */}
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* 6. Visit Page */}
          <Route path="/visit" element={<VisitPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
