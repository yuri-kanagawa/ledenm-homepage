import styled from '@emotion/styled'
import { Select, SelectProps } from '@mui/material'
import { theme } from 'src/stores/thema/thema'

type Props = SelectProps & {
  isBackgroundBlack: boolean
}
export const StyledSelect = styled(Select)<Props>((props: Props) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  '&.MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: props.isBackgroundBlack
        ? theme.palette.secondary.contrastText
        : theme.palette.secondary.main
    },
    '&.Mui-focused fieldset': {
      borderColor: props.isBackgroundBlack
        ? theme.palette.secondary.contrastText
        : theme.palette.secondary.main
    }
  }
}))
