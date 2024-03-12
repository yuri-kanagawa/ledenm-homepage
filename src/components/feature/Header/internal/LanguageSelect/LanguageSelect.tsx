'use client'

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { langState } from 'src/stores/lang/langContext'
import TranslateIcon from '@mui/icons-material/Translate'
import { useRecoilState } from 'recoil'
import React, { useCallback } from 'react'

// import { StyledSelect } from 'src/components/feature/styled/select/StyledSelect'
import { menuItemStyle } from 'src/components/feature/Header/internal/LanguageSelect/utils'
import { LanguageList } from 'src/utils/locales'
import { LANGUAGES, LanguageType } from 'src/constants/languages'
import { theme } from 'src/stores/thema/thema'

type Props = {
  isBackgroundBlack: boolean
}
export const LanguageSelect: React.FC<Props> = (props) => {
  const { isBackgroundBlack } = props
  const [lang, setLang] = useRecoilState(langState)
  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) =>
      setLang(event.target.value as LanguageType),
    [setLang]
  )

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
      {/*      {LANGUAGES[e]}*/}
      {/*    </MenuItem>*/}
      {/*  ))}*/}
      {/*</StyledSelect>*/}
      <Select
        sx={{
          minWidth: 200, height: 50,
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
        value={lang}
        startAdornment={<TranslateIcon />}
        inputProps={{ MenuProps: { disableScrollLock: true } }}
      >
        {LanguageList.map((e, index) => (
          <MenuItem key={index} value={e} sx={menuItemStyle}>
            {LANGUAGES[e]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
