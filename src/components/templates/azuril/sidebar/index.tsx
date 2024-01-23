import { FC } from 'react'
import { Avatar, Grid, Divider, Stack } from '@mui/material'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import { useResumeFormContext } from '../../../../context/resume-form'
import InheritColorTypography from '../../../common/CustomTypography'

interface ISidebarProps {
  primaryColor: string
}

const Sidebar: FC<ISidebarProps> = ({ primaryColor }) => {
  const { values } = useResumeFormContext()

  return (
    <div className={`text-white h-full py-8`} style={{ backgroundColor: primaryColor }}>
      <Avatar
        alt="Profile Picture"
        src={values.personalInfo?.profilePic || ''}
        sx={{ width: 120, height: 120, margin: 'auto' }}
      />
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 300,
          paddingLeft: 5,
          marginTop: 2,
        }}
      >
        <Grid item xs={12}>
          <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
            Contact
          </InheritColorTypography>
          <Divider sx={{ backgroundColor: 'white', marginTop: 1 }} />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" spacing={1}>
            <ContactInfo contactKey={'Phone'} contactValue={values.personalInfo?.phone || '123-456-7890'} />
            <ContactInfo
              contactKey={'Email'}
              contactValue={values.personalInfo?.email || 'hello@reallygreatsite.com'}
            />
            <ContactInfo contactKey={'Website'} contactValue={values.personalInfo?.websiteUrl || 'https://abc.com'} />
            <ContactInfo
              contactKey={'Address'}
              contactValue={values.personalInfo?.address || '123 Anywhere St., Any City'}
            />
          </Stack>
        </Grid>

        {values.educations?.length ? (
          <>
            <Grid item xs={12}>
              <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
                Education
              </InheritColorTypography>
              <Divider sx={{ backgroundColor: 'white', marginTop: 1 }} />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="column" spacing={2}>
                {values.educations.map((education) => (
                  <EducationInfo
                    degree={education.degree}
                    school={education.school}
                    startDate={education.startDate!}
                    endDate={education.endDate}
                    key={education.id}
                  />
                ))}
              </Stack>
            </Grid>
          </>
        ) : null}

        {values.skills?.length ? (
          <>
            <Grid item xs={12}>
              <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
                Expertise
              </InheritColorTypography>
              <Divider sx={{ backgroundColor: 'white', marginTop: 1 }} />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="column" spacing={2}>
                <Stack>
                  {values.skills.map((skill) => (
                    <InheritColorTypography variant="body2" gutterBottom key={skill.id}>
                      {skill.value}
                    </InheritColorTypography>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </>
        ) : null}

        {values.languages?.length ? (
          <>
            <Grid item xs={12}>
              <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
                Language
              </InheritColorTypography>
              <Divider sx={{ backgroundColor: 'white', marginTop: 1 }} />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="column" spacing={2}>
                <Stack>
                  {values.languages.map((language) => (
                    <InheritColorTypography variant="body2" gutterBottom key={language.id}>
                      {language.value}
                    </InheritColorTypography>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </>
        ) : null}
      </Grid>
    </div>
  )
}

export default Sidebar
