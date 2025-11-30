'use client'
import { Box, Stack, Typography } from '@mui/material'
import { AppCard } from './internal/AppCard'
import { useEffect, useRef, useState } from 'react'
import { scrollHome } from 'src/constants/scroll'
import { Locale } from 'src/domains'

type Props = {
  locale: Locale
}

export const AppList = ({ locale }: Props) => {
  const { words } = locale.definition
  const apps = locale.apps
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isScrollingRight, setIsScrollingRight] = useState(true)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const startAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }

      scrollIntervalRef.current = setInterval(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const cardWidth = container.scrollWidth / apps.length
        const maxScroll = container.scrollWidth - container.clientWidth
        const currentScroll = container.scrollLeft

        let newScroll: number
        let newDirection = isScrollingRight

        if (isScrollingRight) {
          newScroll = currentScroll + cardWidth
          // 右端に到達したら左に戻る
          if (newScroll >= maxScroll) {
            newScroll = maxScroll
            newDirection = false
            setIsScrollingRight(false)
          }
        } else {
          newScroll = currentScroll - cardWidth
          // 左端に到達したら右に進む
          if (newScroll <= 0) {
            newScroll = 0
            newDirection = true
            setIsScrollingRight(true)
          }
        }

        container.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        })
      }, 4000) // 4秒ごとにスライド
    }

    startAutoScroll()

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }
    }
  }, [apps.length, isScrollingRight])

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
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 5,
            pb: 4,
            px: 5,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none'
          }}
        >
          {apps.map((app, index) => (
            <Box
              key={index}
              sx={{
                width: 'calc((100% - 160px) / 3)',
                minWidth: 'calc((100% - 160px) / 3)',
                flexShrink: 0,
                px: 0.5
              }}
            >
              <AppCard
                appName={app.name}
                explain={app.explain}
                url={
                  locale.isEnglish() ? app.url : `${app.url}/${locale.value}`
                }
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  )
}
