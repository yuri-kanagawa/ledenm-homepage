import { TranslationType } from 'src/utils/locales/generateLocal'
import { AppType } from 'src/locales/en-US/app'
import { arSa } from 'src/locales/ar-SA'
import { deDe } from 'src/locales/de-DE'
import { enUs } from 'src/locales/en-US'
import { esEs } from 'src/locales/es-ES'
import { filPh } from 'src/locales/fil-PH/fil'
import { frFr } from 'src/locales/fr-FR'
import { heIl } from 'src/locales/he-IL/he'
import { hiIn } from 'src/locales/hi-IN'
import { idId } from 'src/locales/id-ID'
import { itIt } from 'src/locales/it-IT'
import { jaJp } from 'src/locales/ja-JP'
import { koKr } from 'src/locales/ko-KR'
import { msMy } from 'src/locales/ms-MY/ms'
import { nlNl } from 'src/locales/nl-NL/nl'
import { plPl } from 'src/locales/pl-PL/pl'
import { ptBr } from 'src/locales/pt-BR'
import { ruRu } from 'src/locales/ru-RU'
import { thTh } from 'src/locales/th-TH/th'
import { trTr } from 'src/locales/tr-TR/tr'
import { zhCn } from 'src/locales/zh-CN'
import { zhTw } from 'src/locales/zh-TW'
import { viVn } from 'src/locales/vi-VN/vi'
import { svSe } from 'src/locales/sv-SE/sv'

const LOCALE_CODES = {
  AR: 'ar-SA',
  DE: 'de-DE',
  EN: 'en-US',
  ES: 'es-ES',
  FIL: 'fil-PH',
  FR: 'fr-FR',
  HE: 'he-IL',
  HI: 'hi-IN',
  ID: 'id-ID',
  IT: 'it-IT',
  JA: 'ja-JP',
  KO: 'ko-KR',
  MS: 'ms-MY',
  NL: 'nl-NL',
  PL: 'pl-PL',
  PT: 'pt-BR',
  RU: 'ru-RU',
  SV: 'sv-SE',
  TH: 'th-TH',
  TR: 'tr-TR',
  VI: 'vi-VN',
  ZH_CN: 'zh-CN',
  ZH_TW: 'zh-TW'
} as const

type LocaleCode = (typeof LOCALE_CODES)[keyof typeof LOCALE_CODES]

export class Locale {
  private static readonly CODES = LOCALE_CODES

  public static readonly AR = Locale.CODES.AR
  public static readonly DE = Locale.CODES.DE
  public static readonly EN = Locale.CODES.EN
  public static readonly ES = Locale.CODES.ES
  public static readonly FIL = Locale.CODES.FIL
  public static readonly FR = Locale.CODES.FR
  public static readonly HE = Locale.CODES.HE
  public static readonly HI = Locale.CODES.HI
  public static readonly ID = Locale.CODES.ID
  public static readonly IT = Locale.CODES.IT
  public static readonly JA = Locale.CODES.JA
  public static readonly KO = Locale.CODES.KO
  public static readonly MS = Locale.CODES.MS
  public static readonly NL = Locale.CODES.NL
  public static readonly PL = Locale.CODES.PL
  public static readonly PT = Locale.CODES.PT
  public static readonly RU = Locale.CODES.RU
  public static readonly SV = Locale.CODES.SV
  public static readonly TH = Locale.CODES.TH
  public static readonly TR = Locale.CODES.TR
  public static readonly VI = Locale.CODES.VI
  public static readonly ZH_CN = Locale.CODES.ZH_CN
  public static readonly ZH_TW = Locale.CODES.ZH_TW

  private static readonly RESOLVERS: Record<LocaleCode, () => TranslationType> =
    {
      [Locale.AR]: () => arSa,
      [Locale.DE]: () => deDe,
      [Locale.EN]: () => enUs,
      [Locale.ES]: () => esEs,
      [Locale.FIL]: () => filPh,
      [Locale.FR]: () => frFr,
      [Locale.HE]: () => heIl,
      [Locale.HI]: () => hiIn,
      [Locale.ID]: () => idId,
      [Locale.IT]: () => itIt,
      [Locale.JA]: () => jaJp,
      [Locale.KO]: () => koKr,
      [Locale.MS]: () => msMy,
      [Locale.NL]: () => nlNl,
      [Locale.PL]: () => plPl,
      [Locale.PT]: () => ptBr,
      [Locale.RU]: () => ruRu,
      [Locale.SV]: () => svSe,
      [Locale.TH]: () => thTh,
      [Locale.TR]: () => trTr,
      [Locale.VI]: () => viVn,
      [Locale.ZH_CN]: () => zhCn,
      [Locale.ZH_TW]: () => zhTw
    }

  private static readonly DISPLAY_NAMES: Record<LocaleCode, string> = {
    [Locale.AR]: 'العربية',
    [Locale.DE]: 'Deutsch',
    [Locale.EN]: 'English',
    [Locale.ES]: 'Español',
    [Locale.FIL]: 'Filipino',
    [Locale.FR]: 'Français',
    [Locale.HE]: 'עברית',
    [Locale.HI]: 'हिन्दी',
    [Locale.ID]: 'Bahasa Indonesia',
    [Locale.IT]: 'Italiano',
    [Locale.JA]: '日本語',
    [Locale.KO]: '한국어',
    [Locale.MS]: 'Bahasa Melayu',
    [Locale.NL]: 'Nederlands',
    [Locale.PL]: 'Polski',
    [Locale.PT]: 'Português',
    [Locale.RU]: 'Русский',
    [Locale.SV]: 'Svenska',
    [Locale.TH]: 'ไทย',
    [Locale.TR]: 'Türkçe',
    [Locale.VI]: 'Tiếng Việt',
    [Locale.ZH_CN]: '中文（简体）',
    [Locale.ZH_TW]: '中文（繁體）'
  } as const

  public static readonly LIST: LocaleCode[] = Object.values(Locale.CODES)

  private readonly _value: LocaleCode
  private readonly _definition: TranslationType

  private constructor(value: LocaleCode) {
    this._value = value
    const resolver = Locale.RESOLVERS[value] ?? Locale.RESOLVERS[Locale.EN]
    this._definition = resolver()
  }

  static create(value: string): Locale {
    if (Locale.isAvailable(value)) {
      return new Locale(value as LocaleCode)
    }
    return Locale.default()
  }

  private static isAvailable(value: string): value is LocaleCode {
    return Locale.LIST.includes(value as LocaleCode)
  }

  public static isValidCode(value: string): boolean {
    return Locale.isAvailable(value)
  }

  public get value(): LocaleCode {
    return this._value
  }

  public equals(other: Locale): boolean {
    return this._value === other.value
  }

  public isEnglish(): boolean {
    return this._value === Locale.EN
  }

  public toString(): string {
    return this._value
  }

  public getDisplayName(): string {
    return Locale.DISPLAY_NAMES[this._value]
  }

  public get apps(): AppType[] {
    return Object.values(this._definition.apps) as AppType[]
  }

  public static getAvailableLocales() {
    return Locale.CODES
  }

  public static getDisplayNames(): typeof Locale.DISPLAY_NAMES {
    return Locale.DISPLAY_NAMES
  }

  public static generatePages() {
    return Locale.LIST.filter((code) => code !== Locale.EN).map((code) => ({
      locale: code
    }))
  }

  public static default(): Locale {
    return new Locale(Locale.EN)
  }



  public get definition(): TranslationType {
    return this._definition
  }

  public get translation(): TranslationType {
    return this._definition
  }
}
