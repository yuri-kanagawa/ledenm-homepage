'use client'
import { AppBar, ClickAwayListener, Fade, Grid, Stack, Toolbar } from '@mui/material'
import React, { useMemo, useState } from 'react'
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
  const scrollY = useRecoilValue(scrollYState)
  const { height } = useWindowSize()
  const { isMobileSize } = useMediaQuerySize()
  const isBackgroundBlack = useMemo(() => {
    return scrollY < getMovieHeight(height) - 30
  }, [height, scrollY])
  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const onClickClose = () => setIsOpen(false)

  const isMobileWithOpenMenu = isOpen && isMobileSize
  return (
    <ClickAwayListener onClickAway={onClickClose}>
      <AppBar
        sx={{
          backgroundColor:
            isBackgroundBlack && isMobileWithOpenMenu
              ? 'black'
              : isBackgroundBlack
                ? 'transparent'
                : 'white'
        }}
        position='sticky'

      >
        <Toolbar>
          {!isMobileSize &&
            <>
              <IconButton onClick={scrollToTop}>
                <Image
                  src='icon/lily.svg'
                  alt={'Home'}
                  width='60'
                  height='60'
                  style={{ filter: isBackgroundBlack ? 'invert(100%)' : '' }}
                />
              </IconButton>
              <Grid container justifyContent='flex-end' alignItems='center'>
                <HeaderRight isBackgroundBlack={isBackgroundBlack} />
              </Grid>
            </>}

          {isMobileSize && (
            <Stack spacing={2} py={2} sx={{ width: '100%' }}>
              <Grid container justifyContent={'space-between'}>
                <Image
                  src='icon/lily.svg'
                  alt={'Home'}
                  width='60'
                  height='60'
                  style={{ filter: isBackgroundBlack ? 'invert(100%)' : '' }}
                />
                <IconButton
                  size='large'
                  edge='start'
                  sx={{ color: isBackgroundBlack ? 'white' : 'black' }}
                  aria-label='menu'
                  onClick={onClickMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              {isMobileWithOpenMenu && (
                <Fade in={isMobileWithOpenMenu}>
                  <Stack spacing={2} py={2} sx={{ width: '100%' }}>

                    <HeaderRight isBackgroundBlack={isBackgroundBlack} />
                  </Stack>
                </Fade>
              )}
            </Stack>
          )}

        </Toolbar>
      </AppBar>
    </>
  )
}
