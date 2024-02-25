export const LANGUAGES = {
  en: 'English',
  ja: '日本語'
} as const

export type LanguageType = keyof typeof LANGUAGES
