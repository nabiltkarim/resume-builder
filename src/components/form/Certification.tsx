import { FC } from 'react'

import { ExperienceTracker } from '../common/ExperienceTracker'
import { certificationsDefaultState } from '../../utils/constants'

const Certification: FC = () => {
  return (
    <ExperienceTracker
      fieldName={'certifications'}
      defaultState={certificationsDefaultState}
      nameLabel={'Certificate'}
      startDateLabel={'Date Issued'}
      namePlaceholder={'AWS Associate Certification'}
      descriptionPlaceholder={'Lorem Ipsum'}
      descriptionLabel="Certification Details"
      formTitle={'Certifications'}
      emptyPlaceholder={'No certifications added'}
      enableInstitution={false}
      enableLocation={false}
      enableEndDate={false}
      enableDescription={true}
    />
  )
}

export default Certification
