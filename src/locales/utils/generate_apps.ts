import { AppsValueType } from "../en"

export type AppsType = {
  apps : AppsValueType
}

export const generate_apps = (value: AppsValueType): AppsType => {
  return {
    apps: value
  }
}
