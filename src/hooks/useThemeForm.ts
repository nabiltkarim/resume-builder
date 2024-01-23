import { useFormik } from 'formik'

import { defaultTemplate } from '../utils/constants'
import { useCallback } from 'react'
import { ITemplateData } from '../types/template'

export const useThemeForm = () => {
  const onSubmit = async (values: ITemplateData) => {
    console.log(values)
  }

  const { values, setFieldValue, setValues } = useFormik({
    initialValues: defaultTemplate,
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
    setFieldValue,
    setField,
  }
}
