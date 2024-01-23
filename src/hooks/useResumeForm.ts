import { useFormik } from 'formik'

import { IFormState } from '../types/form'
import { formDefaultState } from '../utils/constants'
import { useCallback } from 'react'

export const useResumeForm = () => {
  const onSubmit = async (values: IFormState) => {
    console.log(values)
  }

  const { values, errors, setFieldValue, handleSubmit, touched, setValues } = useFormik({
    initialValues: formDefaultState,
    onSubmit,
    enableReinitialize: true,
  })

  const setField = useCallback(
    (fieldName: string, fieldValues: any) => {
      setValues({
        ...values,
        [fieldName]: fieldValues,
      })
    },
    [setValues, values],
  )

  return {
    values,
    errors,
    handleSubmit,
    setFieldValue,
    touched,
    setField,
  }
}
