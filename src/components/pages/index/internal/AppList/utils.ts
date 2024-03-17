import { AppType } from 'src/locales/en'
import { LocalConstType } from 'src/utils/locales'


export const getAppList = (t: LocalConstType): AppType[] => {
  return Object.entries(t.apps).map(([key, value]) => value)
}
