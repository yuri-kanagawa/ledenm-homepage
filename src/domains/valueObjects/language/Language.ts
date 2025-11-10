import { LocalConstType } from 'src/utils/locales/generateLocal'
import { AppType } from 'src/locales/en/app'
import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'
import { ar } from 'src/locales/ar'
import { de } from 'src/locales/de'
import { es } from 'src/locales/es'
import { fr } from 'src/locales/fr'
import { hi } from 'src/locales/hi'
import { id } from 'src/locales/id'
import { it } from 'src/locales/it'
import { ko } from 'src/locales/ko'
import { pt } from 'src/locales/pt'
import { ru } from 'src/locales/ru'
import { zh } from 'src/locales/zh'

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

  private static readonly LOCALE_MAP: Record<
    (typeof Language.CODES)[keyof typeof Language.CODES],
    () => LocalConstType
  > = {
    [Language.AR]: () => ar,
    [Language.DE]: () => de,
    [Language.EN]: () => en,
    [Language.ES]: () => es,
    [Language.FR]: () => fr,
    [Language.HI]: () => hi,
    [Language.ID]: () => id,
    [Language.IT]: () => it,
    [Language.JA]: () => ja,
    [Language.KO]: () => ko,
    [Language.PT]: () => pt,
    [Language.RU]: () => ru,
    [Language.ZH]: () => zh
  }

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

  private readonly _value: (typeof Language.CODES)[keyof typeof Language.CODES]
  private readonly _locale: LocalConstType

  private constructor(
    value: (typeof Language.CODES)[keyof typeof Language.CODES]
  ) {
    this._value = value
    const resolver =
      Language.LOCALE_MAP[value] ?? Language.LOCALE_MAP[Language.EN]
    this._locale = resolver()
  }

  get value(): (typeof Language.CODES)[keyof typeof Language.CODES] {
    return this._value
  }

  get locale(): LocalConstType {
    return this._locale
  }

  get apps(): AppType[] {
    const { apps } = this.locale
    return Object.values(apps) as AppType[]
  }

  static create(value: string): Language {
    if (!Language.isAvailableLanguage(value)) {
      throw new Error(`Invalid language: ${value}`)
    }
    return new Language(
      value as (typeof Language.CODES)[keyof typeof Language.CODES]
    )
  }

  private static isAvailableLanguage(value: string): boolean {
    return Object.values(Language.CODES).includes(
      value as (typeof Language.CODES)[keyof typeof Language.CODES]
    )
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

  public static readonly LANGUAGE_LIST: (typeof Language.CODES)[keyof typeof Language.CODES][] =
    Object.values(Language.CODES)

  public static isValidCode(value: string): boolean {
    return Language.isAvailableLanguage(value)
  }

  public static generatePages() {
    return Language.LANGUAGE_LIST.filter((code) => code !== Language.EN).map(
      (code) => ({
        language: code
      })
    )
  }

  public static default(): Language {
    return Language.create(Language.EN)
  }
}
