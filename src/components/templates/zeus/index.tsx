import { forwardRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Divider, Grid, Toolbar } from '@mui/material'
import Sidebar from './sidebar'
import Content from './content'
import InheritColorTypography from '../../common/CustomTypography'
import { useResumeFormContext } from '../../../context/resume-form'
import { ITemplateData } from '../../../types/template'

const Zeus = forwardRef<HTMLDivElement>((_, ref) => {
  const { templateId } = useParams<{ templateId: string }>()
  const [template, setTemplate] = useState<ITemplateData>()
  const {
    values: { personalInfo },
  } = useResumeFormContext()

  useEffect(() => {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]')
    const currentTemplate = templates.find((t: ITemplateData) => t.id === templateId)
    setTemplate(currentTemplate)
  }, [templateId])

  return (
    <Grid
      container
      direction="row"
      alignContent={'start'}
      spacing={4}
      style={{ font: `${template?.fontFamily || 'Arial'}` }}
      ref={ref}
    >
      <Grid item md={12}>
        <Toolbar style={{ backgroundColor: template?.primaryColor || 'GrayText' }} className={`h-10 w-full `}></Toolbar>
      </Grid>
      <Grid item md={12}>
        <Grid container className="flex-row px-16 items-center">
          <Grid item xs={12} md={5}>
            <Avatar
              alt="Profile Picture"
              src={personalInfo?.profilePic}
              sx={{ width: 150, height: 150 }}
              className="ring-4 ring-white"
            />
          </Grid>
          <Grid item xs={12} md={7} className="flex-row">
            <InheritColorTypography variant="h3" className="font-bold" fontFamily={'inherit'}>
              {personalInfo?.firstName ? `${personalInfo?.firstName} ${personalInfo?.lastName}` : 'John Doe'}
            </InheritColorTypography>
            <InheritColorTypography variant="h6" gutterBottom>
              {`${personalInfo?.currentPosition}` || 'Art Director'}
            </InheritColorTypography>
            <Divider className="w-full bg-gray-700 h-[2px] mb-4" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container className="flex-row px-16 items-start">
          <Grid item xs={12} md={5}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={7}>
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})

export default Zeus
