import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { IconButtonWhiteStyle } from 'src/style/iconStyle'
import { scrollToTop } from 'src/utils/scroll'
export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Typography sx={{ color: 'white' }}>
        ©{' '}
        <Button onClick={scrollToTop} sx={{ ...IconButtonWhiteStyle, pb: 1 }}>
          ledenm
        </Button>
      </Typography>
    </Box>
  )
}
