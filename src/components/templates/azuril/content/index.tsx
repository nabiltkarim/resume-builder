import { FC } from 'react'
import { Divider, Grid } from '@mui/material'
import ExperienceInfo from './ExperienceInfo'
import CertificationInfo from './CertificationInfo'
import InheritColorTypography from '../../../common/CustomTypography'
import { useResumeFormContext } from '../../../../context/resume-form'

const Content: FC = () => {
  const { values } = useResumeFormContext()

  return (
    <div className={'pt-6 pb-2 px-4'}>
      {values.personalInfo?.watermarkPic && (
        <Grid item>
          <img
            src={values.personalInfo?.watermarkPic}
            alt="Watermark"
            className="p-4 h-16 absolute bottom-0 right-0 opacity-50 z-10"
          />
        </Grid>
      )}
      <InheritColorTypography variant="h5">
        <b>{values.personalInfo?.firstName}</b> {values.personalInfo?.lastName}
      </InheritColorTypography>
      <InheritColorTypography fontSize={13}>{values.personalInfo?.currentPosition}</InheritColorTypography>
      <InheritColorTypography variant="body2" className="pt-4 pb-7">
        {values.personalInfo?.info}
      </InheritColorTypography>

      {values.experiences?.length ? (
        <Grid container spacing={3} className="mb-4">
          <Grid item xs={12}>
            <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
              Experience
            </InheritColorTypography>
            <Divider className="bg-gray-700" sx={{ marginTop: 1 }} />
          </Grid>

          {values.experiences.map((experience) => (
            <ExperienceInfo
              position={experience.position}
              company={experience.company}
              location={experience.location!}
              startDate={experience.startDate}
              endDate={experience.endDate!}
              description={experience.description}
              key={experience.id}
            />
          ))}
        </Grid>
      ) : null}

      {values.certifications?.length ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InheritColorTypography variant="h6" sx={{ fontWeight: 'bold' }}>
              Certification
            </InheritColorTypography>
            <Divider className="bg-gray-700" sx={{ marginTop: 1 }} />
          </Grid>

          {values.certifications.map((certification) => (
            <CertificationInfo
              degree={certification.degree}
              startDate={certification.startDate}
              description={certification.description!}
              key={certification.id}
            />
          ))}
        </Grid>
      ) : null}
    </div>
  )
}

export default Content
