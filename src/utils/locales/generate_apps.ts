import { AppsValueType } from 'src/locales/en'

export const generate_apps = (value: AppsValueType) => {
  return {
    apps: value
  }
}
export type AppsType = ReturnType<typeof generate_apps>
