import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Grid, MenuItem, Modal, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { defaultTemplate, fontOptions } from '../utils/constants'
import { ColorType, SelectEventType, ITemplateData } from '../types/template'
import LayoutOption from '../components/registration/LayoutOption'
import ColorPicker from '../components/registration/ColorPicker'
import { useThemeFormContext } from '../context/theme-form'
import InheritColorTypography from '../components/common/CustomTypography'

const Home: FC = () => {
  const navigate = useNavigate()
  const { setField } = useThemeFormContext()
  const [templateList, setTemplateList] = useState<ITemplateData[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)
  const [templateData, setTemplateData] = useState<ITemplateData>(defaultTemplate)

  useEffect(() => {
    const existingTemplates = localStorage.getItem('templates')
    if (existingTemplates) {
      setTemplateList(JSON.parse(existingTemplates))
    }
  }, [])

  const handleTemplateDataChange = useCallback(
    (key: keyof ITemplateData, value: string | ColorType | SelectEventType) => {
      const newValue = (value as string) || (value as ColorType)?.hex || (value as SelectEventType).target.value

      setTemplateData((prevTemplateData) => ({
        ...prevTemplateData,
        [key]: newValue,
      }))
    },
    [],
  )

  const handleModalOperation = useCallback((visible: boolean) => {
    setOpenModal(visible)
  }, [])

  const handleSaveTemplate = useCallback(() => {
    const newTemplateWithId = {
      ...templateData,
      id: Date.now().toString(),
    }

    const updatedTemplateList = [...templateList, newTemplateWithId]

    localStorage.setItem('templates', JSON.stringify(updatedTemplateList))
    setTemplateList(updatedTemplateList)
    setField('templates', updatedTemplateList)
    setTemplateData(defaultTemplate)
    handleModalOperation(false)
  }, [templateData, templateList, handleModalOperation, setField])

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <TextField
            fullWidth
            label="Give a name to your template"
            placeholder="ABC Corp."
            value={templateData.name}
            onChange={(e) => handleTemplateDataChange('name', e.target.value)}
            margin="normal"
          />
        )
      case 2:
        return (
          <>
            <InheritColorTypography variant="body1" textAlign={'center'}>
              Choose a layout
            </InheritColorTypography>
            <div className="flex justify-center items-center">
              <LayoutOption src="/azuril.png" alt="azuril" onSelect={handleTemplateDataChange} />
              <LayoutOption src="/zeus.png" alt="zeus" onSelect={handleTemplateDataChange} />
            </div>
          </>
        )
      case 3:
        return (
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <ColorPicker
                value={templateData.primaryColor}
                onChange={(color) => handleTemplateDataChange('primaryColor', color.hex)}
                label="Choose primary color"
              />
            </Grid>
            <Grid item xs={6}>
              <ColorPicker
                value={templateData.fontColor}
                onChange={(color) => handleTemplateDataChange('fontColor', color.hex)}
                label="Choose font color"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Choose a font"
                value={templateData.fontFamily}
                onChange={(e) => handleTemplateDataChange('fontFamily', e.target.value)}
                margin="normal"
              >
                {fontOptions.map((font) => (
                  <MenuItem key={font} value={font}>
                    {font}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        )
      default:
        return null
    }
  }

  return (
    <Container>
      <Grid container flexDirection={'column'} className="m-auto items-center h-screen py-32 w-full">
        <InheritColorTypography variant="h4" fontWeight={'bold'} color={'#00008B'}>
          Welcome to Resume Builder!
        </InheritColorTypography>
        <Box className="border-2 border-gray-300 p-8 mx-auto my-10 rounded h-[50%] w-[50%] flex flex-wrap justify-start items-start">
          {templateList.length > 0 ? (
            templateList.map((template) => (
              <Box
                key={template.id}
                component="section"
                className="w-32 h-28 flex items-center justify-center mr-4 mb-4 cursor-pointer"
                sx={{
                  p: 2,
                  border: '1px solid grey',
                  borderRadius: '4px',
                }}
                onClick={() => navigate(`/preview/${template.id}`)}
              >
                {template.name}
              </Box>
            ))
          ) : (
            <Box className="w-full">
              <InheritColorTypography variant="body1">
                No templates found. Would you like to create one?
              </InheritColorTypography>
            </Box>
          )}
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => handleModalOperation(true)}
            className="w-32 h-28"
          >
            Add
          </Button>
        </Box>

        <Modal open={openModal} onClose={() => handleModalOperation(false)}>
          <Box className="bg-white p-8 rounded shadow-lg outline-none focus:outline-none mx-auto my-20 w-[40%]">
            <InheritColorTypography variant="h6" fontWeight="bold" marginBottom={3}>
              Create Template
            </InheritColorTypography>
            {renderStepContent(step)}
            <Box className="mt-6 text-right">
              {step > 1 && (
                <Button onClick={() => setStep(step - 1)} sx={{ marginRight: 2 }}>
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button color="primary" variant="contained" onClick={() => setStep(step + 1)}>
                  Next
                </Button>
              ) : (
                <Button color="primary" variant="contained" onClick={handleSaveTemplate}>
                  Save Template
                </Button>
              )}
            </Box>
          </Box>
        </Modal>
      </Grid>
    </Container>
  )
}

export default Home
