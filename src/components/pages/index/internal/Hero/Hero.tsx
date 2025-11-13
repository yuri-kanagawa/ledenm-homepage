'use client'
import React, { useCallback, useRef } from 'react'
import { Box } from '@mui/material'

const HERO_ASPECT_RATIO = '16 / 9'

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleVideoEnded = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    const duration = video.duration
    if (!Number.isNaN(duration) && duration > 0) {
      video.currentTime = duration - 0.01
    }
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: HERO_ASPECT_RATIO,
        backgroundColor: 'black',
        overflow: 'hidden',
        maxHeight: '100vh'
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="/movie/op.mp4" type="video/mp4" />
      </video>
    </Box>
  )
}
