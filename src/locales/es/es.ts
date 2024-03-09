import { generate_apps } from '../utils'
import {apps} from './app'
export const es = {
  app: 'application',
  contact: 'contact',
  language: 'langue',
  ...generate_apps(apps)
} as const
