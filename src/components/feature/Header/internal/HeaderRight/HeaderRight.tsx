import { Scroll } from 'src/components/feature/Scroll'
import { scrollHome } from 'src/constants/scroll'
import { getTextStyle } from 'src/components/feature/Header/utils'
import { LanguageSelect } from 'src/components/feature/Header/internal/LanguageSelect/'
import React from 'react'
import { Typography } from '@mui/material'
import { Language } from 'src/domains/valueObjects/language/Language'
import { getLocalFile } from 'src/utils/locales'

type HeaderRightProps = {
  isBackgroundBlack: boolean
  language: Language
}
export const HeaderRight: React.FC<HeaderRightProps> = ({
  isBackgroundBlack,
  language
}) => {
  const t = language.locale
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
      <LanguageSelect
        isBackgroundBlack={isBackgroundBlack}
        language={language}
      />
    </>
  )
}
