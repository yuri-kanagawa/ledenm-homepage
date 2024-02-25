'use client'
import { Header } from 'src/components/feature/Header'
import { Hero } from 'src/components/pages/index/internal/Hero/Hero'
import { AppList } from 'src/components/pages/index/internal/AppList'
import { SnsLink } from 'src/components/pages/index/internal/SnsLink'
import { Footer } from 'src/components/feature/Footer/Footer'
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
