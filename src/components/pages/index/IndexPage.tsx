'use client'
import { Hero } from './internal/Hero'
import { AppList } from './internal/AppList'
import { SnsLink } from './internal/SnsLink'
import { Footer } from 'src/components/feature/Footer'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { scrollYState } from 'src/stores/scrollY/scrollYContext'
import { Locale } from 'src/domains'

import { Box } from '@mui/material'
import { Header } from 'src/components/feature/Header'

type Props = {
  locale: Locale
}

function IndexPage({ locale }: Props) {
  const setScrollY = useSetRecoilState(scrollYState)

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY
      setScrollY(newY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setScrollY])

  const [isOpen, setIsOpen] = useState(false)
  const onClickClose = () => setIsOpen(false)
  return (
    <>
      <Header locale={locale} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box sx={{ overflow: 'hidden' }} onClick={onClickClose}>
        <Hero />
        <AppList locale={locale} />
        <SnsLink locale={locale} />
        <Footer />
      </Box>
    </>
  )
}

export default IndexPage
