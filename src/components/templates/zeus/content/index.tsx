import { FC } from 'react'
import { Grid } from '@mui/material'
import ExperienceInfo from './ExperienceInfo'
import CertificationInfo from './CertificationInfo'
import InheritColorTypography from '../../../common/CustomTypography'
import { useResumeFormContext } from '../../../../context/resume-form'

const Content: FC = () => {
  const { values } = useResumeFormContext()

  return (
    <Grid container className="pt-2" flexDirection={'column'}>
      {values.personalInfo?.watermarkPic && (
        <Grid item>
          <img
            src={values.personalInfo?.watermarkPic}
            alt="Watermark"
            className="p-4 h-16 absolute bottom-0 right-0 opacity-50 z-10"
          />
        </Grid>
      )}
      <Grid item>
        <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
          About Me
        </InheritColorTypography>
        <InheritColorTypography variant="body1" className="pt-4 pb-7">
          {values.personalInfo?.info ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum.'}
        </InheritColorTypography>
      </Grid>

      {values.experiences?.length ? (
        <Grid item>
          <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
            Experience
          </InheritColorTypography>
          <Grid container spacing={3} className="py-4">
            {values.experiences?.map((experience) => (
              <ExperienceInfo
                position={experience.position}
                company={experience.company}
                location={experience.location || ''}
                startDate={experience.startDate}
                endDate={experience.endDate || ''}
                description={experience.description}
                key={experience.id}
              />
            ))}
          </Grid>
        </Grid>
      ) : null}

      {values.certifications?.length ? (
        <Grid item>
          <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
            Certification
          </InheritColorTypography>
          <Grid container spacing={3} className="py-4">
            {values.certifications?.map((certification) => (
              <CertificationInfo
                degree={certification.degree}
                startDate={certification.startDate}
                description={certification.description || ''}
                key={certification.id}
              />
            ))}
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  )
}

export default Content
