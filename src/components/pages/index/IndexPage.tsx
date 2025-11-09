'use client'
import { Hero } from './internal/Hero'
import { AppList } from './internal/AppList'
import { SnsLink } from './internal/SnsLink'
import { Footer } from 'src/components/feature/Footer'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { scrollYState } from 'src/stores/scrollY/scrollYContext'
import { Language } from 'src/domains/valueObjects/language/Language'
import { useLocale } from 'src/hooks/useLocal'
import { Box } from '@mui/material'
import { Header } from 'src/components/feature/Header'

type Props = {
  language: Language
}

function IndexPage(props: Props) {
  const setScrollY = useSetRecoilState(scrollYState)
  const { language, setLanguage } = useLocale()
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
    if (props.language && props.language.value !== language.value) {
      setLanguage(props.language)
    }
  }, [language.value, props.language, setLanguage])

  const [isOpen, setIsOpen] = useState(false)
  const onClickClose = () => setIsOpen(false)
  return (
    <>
      <Header language={language} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box sx={{ overflow: 'hidden' }} onClick={onClickClose}>
        <Hero />
        <AppList language={language} />
        <SnsLink language={language} />
        <Footer />
      </Box>
    </>
  )
}

export default IndexPage
