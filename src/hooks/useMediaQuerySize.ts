import { useMediaQuery } from '@mui/material'
import { theme } from 'src/stores/thema/thema'

export function useMediaQuerySize() {
  const isMobileSize = useMediaQuery(() => theme.breakpoints.down('sm'))

  const isOverMobileSize = useMediaQuery(() => theme.breakpoints.up('sm'))
  const isLessTabletSize = useMediaQuery(() => theme.breakpoints.down('md'))
  const isTabletSize = isOverMobileSize && isLessTabletSize

  const isOverTabletSize = useMediaQuery(() => theme.breakpoints.up('md'))
  const isLessDesktop = useMediaQuery(() => theme.breakpoints.down('lg'))
  const isLaptopSize = isOverTabletSize && isLessDesktop

  const isOverDesktop = useMediaQuery(() => theme.breakpoints.up('lg'))

  return {
    isMobileSize,
    isOverMobileSize,
    isLessTabletSize,
    isTabletSize,
    isOverTabletSize,
    isLaptopSize,
    isLessDesktop,
    isDesktopSize: isOverDesktop
  }
}

export type MediaQueryType = ReturnType<typeof useMediaQuerySize>
