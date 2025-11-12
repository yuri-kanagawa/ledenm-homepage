import { apps } from './app'
import { words } from './words'
import { sns } from './sns'
import { meta } from './meta'

export const enUs = {
  words,
  apps,
  sns,
  meta
} as const

export type TranslationType = typeof enUs
