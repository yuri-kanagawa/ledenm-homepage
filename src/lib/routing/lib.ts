import { Locale } from 'src/domains'

export class PathBuilder {
  private static readonly ROOT_PATH = '/' as const

  private readonly _locale: Locale

  constructor(locale: Locale) {
    this._locale = locale
  }

  public buildPath(): string {
    if (this._locale.isEnglish()) {
      return PathBuilder.ROOT_PATH
    }
    return `/${this._locale.value}${PathBuilder.ROOT_PATH}`
  }


}
