'use client'
import { AppBar, Collapse, Grid, Stack, Toolbar } from '@mui/material'
import React, { useMemo } from 'react'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import { scrollToTop } from 'src/utils/scroll'
import { useRecoilValue } from 'recoil'
import { scrollYState } from 'src/stores/scrollY/scrollYContext'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { getMovieHeight } from 'src/style/videoStyle'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import MenuIcon from '@mui/icons-material/Menu'

import { HeaderRight } from 'src/components/feature/Header/internal/HeaderRight'

type Props = {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
}

export const Header: React.FC<Props> = (props: Props) => {
  const { isOpen, setIsOpen } = props
  const scrollY = useRecoilValue(scrollYState)
  const { width } = useWindowSize()
  const { isMobileSize } = useMediaQuerySize()
  const isBackgroundBlack = useMemo(() => {
    return scrollY < getMovieHeight(width)
  }, [width, scrollY])


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
          {isMobileSize &&
            <Grid container justifyContent={'space-between'} sx={{ pt: 1, pl: 2 }}>
              <IconButton onClick={scrollToTop}>
                <Image
                  src='icon/lily.svg'
                  alt={'Home'}
                  width='60'
                  height='60'
                  style={{ filter: isBackgroundBlack ? 'invert(100%)' : '' }}
                />
              </IconButton>
              <IconButton
                size='large'
                edge='start'
                sx={{ color: isBackgroundBlack ? 'white' : 'black' }}
                aria-label='menu'
                onClick={onClickMenu}
              >
                <MenuIcon />
              </IconButton>
            </Grid>}
        </Toolbar>
        <Collapse in={isMobileWithOpenMenu}>
          <Toolbar>
            {isMobileSize && (
              <Stack spacing={2} py={2} sx={{ width: '100%' }}>

                {isMobileWithOpenMenu && (
                  <Collapse in={isMobileWithOpenMenu}>
                    <Stack spacing={2} py={2} sx={{ width: '100%' }}>

                      <HeaderRight isBackgroundBlack={isBackgroundBlack} />
                    </Stack>
                  </Collapse>
                )}
              </Stack>
            )}

          </Toolbar>
        </Collapse>
      </AppBar>


    </>
  )
}
