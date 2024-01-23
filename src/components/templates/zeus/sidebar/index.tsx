import { FC } from 'react'
import { List, ListItem, ListItemIcon, Grid, Stack } from '@mui/material'
import { Phone, Email, LocationOn, Public } from '@mui/icons-material'
import EducationInfo from './EducationInfo'
import InheritColorTypography from '../../../common/CustomTypography'
import { useResumeFormContext } from '../../../../context/resume-form'

const Sidebar: FC = () => {
  const { values } = useResumeFormContext()

  return (
    <div>
      <List>
        <ListItem sx={{ paddingX: 0 }}>
          <ListItemIcon sx={{ minWidth: 34 }}>
            <Phone />
          </ListItemIcon>
          <InheritColorTypography>{values.personalInfo?.phone || '+123 123 123'}</InheritColorTypography>
        </ListItem>
        <ListItem sx={{ paddingX: 0 }}>
          <ListItemIcon sx={{ minWidth: 34 }}>
            <Email />
          </ListItemIcon>
          <InheritColorTypography>{values.personalInfo?.email || 'hello@reallygreatsite.com'}</InheritColorTypography>
        </ListItem>
        <ListItem sx={{ paddingX: 0 }}>
          <ListItemIcon sx={{ minWidth: 34 }}>
            <Public />
          </ListItemIcon>
          <InheritColorTypography>
            {values.personalInfo?.websiteUrl || 'www.reallygreatsite.com'}
          </InheritColorTypography>
        </ListItem>
        <ListItem sx={{ paddingX: 0 }}>
          <ListItemIcon sx={{ minWidth: 34 }}>
            <LocationOn />
          </ListItemIcon>
          <InheritColorTypography>{values.personalInfo?.address || 'Location, World'}</InheritColorTypography>
        </ListItem>
      </List>

      {values.educations?.length ? (
        <Grid container rowSpacing={1} marginBottom={2}>
          <Grid item xs={12}>
            <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
              Education
            </InheritColorTypography>
          </Grid>
          {values.educations?.map((education) => (
            <EducationInfo
              degree={education.degree}
              school={education.school}
              startDate={education.startDate!}
              endDate={education.endDate}
              key={education.id}
            />
          ))}
        </Grid>
      ) : null}

      {values.skills?.length ? (
        <Grid container rowSpacing={1} marginBottom={2}>
          <Grid item xs={12}>
            <InheritColorTypography variant="h6" fontWeight={'bold'} gutterBottom>
              Expertise
            </InheritColorTypography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="column" spacing={2}>
              <Stack>
                {values.skills?.map((skill) => (
                  <InheritColorTypography fontSize={13} gutterBottom key={skill.id}>
                    {skill.value}
                  </InheritColorTypography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ) : null}

      {values.languages?.length ? (
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
              Language
            </InheritColorTypography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="column" spacing={2}>
              <Stack>
                {values.languages?.map((language) => (
                  <InheritColorTypography fontSize={13} gutterBottom key={language.id}>
                    {language.value}
                  </InheritColorTypography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ) : null}
    </div>
  )
}

export default Sidebar
