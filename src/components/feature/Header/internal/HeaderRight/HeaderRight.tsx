import { Typography } from '@mui/material'
import React from 'react'
import { Scroll } from 'src/components/feature/Scroll'
import { LanguageSelect } from 'src/components/feature/Header/internal/LanguageSelect/'
import { getTextStyle } from 'src/components/feature/Header/utils'
import { scrollHome } from 'src/constants/scroll'
import { Locale } from 'src/domains'

type HeaderRightProps = {
  isBackgroundBlack: boolean
  locale: Locale
}
export const HeaderRight: React.FC<HeaderRightProps> = ({
  isBackgroundBlack,
  locale
}) => {
  const t = locale.definition
  return (
    <>
      <Typography
        sx={{ ...getTextStyle(isBackgroundBlack), mr: 2, textAlign: 'center' }}
      >
        <Scroll to={scrollHome.app} smooth={true} text={t.words.app} />
      </Typography>
      <Typography
        sx={{ ...getTextStyle(isBackgroundBlack), mr: 2, textAlign: 'center' }}
      >
        <Scroll to={scrollHome.contact} smooth={true} text={t.words.contact} />
      </Typography>
      <LanguageSelect isBackgroundBlack={isBackgroundBlack} locale={locale} />
    </>
  )
}
