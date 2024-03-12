export const LANGUAGES = {
  ar: 'عربي',
  de: 'Deutsch',
  en: 'English',
  es: 'Spanisch',
  fr: 'Français',
  hi: 'हिंदी',
  id: 'bahasa Indonesia',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  ru: 'Русский',
  zh: '简体中文'
} as const

export type LanguageType = keyof typeof LANGUAGES
