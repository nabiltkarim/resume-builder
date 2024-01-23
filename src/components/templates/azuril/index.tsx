import { forwardRef, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import Sidebar from './sidebar'
import Content from './content'
import { ITemplateData } from '../../../types/template'

const Azuril = forwardRef<HTMLDivElement>((_, ref) => {
  const { templateId } = useParams<{ templateId: string }>()
  const [template, setTemplate] = useState<ITemplateData>()

  useEffect(() => {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]')
    const currentTemplate = templates.find((t: ITemplateData) => t.id === templateId)
    setTemplate(currentTemplate)
  }, [templateId])

  return (
    <Grid container ref={ref} style={{ font: `${template?.fontFamily || 'Arial'}` }}>
      <Grid item xs={12} md={4}>
        <Sidebar primaryColor={template?.primaryColor || '#374151'} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Content />
      </Grid>
    </Grid>
  )
})

export default Azuril
