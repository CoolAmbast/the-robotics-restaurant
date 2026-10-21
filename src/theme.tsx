import React, { createContext, useContext, useEffect } from 'react'

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

export const warmRusticTheme: ThemeConfig = {
  name: 'warmRustic',
  displayName: 'Warm Rustic',
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
}

export const themes: Record<string, ThemeConfig> = {
  warmRustic: warmRusticTheme,
}

interface ThemeContextType {
  currentTheme: ThemeConfig
  themeName: string
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: warmRusticTheme,
  themeName: 'warmRustic',
})

export const ThemeProvider: React.FC<{ children: React.ReactNode; defaultTheme?: string }> = ({
  children,
}) => {
  useEffect(() => {
    const root = document.documentElement
    const colors = warmRusticTheme.colors

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
    root.style.setProperty('--font-display', warmRusticTheme.fonts.display)
    root.style.setProperty('--font-body', warmRusticTheme.fonts.body)
    root.style.setProperty('--radius', warmRusticTheme.radius)
  }, [])

  return (
    <ThemeContext.Provider value={{ currentTheme: warmRusticTheme, themeName: 'warmRustic' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export const defaultTokens = warmRusticTheme.colors
