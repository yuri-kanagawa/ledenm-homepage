import { LocalType } from 'src/hooks/useLocal'
import { AppType } from 'src/locales/app'

export const getAppList = (t: LocalType['t']): AppType[] => {
  return Object.entries(t.apps).map(([key, value]) => value)
}
