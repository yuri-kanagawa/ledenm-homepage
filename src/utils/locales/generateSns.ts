import { SnsValueType } from 'src/locales/en'

export const generateSns = (value: SnsValueType) => {
  return {
    sns: value
  }
}
export type SnsType = ReturnType<typeof generateSns>;
