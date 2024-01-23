import { FC } from 'react'
import { Grid, Stack } from '@mui/material'
import InheritColorTypography from '../../../common/CustomTypography'
import { formatDate } from '../../../../utils/index'

interface ICertificationInfoProps {
  degree: string
  startDate: string
  description: string
}

const CertificationInfo: FC<ICertificationInfoProps> = ({ degree, startDate, description }) => (
  <Grid item xs={12}>
    <Stack direction="column" spacing={2}>
      <Stack>
        <InheritColorTypography variant="body1" fontWeight="fontWeightBold">
          {degree}
        </InheritColorTypography>
        <InheritColorTypography variant="body2" fontSize={11} gutterBottom>
          {formatDate(startDate)}
        </InheritColorTypography>
        <InheritColorTypography variant="body2">{description}</InheritColorTypography>
      </Stack>
    </Stack>
  </Grid>
)

export default CertificationInfo
