import { FC } from 'react'
import { Grid } from '@mui/material'
import InheritColorTypography from './CustomTypography'

interface IKeyValuePairProps {
  value: string
  label: string
}

const KeyValuePair: FC<IKeyValuePairProps> = ({ value, label }) => (
  <Grid container spacing={1} className="flex flex-col">
    <Grid item xs={12}>
      <InheritColorTypography fontSize={14} fontWeight={'bold'} color={'GrayText'}>
        {label}
      </InheritColorTypography>
    </Grid>
    <Grid item xs={12}>
      <InheritColorTypography fontSize={12}>{value}</InheritColorTypography>
    </Grid>
  </Grid>
)

export default KeyValuePair
