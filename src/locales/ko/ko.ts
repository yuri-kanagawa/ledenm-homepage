import { generate_apps } from '../utils'
import {apps} from './app'
export const ko = {
  app: '앱',
  contact: '연락하다',
  language: '언어',
  ...generate_apps(apps)
} as const
