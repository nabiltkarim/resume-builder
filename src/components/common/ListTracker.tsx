import { Button, Grid, TextField } from '@mui/material'
import { useState, ChangeEvent, FC, useCallback } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import InheritColorTypography from './CustomTypography'
import { useResumeFormContext } from '../../context/resume-form'
import { ILanguages, ISkills } from '../../types/form'

interface IListTrackerProps {
  fieldName: 'languages' | 'skills'
  defaultState: ISkills | ILanguages
  label: string
  formTitle: string
  emptyPlaceholder: string
  textPlaceholder: string
}

export const ListTracker: FC<IListTrackerProps> = ({
  fieldName,
  defaultState,
  label,
  formTitle,
  emptyPlaceholder,
  textPlaceholder,
}) => {
  const { values, setField } = useResumeFormContext()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [listData, setListData] = useState<ISkills | ILanguages>(defaultState)
  const [showForm, setShowForm] = useState(false)

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const fieldValue = e.target.value
      setListData({
        ...listData,
        value: fieldValue,
      })
    },
    [setListData, listData],
  )

  const handleStartEdit = useCallback((item: ISkills | ILanguages) => {
    setListData(item)
    setEditingId(item.id)
    setShowForm(true)
  }, [])

  const handleSaveList = useCallback(() => {
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

  const handleRemove = useCallback(
    (id: string) => {
      const updatedList = (values[fieldName] || []).filter((item) => item.id !== id)
      setField(fieldName, updatedList)
    },
    [fieldName, values, setField],
  )

  const handleCancel = useCallback(() => {
    setShowForm(false)
    setEditingId(null)
    setListData(defaultState)
  }, [defaultState])

  return (
    <>
      <InheritColorTypography fontSize={16} fontWeight={'bold'}>
        {formTitle}
      </InheritColorTypography>
      <Grid container className="items-center my-4">
        {(values[fieldName] || []).length < 1 ? (
          <InheritColorTypography fontStyle={'italic'}>{emptyPlaceholder}</InheritColorTypography>
        ) : (
          (values[fieldName] || []).map((field: ISkills | ILanguages) => {
            return (
              <Grid item key={field.id} className="flex flex-col" xs={6}>
                <InheritColorTypography fontSize={14} paddingTop={'4px'} fontWeight={'bold'} marginRight={8}>
                  {field.value}
                </InheritColorTypography>
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
            )
          })
        )}
      </Grid>
      {showForm ? (
        <Grid container className="items-center mb-8" spacing={1}>
          <Grid item xs={8}>
            <TextField
              label={label}
              type="text"
              placeholder={textPlaceholder}
              className="w-full"
              onChange={handleChangeInput}
              value={listData?.value || ''}
              name="name"
              required
            />
          </Grid>

          <Grid item xs={4}>
            <Button size="small" onClick={handleSaveList}>
              Save
            </Button>
            <Button variant="text" size="small" color="error" startIcon={<CloseIcon />} onClick={handleCancel}>
              Close
            </Button>
          </Grid>
        </Grid>
      ) : null}

      <Button variant="outlined" size="small" onClick={() => setShowForm(true)}>{`+ Add`}</Button>
    </>
  )
}
