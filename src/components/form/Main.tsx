import { FC, SyntheticEvent, useCallback, useState } from 'react'
import { Box } from '@mui/material'
import NavTabs from './NavTabs'
import PersonalInfo from './PersonalInfo'
import { navigationTabs } from '../../utils/constants'
import UploadPic from './UploadPic'
import Skills from './Skills'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Certification from './Certification'

const Form: FC = () => {
  const [value, setValue] = useState(navigationTabs[0].value)

  const handleChange = useCallback(
    (_event: SyntheticEvent, newValue: string) => {
      setValue(newValue)
    },
    [setValue],
  )

  const renderFormSteps = useCallback(() => {
    switch (value) {
      case 'profilePic':
        return <UploadPic fieldName="profilePic" />
      case 'experiences':
        return <WorkExperience />
      case 'education':
        return <Education />
      case 'skills':
        return <Skills />
      case 'certifications':
        return <Certification />
      case 'watermark':
        return <UploadPic fieldName="watermarkPic" />

      default:
        return <PersonalInfo />
    }
  }, [value])

  return (
    <>
      <NavTabs value={value} handleChange={handleChange} />
      <Box className="p-10">{renderFormSteps()}</Box>
    </>
  )
}

export default Form
