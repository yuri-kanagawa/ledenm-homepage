import { generate_apps, AppsType } from '../utils'
import {apps} from './app'
import { text, TextType } from './text'

export type LocalConstType = TextType & AppsType
export const en: LocalConstType = {
  app: 'APP',
  contact: 'CONTACT',
  language: 'Language',
  ...generate_apps(apps)
} as const
