import { Button, Grid, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState, ChangeEvent, FC, useCallback } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import KeyValuePair from './KeyValuePair'
import InheritColorTypography from './CustomTypography'
import { ICertifications, IEducation, IExperiences } from '../../types/form'
import { useResumeFormContext } from '../../context/resume-form'
import { formatDate } from '../../utils'

type ListItem = IEducation | IExperiences | ICertifications

interface IExperienceTrackerProps {
  fieldName: 'experiences' | 'educations' | 'certifications'
  defaultState: ListItem
  nameLabel: string
  institutionLabel?: string
  locationLabel?: string
  startDateLabel?: string
  endDateLabel?: string
  descriptionLabel?: string
  namePlaceholder: string
  institutionPlaceholder?: string
  locationPlaceholder?: string
  descriptionPlaceholder: string
  formTitle: string
  emptyPlaceholder: string
  enableInstitution: boolean
  enableLocation: boolean
  enableEndDate: boolean
  enableDescription: boolean
}

export const ExperienceTracker: FC<IExperienceTrackerProps> = ({
  fieldName,
  formTitle,
  defaultState,
  nameLabel,
  institutionLabel,
  locationLabel,
  startDateLabel,
  endDateLabel,
  descriptionLabel,
  namePlaceholder,
  institutionPlaceholder,
  locationPlaceholder,
  descriptionPlaceholder,
  emptyPlaceholder,
  enableInstitution,
  enableLocation,
  enableEndDate,
  enableDescription,
}) => {
  const { values, setField } = useResumeFormContext()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [listData, setListData] = useState<ListItem>(defaultState)
  const [showForm, setShowForm] = useState(false)

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const fieldValue = e.target.value
      const fieldName = e.target.name

      setListData({
        ...listData,
        [fieldName]: fieldValue,
      })
    },
    [setListData, listData],
  )

  const handleChangeDate = (value: any | null, fieldName: string) => {
    setListData({
      ...listData,
      [fieldName]: value,
    })
  }

  const handleStartEdit = useCallback((item: ListItem) => {
    setListData(item)
    setEditingId(item.id)
    setShowForm(true)
  }, [])

  const handleSave = useCallback(() => {
    if (!values[fieldName] || !listData) return

    const listValues = values[fieldName] || []

    if (editingId) {
      const updatedList = listValues.map((item) => (item.id === editingId ? { ...item, ...listData } : item))
      setField(fieldName, updatedList)
    } else {
      const updatedData = new Set([...listValues, { ...listData, id: Date.now().toString() }])
      setField(fieldName, Array.from(updatedData))
    }

    setShowForm(false)
    setEditingId(null)
    setListData(defaultState)
  }, [editingId, fieldName, values, listData, defaultState, setField])

  const handleCancel = useCallback(() => {
    setShowForm(false)
    setEditingId(null)
    setListData(defaultState)
  }, [defaultState])

  const handleRemove = useCallback(
    (id: string) => {
      const updatedList = ((values[fieldName] as ListItem[]) || []).filter((item: ListItem) => item.id !== id)
      setField(fieldName, updatedList)
    },
    [fieldName, values, setField],
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InheritColorTypography fontSize={16} fontWeight={'bold'}>
        {formTitle}
      </InheritColorTypography>
      <Grid container className="items-center my-4">
        {(values[fieldName] || []).length < 1 ? (
          <InheritColorTypography fontStyle={'italic'}>{emptyPlaceholder}</InheritColorTypography>
        ) : (
          (values[fieldName] || []).map((field: ListItem) => {
            return (
              <Grid container key={field.id} spacing={2}>
                <Grid item xs={4}>
                  <KeyValuePair
                    label={fieldName === 'experiences' ? 'Position' : 'Degree'}
                    value={
                      fieldName === 'experiences' ? (field as IExperiences).position : (field as IEducation).degree
                    }
                  />
                </Grid>
                {enableInstitution && (
                  <Grid item xs={4}>
                    <KeyValuePair
                      label={fieldName === 'experiences' ? 'Company' : 'School'}
                      value={
                        fieldName === 'experiences' ? (field as IExperiences).company : (field as IEducation).school
                      }
                    />
                  </Grid>
                )}
                {enableLocation && (
                  <Grid item xs={4}>
                    <KeyValuePair label={'Location'} value={(field as IExperiences).location || ''} />
                  </Grid>
                )}
                <Grid item xs={6}>
                  <KeyValuePair label={'Start Date'} value={formatDate((field as IExperiences).startDate || '')} />
                </Grid>
                {enableEndDate && (
                  <Grid item xs={6}>
                    <KeyValuePair label={'End Date'} value={formatDate((field as IExperiences).endDate || '')} />
                  </Grid>
                )}
                {enableDescription && (
                  <Grid item xs={12}>
                    <KeyValuePair label={'Description'} value={(field as IExperiences).description || ''} />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button size="small" variant="text" startIcon={<EditIcon />} onClick={() => handleStartEdit(field)}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemove(field.id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            )
          })
        )}
      </Grid>
      {showForm ? (
        <Grid container className="items-center mb-8" spacing={1}>
          <Grid item xs={6}>
            <TextField
              label={nameLabel}
              type="text"
              placeholder={namePlaceholder}
              className="w-full"
              onChange={handleChangeInput}
              value={(listData as IExperiences)?.position || (listData as IEducation)?.degree || ''}
              name={fieldName === 'experiences' ? 'position' : 'degree'}
              required
            />
          </Grid>
          {enableInstitution && (
            <Grid item xs={6}>
              <TextField
                label={institutionLabel}
                type="text"
                placeholder={institutionPlaceholder}
                className="w-full"
                onChange={handleChangeInput}
                value={(listData as IExperiences)?.company || (listData as IEducation)?.school || ''}
                name={fieldName === 'experiences' ? 'company' : 'school'}
                required
              />
            </Grid>
          )}
          {enableLocation && (
            <Grid item xs={12}>
              <TextField
                label={locationLabel}
                type="text"
                placeholder={locationPlaceholder}
                className="w-full"
                onChange={handleChangeInput}
                value={(listData as IExperiences)?.location || ''}
                name={'location'}
                required
              />
            </Grid>
          )}
          <Grid item xs={6}>
            <DatePicker
              label={startDateLabel}
              value={(listData as IExperiences)?.startDate || ''}
              onChange={(e: string | null) => handleChangeDate(e, 'startDate')}
              className="w-full"
            />
          </Grid>
          {enableEndDate && (
            <Grid item xs={6}>
              <DatePicker
                label={endDateLabel}
                value={(listData as IExperiences)?.endDate || ''}
                onChange={(e: string | null) => handleChangeDate(e, 'endDate')}
                className="w-full"
              />
            </Grid>
          )}
          {enableDescription && (
            <Grid item xs={12}>
              <TextField
                label={descriptionLabel}
                type="text"
                placeholder={descriptionPlaceholder}
                className="w-full"
                onChange={handleChangeInput}
                value={(listData as IExperiences)?.description || ''}
                name={'description'}
                minRows={4}
                multiline
                required
              />
            </Grid>
          )}

          <Grid item xs={4}>
            <Button size="small" onClick={handleSave}>
              Save
            </Button>
            <Button variant="text" size="small" color="error" startIcon={<CloseIcon />} onClick={handleCancel}>
              Close
            </Button>
          </Grid>
        </Grid>
      ) : null}

      <Button variant="outlined" size="small" onClick={() => setShowForm(true)}>{`+ Add`}</Button>
    </LocalizationProvider>
  )
}
