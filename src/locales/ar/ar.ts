import { generate_apps } from '../utils'
import {apps} from './app'
export const ar = {
  app: 'برنامج',
  contact: 'اتصال',
  language: 'يعني',
  ...generate_apps(apps)
} as const
