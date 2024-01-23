import { FC, useEffect, useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, CircularProgress, Container, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../utils/mui/theme'
import Azuril from '../components/templates/azuril'
import Zeus from '../components/templates/zeus'
import Form from '../components/form/Main'
import { IResumeFormContext, ResumeFormContext } from '../context/resume-form'
import { ITemplateData } from '../types/template'
import { useResumeForm } from '../hooks/useResumeForm'
import { ResumeWrapper } from '../components/common/ResumeWrapper'
import { useThemeFormContext } from '../context/theme-form'

const Preview: FC = () => {
  const navigate = useNavigate()
  const { templateId } = useParams<{ templateId: string }>()
  const [template, setTemplate] = useState<ITemplateData>()
  const { values, touched, errors, setField, handleSubmit } = useResumeForm()
  const { previewRef } = useThemeFormContext()
  const resumeContextValue: IResumeFormContext = {
    values,
    touched,
    errors,
    setField,
    handleSubmit,
  }

  useEffect(() => {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]')
    const currentTemplate = templates.find((t: ITemplateData) => t.id === templateId)
    setTemplate(currentTemplate)
  }, [templateId])

  if (!template) {
    return (
      <Container className="h-screen" sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress className="mx-auto" />
      </Container>
    )
  }

  const handlePrint = () => {
    const input = document.getElementById('resume-print')
    html2canvas(input!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('resume.pdf')
    })
  }

  return (
    <ResumeFormContext.Provider value={resumeContextValue}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters>
          <Grid container style={{ height: '100vh' }}>
            <Grid item xs={6} sx={{ overflowY: 'auto', height: '100vh', padding: 4 }} className="border-r-2 ">
              <Form />
              <div className=" float-right">
                <Button variant="contained" size="small" sx={{ marginRight: 2 }} onClick={() => navigate('/')}>
                  Home
                </Button>
                <Button variant="contained" size="small" onClick={handlePrint} color="success">
                  Download Resume
                </Button>
              </div>
            </Grid>

            <Grid item xs={6} style={{ overflowY: 'auto', height: '100vh', padding: 20 }} id="resume-print">
              <ResumeWrapper fontFamily={template.fontFamily} fontColor={template.fontColor}>
                {template.layout === 'zeus' ? <Zeus ref={previewRef} /> : <Azuril ref={previewRef} />}
              </ResumeWrapper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </ResumeFormContext.Provider>
  )
}

export default Preview
