import { generate_apps } from '../utils'
import {apps} from './app'
export const zh = {
  app: '应用程序',
  contact: '接触',
  language: '语言',
  ...generate_apps(apps)
} as const
