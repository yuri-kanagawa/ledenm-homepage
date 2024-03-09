import { generate_apps } from '../utils'
import {apps} from './app'
export const id = {
  app: 'aplikasi',
  contact: 'kontak',
  language: 'bahasa',
  ...generate_apps(apps)
} as const
