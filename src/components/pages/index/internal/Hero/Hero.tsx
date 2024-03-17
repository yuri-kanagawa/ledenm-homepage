import React from 'react'
import { Box } from '@mui/material'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { getMovieHeight } from 'src/style/videoStyle'

export const Hero: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <Box sx={{ backgroundColor: 'black' }} height={getMovieHeight(width)}>
      <video width={'100%'} height={getMovieHeight(width)} autoPlay muted>
        <source src='/movie/op.mp4' type='video/mp4' />
      </video>
    </Box>
  )
}
