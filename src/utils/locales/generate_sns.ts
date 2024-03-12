import { SnsValueType } from 'src/locales/en'

export const generate_sns = (value: SnsValueType) => {
  return {
    sns: value
  }
}
export type SnsType = ReturnType<typeof generate_sns>;
