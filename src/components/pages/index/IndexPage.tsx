'use client'
import { Hero } from './internal/Hero'
import { AppList } from './internal/AppList'
import { SnsLink } from './internal/SnsLink'
import { Footer } from 'src/components/feature/Footer'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { scrollYState } from 'src/stores/scrollY/scrollYContext'
import { langState } from 'src/stores/lang/langContext'
import { LanguageType } from 'src/constants/languages'
import { Box } from '@mui/material'
import { Header } from 'src/components/feature/Header'


type Props = {
  locale?: string
}

function IndexPage(props: Props) {
  const locale = props.locale
  const setScrollY = useSetRecoilState(scrollYState)
  const [lang, setLang] = useRecoilState(langState)
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
  useEffect(() => {
    if (locale != undefined && locale != lang) {
      setLang(locale as LanguageType)
    }
  }, [lang, locale, setLang])
  return (
    <>
      <Header />
      <Box sx={{ overflow: 'hidden' }}>
        <Hero />
        <AppList />
        <SnsLink />
        <Footer />
      </Box>
    </>
  )
}

export default IndexPage
