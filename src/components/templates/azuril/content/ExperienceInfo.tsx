import { FC } from 'react'
import { Grid, Stack } from '@mui/material'
import InheritColorTypography from '../../../common/CustomTypography'
import { formatDate } from '../../../../utils'

interface IExperienceInfoProps {
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

const ExperienceInfo: FC<IExperienceInfoProps> = ({ position, company, location, startDate, endDate, description }) => (
  <Grid item xs={12}>
    <Stack direction="column" spacing={2}>
      <Stack>
        <InheritColorTypography variant="body1" fontWeight="fontWeightBold">
          {formatDate(startDate)} - {formatDate(endDate)}
        </InheritColorTypography>
        <InheritColorTypography variant="body2" fontSize={11}>
          {company} | {location}
        </InheritColorTypography>
        <InheritColorTypography variant="body1" fontWeight="fontWeightBold" fontSize={13} gutterBottom>
          {position}
        </InheritColorTypography>
        <InheritColorTypography variant="body2">{description}</InheritColorTypography>
      </Stack>
    </Stack>
  </Grid>
)

export default ExperienceInfo
