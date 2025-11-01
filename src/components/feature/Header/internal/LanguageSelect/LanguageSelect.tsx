'use client'

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import { useLocale } from 'src/hooks/useLocal'
import { Language } from 'src/domains/valueObjects/language/Language'
import React, { useCallback } from 'react'

// import { StyledSelect } from 'src/components/feature/styled/select/StyledSelect'
import { menuItemStyle } from 'src/components/feature/Header/internal/LanguageSelect/utils'
import { theme } from 'src/stores/thema/thema'

type Props = {
  isBackgroundBlack: boolean
}
export const LanguageSelect: React.FC<Props> = (props) => {
  const { isBackgroundBlack } = props
  const { language, setLanguage } = useLocale()
  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const newLanguage = Language.create(event.target.value as string)
      setLanguage(newLanguage)
    },
    [setLanguage]
  )

  const languageDisplayNames = Language.getLanguageDisplayNames()
  const currentLanguageValue = language.value

  return (
    <FormControl>
      {/*<StyledSelect*/}
      {/*  sx={{ minWidth: 200, height: 50 }}*/}
      {/*  onChange={handleChange}*/}
      {/*  value={lang}*/}
      {/*  startAdornment={<TranslateIcon />}*/}
      {/*  inputProps={{ MenuProps: { disableScrollLock: true } }}*/}
      {/*  isBackgroundBlack={isBackgroundBlack}*/}
      {/*>*/}
      {/*  {LanguageList.map((e, index) => (*/}
      {/*    <MenuItem key={index} value={e} sx={menuItemStyle}>*/}
      {/*      {languageDisplayNames[e]}*/}
      {/*    </MenuItem>*/}
      {/*  ))}*/}
      {/*</StyledSelect>*/}
      <Select
        sx={{
          minWidth: 200,
          height: 50,
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.contrastText,
          '&.MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: isBackgroundBlack
                ? theme.palette.secondary.contrastText
                : theme.palette.secondary.main
            },
            '&.Mui-focused fieldset': {
              borderColor: isBackgroundBlack
                ? theme.palette.secondary.contrastText
                : theme.palette.secondary.main
            }
          }
        }}
        onChange={handleChange}
        value={currentLanguageValue}
        startAdornment={<TranslateIcon />}
        inputProps={{ MenuProps: { disableScrollLock: true } }}
      >
        {Language.LANGUAGE_LIST.map((e, index) => (
          <MenuItem key={index} value={e} sx={menuItemStyle}>
            {languageDisplayNames[e]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
