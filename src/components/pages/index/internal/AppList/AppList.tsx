'use client'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { AppCard } from './internal/AppCard'
import { useMemo } from 'react'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { scrollHome } from 'src/constants/scroll'
import { Locale } from 'src/domains'

type Props = {
  locale: Locale
}

export const AppList = ({ locale }: Props) => {
  const { words } = locale.definition
  const apps = locale.apps
  const { isDesktopSize, isLaptopSize, isTabletSize } = useMediaQuerySize()

  const columnSpacing = useMemo(() => {
    if (isDesktopSize || isLaptopSize) return 5
    if (isTabletSize) return 3
    return 1
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
          {words.app}
        </Typography>
        <Grid
          container
          sx={{ justifyContent: 'center', pb: 4 }}
          columnSpacing={columnSpacing}
        >
          {apps.map((app, index) => (
            <AppCard key={index} appName={app.name} explain={app.explain} />
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}
