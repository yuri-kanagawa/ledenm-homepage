'use client'

import { Autocomplete, TextField } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import { useRouter } from 'next/navigation'
import { Language } from 'src/domains/valueObjects/language/Language'
import { PathBuilder } from 'src/lib/routing'
import React, { useCallback } from 'react'

import { theme } from 'src/stores/thema/thema'

type Props = {
  isBackgroundBlack: boolean
  language: Language
}
export const LanguageSelect: React.FC<Props> = ({
  isBackgroundBlack,
  language
}) => {
  const router = useRouter()

  const languageDisplayNames = Language.getLanguageDisplayNames()
  const currentLanguageValue = language.value

  const options = Language.LANGUAGE_LIST.map((code) => ({
    code,
    label: languageDisplayNames[code]
  }))

  const currentOption = options.find((opt) => opt.code === currentLanguageValue)

  const handleChange = useCallback(
    (_event: unknown, newValue: { code: string; label: string } | null) => {
      if (newValue) {
        const newLanguage = Language.create(newValue.code)
        const pathBuilder = new PathBuilder(newLanguage)
        router.push(pathBuilder.buildPath())
      }
    },
    [router]
  )

  return (
    <Autocomplete
      options={options}
      value={currentOption ?? undefined}
      onChange={handleChange}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option?.code === value?.code}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <TranslateIcon
                  sx={{ mr: 1, color: theme.palette.primary.main }}
                />
                {params.InputProps.startAdornment}
              </>
            )
          }}
          sx={{
            minWidth: 200,
            '& .MuiOutlinedInput-root': {
              height: 50,
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.contrastText,
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
        />
      )}
      disableClearable
      ListboxProps={{
        sx: {
          '& .MuiAutocomplete-option': {
            '&.Mui-selected': {
              backgroundColor: 'silver !important'
            },
            '&:hover': {
              backgroundColor: 'silver'
            }
          }
        }
      }}
    />
  )
}
