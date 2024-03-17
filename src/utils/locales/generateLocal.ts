import { AppsValueType, SnsValueType, WordsType } from 'src/locales/en'
import { Metadata } from 'next'
import { generateMeta } from './generateMeta'
import { generateSns } from './generateSns'
import { generateApps } from './generateApps'

export const generateLocal = (words: WordsType, apps: AppsValueType, sns: SnsValueType, meta: Metadata) => {
  return {
    ...words,
    ...generateApps(apps),
    ...generateSns(sns),
    ...generateMeta(meta)
  } as const
}
export type LocalConstType = ReturnType<typeof generateLocal>
