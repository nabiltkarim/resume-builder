import { CirclePicker } from 'react-color'
import { FC } from 'react'
import InheritColorTypography from '../common/CustomTypography'

interface IColorPickerProps {
  readonly value: string
  readonly label: string
  readonly onChange: (id: { hex: any }) => void
}

const ColorPicker: FC<IColorPickerProps> = ({ value, label, onChange }) => {
  const handleChange = (color: { hex: any }) => {
    onChange(color)
  }

  return (
    <>
      <InheritColorTypography variant="body2" marginBottom={2} fontWeight={'bold'} color={'InactiveCaptionText'}>
        {label}
      </InheritColorTypography>
      <CirclePicker
        color={value}
        onChangeComplete={handleChange}
        width="212px"
        colors={[
          '#f44336',
          '#e91e63',
          '#9c27b0',
          '#673ab7',
          '#3f51b5',
          '#2196f3',
          '#03a9f4',
          '#00bcd4',
          '#009688',
          '#4caf50',
          '#8bc34a',
          '#cddc39',
          '#ffeb3b',
          '#ffc107',
          '#ff9800',
          '#ff5722',
          '#795548',
          '#607d8b',
          '#FFFFFF',
          '#000000',
        ]}
      />
    </>
  )
}

export default ColorPicker
