import { FC } from 'react'
import { Stack } from '@mui/material'
import InheritColorTypography from '../../../common/CustomTypography'

interface IContactInfoProps {
  contactKey: string
  contactValue: string
}

const ContactInfo: FC<IContactInfoProps> = ({ contactKey, contactValue }) => (
  <Stack>
    <InheritColorTypography fontSize={13} fontWeight="fontWeightBold">
      {contactKey}
    </InheritColorTypography>

    <InheritColorTypography fontSize={12} gutterBottom>
      {contactValue}
    </InheritColorTypography>
  </Stack>
)

export default ContactInfo
