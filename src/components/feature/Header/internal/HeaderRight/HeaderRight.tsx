import { Scroll } from 'src/components/feature/Scroll'
import { scrollHome } from 'src/constants/scroll'
import { getTextStyle } from 'src/components/feature/Header/utils'
import { LanguageSelect } from 'src/components/feature/Header/internal/LanguageSelect/'
import React from 'react'
import { Typography } from '@mui/material'
import { useLocale } from 'src/hooks/useLocal'
type Props = {
  isBackgroundBlack: boolean
}
export const HeaderRight: React.FC<Props> = ({ isBackgroundBlack }) => {
  const { t } = useLocale()
  return (
    <>

      <Typography sx={{ ...getTextStyle(isBackgroundBlack), mr: 2 }}>
        <Scroll to={scrollHome.app} smooth={true} text={t.app} />
      </Typography>
      <Typography sx={{ ...getTextStyle(isBackgroundBlack), mr: 2 }}>
        <Scroll to={scrollHome.contact} smooth={true} text={t.contact} />
      </Typography>
      <LanguageSelect isBackgroundBlack={isBackgroundBlack} />
    </>
  )
}
