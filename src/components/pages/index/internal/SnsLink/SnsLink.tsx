import { Box, Grid, Typography } from '@mui/material'
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { useLocale } from 'src/hooks/useLocal'

import IconButton from '@mui/material/IconButton'
import {
  BiliBiliIconSize,
  DefaultIconSize,
  createIconSizeCalculator,
  IconSizeMediaType,
  TikTokIconSize,
  ColumnSpacingMediaType,
  getColumnSpacing
} from 'src/components/pages/index/internal/SnsLink/utils'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { IconButtonWhiteStyle } from 'src/style/iconStyle'
import { scrollHome } from 'src/constants/scroll'

export const SnsLink = () => {
  const { t, lang } = useLocale()
  const { isTabletSize, isMobileSize, isLaptopSize, isOverTabletSize } =
    useMediaQuerySize()

  const columnSpacingMedia: ColumnSpacingMediaType = {
    isOverTabletSize,
    isTabletSize
  }

  const columnSpacing = getColumnSpacing(columnSpacingMedia)

  const iconSizeMedia: IconSizeMediaType = {
    isTabletSize,
    isMobileSize,
    isLaptopSize
  }

  const getIconSize = createIconSizeCalculator(iconSizeMedia)

  return (
    <Box id={scrollHome.contact} sx={{ background: 'black' }}>
      <Typography
        sx={{ textAlign: 'center', fontSize: 40, mb: 2, color: 'white' }}
      >
        {t.contact}
      </Typography>
      <Grid
        container
        sx={{ justifyContent: 'center', pb: 4 }}
        columnSpacing={columnSpacing}
      >
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle}>
            <AiOutlineTwitter size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle}>
            <AiOutlineInstagram size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle}>
            <AiFillYoutube size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle}>
            <BsTiktok
              size={getIconSize(TikTokIconSize)}
              style={{ marginBottom: 10 }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}
