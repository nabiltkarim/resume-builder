import { FC } from 'react'
import { Stack } from '@mui/material'
import InheritColorTypography from '../../../common/CustomTypography'
import { formatDate } from '../../../../utils/index'

interface IEducationInfoProps {
  degree: string
  school: string
  startDate: string
  endDate: string
}

const EducationInfo: FC<IEducationInfoProps> = ({ degree, school, startDate, endDate }) => (
  <Stack>
    <InheritColorTypography variant="body2">
      {formatDate(startDate)} - {formatDate(endDate)}
    </InheritColorTypography>

    <InheritColorTypography variant="body1" fontWeight="fontWeightBold">
      {degree}
    </InheritColorTypography>
    <InheritColorTypography variant="body1" gutterBottom>
      {school}
    </InheritColorTypography>
  </Stack>
)

export default EducationInfo
