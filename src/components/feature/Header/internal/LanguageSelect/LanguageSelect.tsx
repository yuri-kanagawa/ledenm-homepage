'use client'

import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { langState } from 'src/stores/lang/langContext'
import TranslateIcon from '@mui/icons-material/Translate'
import { useRecoilState } from 'recoil'
import React, { useCallback, useMemo } from 'react'

import { StyledSelect } from 'src/components/feature/styled/select/StyledSelect'
import { menuItemStyle } from 'src/components/feature/Header/internal/LanguageSelect/utils'
import { LanguageList, getLanguageLabel } from 'src/utils/local'
import {  LanguageType } from 'src/constants/languages'

type Props = {
  isBackgroundBlack: boolean
}
export const LanguageSelect: React.FC<Props> = (props) => {
  const { isBackgroundBlack } = props
  const [lang, setLang] = useRecoilState(langState)
  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) =>
      setLang( event.target.value as LanguageType),
    [setLang]
  )

  return (
    <FormControl>
      <StyledSelect
        sx={{ minWidth: 200, height: 50 }}
        onChange={handleChange}
        value={lang}
        startAdornment={<TranslateIcon />}
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        isBackgroundBlack={isBackgroundBlack}
      >
        {LanguageList.map((e, index) => (
          <MenuItem key={index} value={e} sx={menuItemStyle}>
            {getLanguageLabel(e as LanguageType)}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  )
}
