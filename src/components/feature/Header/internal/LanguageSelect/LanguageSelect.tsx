'use client'

import { Autocomplete, TextField } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

import { Locale } from 'src/domains'
import { PathBuilder } from 'src/lib/routing'
import { theme } from 'src/stores/thema/thema'

type Props = {
  isBackgroundBlack: boolean
  locale: Locale
}
export const LanguageSelect: React.FC<Props> = ({
  isBackgroundBlack,
  locale
}) => {
  const router = useRouter()

  const displayNames = Locale.getDisplayNames()
  const currentCode = locale.value

  const options = Locale.LIST.map((code) => ({
    code,
    label: displayNames[code]
  }))

  const currentOption = options.find((opt) => opt.code === currentCode)

  const handleChange = useCallback(
    (_event: unknown, newValue: { code: string; label: string } | null) => {
      if (newValue) {
        const nextLocale = Locale.create(newValue.code)
        const pathBuilder = new PathBuilder(nextLocale)
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
