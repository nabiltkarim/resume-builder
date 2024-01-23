import { ChangeEvent } from 'react'
import { Grid, InputAdornment, TextField } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import BadgeIcon from '@mui/icons-material/Badge'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PublicIcon from '@mui/icons-material/Public'
import HomeIcon from '@mui/icons-material/Home'
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture'
import { ListTracker } from '../common/ListTracker'
import { useResumeFormContext } from '../../context/resume-form'
import { languagesDefaultState } from '../../utils/constants'

const PersonalInfo = () => {
  const {
    values: { personalInfo },
    setField,
  } = useResumeFormContext()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    if (personalInfo) {
      setField('personalInfo', {
        ...personalInfo,
        [fieldName]: fieldValue,
      })
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="First Name"
          type="text"
          placeholder="Enter First Name"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.firstName || ''}
          name="firstName"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name"
          type="text"
          placeholder="Enter Last Name"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.lastName || ''}
          name="lastName"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.email || ''}
          name="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Phone"
          type="tel"
          placeholder="Enter phone number"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.phone || ''}
          name="phone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Current Position"
          type="text"
          placeholder="Software Developer"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.currentPosition || ''}
          name="currentPosition"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PictureInPictureIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Address"
          type="text"
          placeholder="Enter address"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.address || ''}
          name="address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Website URL"
          type="url"
          placeholder="https://abc.com/"
          onChange={handleChangeInput}
          className="w-full"
          value={personalInfo?.websiteUrl || ''}
          name="websiteUrl"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Basic Info"
          type="text"
          placeholder="Describe yourself in few words"
          value={personalInfo?.info || ''}
          onChange={handleChangeInput}
          className="w-full h-24"
          name="info"
          multiline
          rows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <ListTracker
          fieldName={'languages'}
          defaultState={languagesDefaultState}
          label={'Add your specialised languages'}
          formTitle={'Languages'}
          emptyPlaceholder={'No languages added'}
          textPlaceholder="English"
        />
      </Grid>
    </Grid>
  )
}

export default PersonalInfo
