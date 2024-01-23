import { ChangeEvent, FC } from 'react'
import { Avatar, Button, Grid } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { useResumeFormContext } from '../../context/resume-form'

interface IUploadPicProps {
  fieldName: 'profilePic' | 'watermarkPic'
}

const UploadPic: FC<IUploadPicProps> = ({ fieldName }) => {
  const {
    values: { personalInfo },
    setField,
  } = useResumeFormContext()

  const handleUploadClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = function () {
        setField('personalInfo', {
          ...personalInfo,
          [fieldName]: reader.result as string,
        })
      }
    }
  }

  return (
    <Grid container padding={4} flexDirection={'column'} alignContent={'center'}>
      {personalInfo?.[fieldName] && (
        <Avatar alt="Picture" src={personalInfo?.[fieldName]} sx={{ width: 150, height: 150, marginBottom: 10 }} />
      )}

      <Button component="label" variant="contained" className="w-fit" startIcon={<AddPhotoAlternateIcon />}>
        Upload Image
        <input accept="image/*" className={'hidden'} type="file" onChange={handleUploadClick} />
      </Button>
    </Grid>
  )
}

export default UploadPic
