import { FC } from 'react'

import { ExperienceTracker } from '../common/ExperienceTracker'
import { experienceDefaultState } from '../../utils/constants'

const WorkExperience: FC = () => {
  return (
    <ExperienceTracker
      fieldName={'experiences'}
      defaultState={experienceDefaultState}
      nameLabel={'Position'}
      institutionLabel={'Company Name'}
      locationLabel={'Location'}
      startDateLabel={'Start Date'}
      endDateLabel={'End Date'}
      descriptionLabel={'Job Responsibilities'}
      namePlaceholder={'Joe World'}
      institutionPlaceholder={'LinkedIn'}
      locationPlaceholder={'Bangkok, Thailand'}
      descriptionPlaceholder={'Lorem Ipsum'}
      formTitle={'Experiences'}
      emptyPlaceholder={'No experiences added'}
      enableInstitution={true}
      enableLocation={true}
      enableEndDate={true}
      enableDescription={true}
    />
  )
}

export default WorkExperience
