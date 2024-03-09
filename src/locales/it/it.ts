import { generate_apps } from '../utils'
import {apps} from './app'
export const it = {
  app: 'app',
  contact: 'contatto',
  language: 'lingua',
  ...generate_apps(apps)
} as const
