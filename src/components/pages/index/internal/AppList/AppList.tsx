'use client'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { AppCard } from './internal/AppCard'
import { getAppList } from './utils'
import { useLocale } from 'src/hooks/useLocal'
import { useMemo } from 'react'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { scrollHome } from 'src/constants/scroll'

export const AppList = () => {
  const { lang, t } = useLocale()
  const { isDesktopSize, isLaptopSize, isTabletSize } = useMediaQuerySize()

  const columnSpacing = useMemo(() => {
    if (isDesktopSize || isLaptopSize) return 5
    else if (isTabletSize) return 3
    else return 1
  }, [isDesktopSize, isLaptopSize, isTabletSize])
  return (
    <Box
      id={scrollHome.app}
      sx={{
        background: 'white'
      }}
    >
      <Stack spacing={2}>
        <Typography sx={{ textAlign: 'center', fontSize: 40, mb: 2 }}>
          {t.app}
        </Typography>
        <Grid
          container
          sx={{ justifyContent: 'center', pb: 4 }}
          columnSpacing={columnSpacing}
        >
          {getAppList(t).map((e, index) => (
            <AppCard key={index} productName={e.name} explain={e.explain} />
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}
