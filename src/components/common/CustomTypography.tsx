import { Typography, TypographyProps } from '@mui/material'

const InheritColorTypography = (props: TypographyProps) => (
  <Typography color="inherit" fontFamily={'inherit'} {...props} />
)

export default InheritColorTypography
