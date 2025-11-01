import { Box, Grid, Typography } from '@mui/material'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { useLocale } from 'src/hooks/useLocal'

import IconButton from '@mui/material/IconButton'
import {
  ColumnSpacingMediaType,
  createIconSizeCalculator,
  DefaultIconSize,
  getColumnSpacing,
  IconSizeMediaType,
  TikTokIconSize
} from 'src/components/pages/index/internal/SnsLink/utils'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { IconButtonWhiteStyle } from 'src/style/iconStyle'
import { scrollHome } from 'src/constants/scroll'

export const SnsLink = () => {
  const { t } = useLocale()
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

  const openTab = (url: string) => window.open(url)

  const onClickYouTube = () => openTab(t.sns.YouTube)
  const onClickTwitter = () => openTab(t.sns.twitter)

  const onClickInstagram = () => openTab(t.sns.instagram)

  const ontClickTikToke = () => openTab(t.sns.TikTok)

  return (
    <Box id={scrollHome.contact} sx={{ background: 'black' }}>
      <Typography
        sx={{ textAlign: 'center', fontSize: 40, mb: 2, color: 'white' }}
      >
        {t.words.contact}
      </Typography>
      <Grid
        container
        sx={{ justifyContent: 'center', pb: 4 }}
        columnSpacing={columnSpacing}
      >
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle} onClick={onClickTwitter}>
            <AiOutlineTwitter size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle} onClick={onClickInstagram}>
            <AiOutlineInstagram size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle} onClick={onClickYouTube}>
            <AiFillYoutube size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonWhiteStyle} onClick={ontClickTikToke}>
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
