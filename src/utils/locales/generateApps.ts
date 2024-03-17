import { AppsValueType } from 'src/locales/en'

export const generateApps = (value: AppsValueType) => {
  return {
    apps: value
  }
}
export type AppsType = ReturnType<typeof generateApps>
