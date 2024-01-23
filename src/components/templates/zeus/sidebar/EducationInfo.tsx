import { FC } from 'react'
import { Grid, Stack } from '@mui/material'
import InheritColorTypography from '../../../common/CustomTypography'
import { formatDate } from '../../../../utils/index'

interface IEducationInfoProps {
  degree: string
  school: string
  startDate: string
  endDate: string
}

const EducationInfo: FC<IEducationInfoProps> = ({ degree, school, startDate, endDate }) => (
  <Grid item xs={12}>
    <Stack direction="column" spacing={2}>
      <Stack>
        <InheritColorTypography fontSize={14} fontWeight={'bold'}>
          {degree}
        </InheritColorTypography>

        <InheritColorTypography fontSize={12} fontWeight={'bold'}>
          {school}
        </InheritColorTypography>
        <InheritColorTypography variant="body1" gutterBottom>
          {formatDate(startDate)} - {formatDate(endDate)}
        </InheritColorTypography>
      </Stack>
    </Stack>
  </Grid>
)

export default EducationInfo
