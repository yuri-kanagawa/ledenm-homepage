import { useLayoutEffect, useState } from 'react'

type WindowSizeType = {
  width: number
  height: number
}
export const useWindowSize = (): WindowSizeType => {
  const [size, setSize] = useState<WindowSizeType>({ width: 0, height: 0 })
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return {
    width: size.width,
    height: size.height
  }
}
