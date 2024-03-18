'use client'
import { AppBar, Box, Fade, Stack, Toolbar } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useLocale } from 'src/hooks/useLocal'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import { scrollToTop } from 'src/utils/scroll'
import { useRecoilValue } from 'recoil'
import { scrollYState } from 'src/stores/scrollY/scrollYContext'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { getMovieHeight } from 'src/style/videoStyle'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import MenuIcon from '@mui/icons-material/Menu'

import { HeaderRight } from 'src/components/feature/Header/internal/HeaderRight/HeaderRight'

export const Header: React.FC = () => {
  const { t } = useLocale()
  const scrollY = useRecoilValue(scrollYState)
  const { height } = useWindowSize()
  const { isMobileSize } = useMediaQuerySize()
  const isBackgroundBlack = useMemo(() => {
    return scrollY < getMovieHeight(height)
  }, [height, scrollY])

  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const isMobileWithOpenMenu = isOpen && isMobileSize
  return (
    <>
      <AppBar
        sx={{
          backgroundColor:
            isBackgroundBlack && isMobileWithOpenMenu
              ? 'black'
              : isBackgroundBlack
                ? 'transparent'
                : 'white',
          width: '100vw'
        }}
        position='sticky'
      >
        <Toolbar sx={{ my: 1 }}>
          <IconButton onClick={scrollToTop}>
            <Image
              src='icon/lily.svg'
              alt={'Home'}
              width='60'
              height='60'
              style={{ filter: isBackgroundBlack ? 'invert(100%)' : '' }}
            />
          </IconButton>
          <Box flexGrow={1} />
          {isMobileSize ? (
            <IconButton
              size='large'
              edge='start'
              sx={{ color: isBackgroundBlack ? 'white' : 'black' }}
              aria-label='menu'
              onClick={onClickMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <HeaderRight isBackgroundBlack={isBackgroundBlack} />
          )}
        </Toolbar>

        {isMobileWithOpenMenu && (
          <Fade in={isMobileWithOpenMenu}>
            <Stack spacing={2} px={5} pb={2}>
              <HeaderRight isBackgroundBlack={isBackgroundBlack} />
            </Stack>
          </Fade>
        )}
      </AppBar>
    </>
  )
}
