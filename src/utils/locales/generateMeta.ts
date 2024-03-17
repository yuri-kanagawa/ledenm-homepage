import { Metadata } from 'next'

export const generateMeta = (meta: Metadata) => {
  return {
    meta: meta
  }
}

export type MetaType = ReturnType<typeof generateMeta>;
