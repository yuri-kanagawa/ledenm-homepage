import { LocalConstType } from 'src/utils/locales'

export class Language {
  private static readonly CODES = {
    AR: 'ar',
    DE: 'de',
    EN: 'en',
    ES: 'es',
    FR: 'fr',
    HI: 'hi',
    ID: 'id',
    IT: 'it',
    JA: 'ja',
    KO: 'ko',
    PT: 'pt',
    RU: 'ru',
    ZH: 'zh'
  } as const

  public static readonly AR = Language.CODES.AR
  public static readonly DE = Language.CODES.DE
  public static readonly EN = Language.CODES.EN
  public static readonly ES = Language.CODES.ES
  public static readonly FR = Language.CODES.FR
  public static readonly HI = Language.CODES.HI
  public static readonly ID = Language.CODES.ID
  public static readonly IT = Language.CODES.IT
  public static readonly JA = Language.CODES.JA
  public static readonly KO = Language.CODES.KO
  public static readonly PT = Language.CODES.PT
  public static readonly RU = Language.CODES.RU
  public static readonly ZH = Language.CODES.ZH

  private static readonly LANGUAGE_DISPLAY_NAMES = {
    [Language.AR]: 'عربي',
    [Language.DE]: 'Deutsch',
    [Language.EN]: 'English',
    [Language.ES]: 'Spanisch',
    [Language.FR]: 'Français',
    [Language.HI]: 'हिंदी',
    [Language.ID]: 'bahasa Indonesia',
    [Language.IT]: 'Italiano',
    [Language.JA]: '日本語',
    [Language.KO]: '한국어',
    [Language.PT]: 'Português',
    [Language.RU]: 'Русский',
    [Language.ZH]: '简体中文'
  } as const

  private readonly _value: typeof Language.CODES[keyof typeof Language.CODES]

  private constructor(value: typeof Language.CODES[keyof typeof Language.CODES]) {
    this._value = value
  }

  get value(): typeof Language.CODES[keyof typeof Language.CODES] {
    return this._value
  }

  get locale(): LocalConstType {
    // 直接ロケールを取得して循環依存を回避
    switch (this._value) {
      case 'ar':
        return require('src/locales/ar').ar
      case 'de':
        return require('src/locales/de').de
      case 'en':
        return require('src/locales/en').en
      case 'es':
        return require('src/locales/es').es
      case 'fr':
        return require('src/locales/fr').fr
      case 'hi':
        return require('src/locales/hi').hi
      case 'id':
        return require('src/locales/id').id
      case 'it':
        return require('src/locales/it').it
      case 'ja':
        return require('src/locales/ja').ja
      case 'ko':
        return require('src/locales/ko').ko
      case 'pt':
        return require('src/locales/pt').pt
      case 'ru':
        return require('src/locales/ru').ru
      case 'zh':
        return require('src/locales/zh').zh
      default:
        return require('src/locales/en').en
    }
  }

  static create(value: string): Language {
    if (!Language.isAvailableLanguage(value)) {
      throw new Error(`Invalid language: ${value}`)
    }
    return new Language(value as typeof Language.CODES[keyof typeof Language.CODES])
  }

  private static isAvailableLanguage(value: string): boolean {
    return Object.values(Language.CODES).includes(value as typeof Language.CODES[keyof typeof Language.CODES])
  }

  public equals(other: Language): boolean {
    return this._value === other._value
  }

  public isEnglish(): boolean {
    return this._value === Language.EN
  }

  public toString(): string {
    return this._value
  }

  public getDisplayName(): string {
    return Language.LANGUAGE_DISPLAY_NAMES[this._value]
  }

  public static getAvailableLanguages() {
    return Language.CODES
  }

  public static getLanguageDisplayNames(): typeof Language.LANGUAGE_DISPLAY_NAMES {
    return Language.LANGUAGE_DISPLAY_NAMES
  }

  public static readonly LANGUAGE_LIST: (typeof Language.CODES[keyof typeof Language.CODES])[] = Object.values(Language.CODES)

  public static isValidCode(value: string): boolean {
    return Language.isAvailableLanguage(value)
  }

  public static generateStaticParams() {
    return Language.LANGUAGE_LIST.map((e) => ({
      locale: e
    }))
  }
}
