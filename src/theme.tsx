import React, { createContext, useContext, useEffect, useState } from 'react'

export interface ThemeColors {
  bg: string
  surface: string
  text: string
  fg: string
  accent: string
  muted: string
  link: string
  linkHover: string
  surfaceStrong: string
  textOnSurfaceStrong: string
  textOnAccent: string
  textDisplayAccent: string
  tertiary: string
  heroGlow: string
  border: string
  chart1: string
  chart2: string
}

export interface ThemeConfig {
  name: string
  displayName: string
  colors: ThemeColors
  fonts: {
    display: string
    body: string
  }
  radius: string
}

export const themes: Record<string, ThemeConfig> = {
  warmRustic: {
    name: 'warmRustic',
    displayName: 'Warm Rustic (Original)',
    colors: {
      bg: '#fdf8f3',
      surface: '#f5ede0',
      text: '#2a1a0a',
      fg: '#5c3d20',
      accent: '#8fba5d',
      muted: '#b89a78',
      link: '#492e17',
      linkHover: '#8fba5d',
      surfaceStrong: '#2a1a0a',
      textOnSurfaceStrong: '#fdf8f3',
      textOnAccent: '#fdf8f3',
      textDisplayAccent: '#8fba5d',
      tertiary: '#e0b177',
      heroGlow: '#8fba5d',
      border: '#d4b896',
      chart1: '#8fba5d',
      chart2: '#e0b177',
    },
    fonts: {
      display: '"Cormorant Garamond", Georgia, serif',
      body: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    radius: '0.5rem',
  },
  cyberLuxe: {
    name: 'cyberLuxe',
    displayName: 'Cyber Luxe Dark',
    colors: {
      bg: '#141419',
      surface: '#1e1e24',
      text: '#f2f2f7',
      fg: '#a1a1aa',
      accent: '#a3e635',
      muted: '#71717a',
      link: '#d4d4d8',
      linkHover: '#a3e635',
      surfaceStrong: '#09090b',
      textOnSurfaceStrong: '#ffffff',
      textOnAccent: '#09090b',
      textDisplayAccent: '#a3e635',
      tertiary: '#f59e0b',
      heroGlow: '#a3e635',
      border: '#27272a',
      chart1: '#a3e635',
      chart2: '#f59e0b',
    },
    fonts: {
      display: '"Cormorant Garamond", Georgia, serif',
      body: '"Plus Jakarta Sans", sans-serif',
    },
    radius: '0.625rem',
  },
  emeraldBistro: {
    name: 'emeraldBistro',
    displayName: 'Emerald & Gold',
    colors: {
      bg: '#f7faf7',
      surface: '#ebf2eb',
      text: '#132a13',
      fg: '#31572c',
      accent: '#4f772d',
      muted: '#90a955',
      link: '#132a13',
      linkHover: '#4f772d',
      surfaceStrong: '#0b1d0b',
      textOnSurfaceStrong: '#ecf39e',
      textOnAccent: '#f7faf7',
      textDisplayAccent: '#4f772d',
      tertiary: '#e0a96d',
      heroGlow: '#4f772d',
      border: '#c2d5c2',
      chart1: '#4f772d',
      chart2: '#e0a96d',
    },
    fonts: {
      display: '"Cormorant Garamond", Georgia, serif',
      body: '"Plus Jakarta Sans", sans-serif',
    },
    radius: '0.5rem',
  },
}

interface ThemeContextType {
  currentTheme: ThemeConfig
  themeName: string
  setThemeName: (name: string) => void
  availableThemes: typeof themes
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: themes.warmRustic,
  themeName: 'warmRustic',
  setThemeName: () => {},
  availableThemes: themes,
})

export const ThemeProvider: React.FC<{ children: React.ReactNode; defaultTheme?: string }> = ({
  children,
  defaultTheme = 'warmRustic',
}) => {
  const [themeName, setThemeName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('app-theme') || defaultTheme
    }
    return defaultTheme
  })

  const currentTheme = themes[themeName] || themes.warmRustic

  useEffect(() => {
    const root = document.documentElement
    const colors = currentTheme.colors

    root.style.setProperty('--bg', colors.bg)
    root.style.setProperty('--surface', colors.surface)
    root.style.setProperty('--text', colors.text)
    root.style.setProperty('--fg', colors.fg)
    root.style.setProperty('--accent', colors.accent)
    root.style.setProperty('--muted', colors.muted)
    root.style.setProperty('--link', colors.link)
    root.style.setProperty('--link-hover', colors.linkHover)
    root.style.setProperty('--surface-strong', colors.surfaceStrong)
    root.style.setProperty('--text-on-surface-strong', colors.textOnSurfaceStrong)
    root.style.setProperty('--text-on-accent', colors.textOnAccent)
    root.style.setProperty('--text-display-accent', colors.textDisplayAccent)
    root.style.setProperty('--tertiary', colors.tertiary)
    root.style.setProperty('--hero-glow', colors.heroGlow)
    root.style.setProperty('--border', colors.border)
    root.style.setProperty('--font-display', currentTheme.fonts.display)
    root.style.setProperty('--font-body', currentTheme.fonts.body)
    root.style.setProperty('--radius', currentTheme.radius)

    localStorage.setItem('app-theme', themeName)
  }, [currentTheme, themeName])

  return (
    <ThemeContext.Provider value={{ currentTheme, themeName, setThemeName, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// Default theme tokens helper for quick styling references
export const defaultTokens = themes.warmRustic.colors
