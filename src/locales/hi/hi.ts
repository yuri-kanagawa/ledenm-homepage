import { generate_apps } from '../utils'
import {apps} from './app'
export const hi = {
  app: 'अनुप्रयोग',
  contact: 'संपर्क',
  language: 'भाषा',
  ...generate_apps(apps)
} as const
