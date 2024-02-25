import { getTextColorStyle } from 'src/style/textStyle'

export const getTextStyle = (isBackgroundBlack: boolean) => {
  return { ...getTextColorStyle(isBackgroundBlack), mr: 2 }
}
