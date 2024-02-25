'use client'
import { Header } from 'src/components/feature/Header'
import { Hero } from './internal/Hero'
import { AppList } from './internal/AppList'
import { SnsLink } from './internal/SnsLink'
import { Footer } from 'src/components/feature/Footer'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { scrollYState } from 'src/stores/scrollY/scrollYContext'

function IndexPage() {
  const setScrollY = useSetRecoilState(scrollYState)

  const handleScroll = () => {
    const newY = window.scrollY
    setScrollY(newY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <>
      <Header />
      <Hero />
      <AppList />
      <SnsLink />
      <Footer />
    </>
  )
}
export default IndexPage
