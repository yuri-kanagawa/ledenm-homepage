import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'

const HERO_ASPECT_RATIO = '16 / 9'

export const Hero: React.FC = () => {
  const [isVideoReady, setIsVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleVideoReady = useCallback(() => {
    setIsVideoReady(true)
  }, [])

  const handleVideoEnded = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    const duration = video.duration
    if (!Number.isNaN(duration) && duration > 0) {
      try {
        video.currentTime = duration - 0.01
      } catch (error) {
        console.warn('Failed to set video to last frame:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (!videoRef.current) return
    const playVideo = async () => {
      try {
        await videoRef.current?.play()
      } catch (error) {
        console.warn('Failed to autoplay hero video:', error)
      }
    }
    void playVideo()
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
        onLoadedData={handleVideoReady}
        onCanPlay={handleVideoReady}
        onLoadedMetadata={handleVideoReady}
        onEnded={handleVideoEnded}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isVideoReady ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <source src="/movie/op.mp4" type="video/mp4" />
      </video>
      {!isVideoReady && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'black'
          }}
        />
      )}
    </Box>
  )
}
