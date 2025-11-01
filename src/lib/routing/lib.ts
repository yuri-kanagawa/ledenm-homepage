import { Language } from 'src/domains/valueObjects/language/Language'

export class PathBuilder {
  private static readonly ROOT_PATH = '/' as const

  private readonly _language: Language

  constructor(language: Language) {
    this._language = language
  }

  public buildPath(): string {
    if (this._language.isEnglish()) {
      return PathBuilder.ROOT_PATH
    }
    return `/${this._language.value}${PathBuilder.ROOT_PATH}`
  }

  public get language(): Language {
    return this._language
  }
}
