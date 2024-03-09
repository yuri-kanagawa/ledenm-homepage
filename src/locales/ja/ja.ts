import { generate_apps } from '../utils'
import {apps} from './app'
export const ja = {
  app: 'アプリ',
  contact: '連絡',
  language: '言語',
  ...generate_apps(apps)
} as const
