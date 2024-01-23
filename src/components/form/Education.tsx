import { FC } from 'react'

import { ExperienceTracker } from '../common/ExperienceTracker'
import { educationDefaultState } from '../../utils/constants'

const Education: FC = () => {
  return (
    <ExperienceTracker
      fieldName={'educations'}
      defaultState={educationDefaultState}
      nameLabel={'Degree'}
      institutionLabel={'School'}
      startDateLabel={'Start Date'}
      endDateLabel={'End Date'}
      namePlaceholder={'Bachelors in Computer Science'}
      institutionPlaceholder={'Harvard University'}
      descriptionPlaceholder={'Lorem Ipsum'}
      formTitle={'Education'}
      emptyPlaceholder={'No education experiences added'}
      enableInstitution={true}
      enableLocation={false}
      enableEndDate={true}
      enableDescription={false}
    />
  )
}

export default Education
