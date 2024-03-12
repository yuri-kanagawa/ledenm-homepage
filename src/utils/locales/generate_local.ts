import { AppsValueType, SnsValueType, WordsType } from 'src/locales/en'
import { generate_apps, generate_sns } from 'src/utils/locales'

export const generate_local = (words: WordsType, apps: AppsValueType, sns: SnsValueType) => {
  return {
    ...words,
    ...generate_apps(apps),
    ...generate_sns(sns)
  } as const
}
export type LocalConstType = ReturnType<typeof generate_local>
