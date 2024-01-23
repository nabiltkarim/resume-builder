import { FC } from 'react'

import { ListTracker } from '../common/ListTracker'
import { skillsDefaultState } from '../../utils/constants'

const Skills: FC = () => {
  return (
    <ListTracker
      fieldName={'skills'}
      defaultState={skillsDefaultState}
      label={'Add your top skills'}
      formTitle={'Skills'}
      emptyPlaceholder={'No skills added'}
      textPlaceholder="Team Building"
    />
  )
}

export default Skills
