import type { FormikErrors, FormikTouched } from 'formik'
import type { FormEvent } from 'react'
import { createContext, useContext } from 'react'
import noop from 'lodash/noop'

import { IFormState } from '../types/form'

export interface IResumeFormContext {
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
  values: IFormState
  errors: FormikErrors<IFormState>
  touched: FormikTouched<IFormState>
  setField: (fieldName: string, values: any) => void
}

export const ResumeFormContext = createContext<IResumeFormContext>({
  handleSubmit: noop,
  values: {},
  errors: {},
  touched: {},
  setField: noop,
})

export const useResumeFormContext = () => {
  return useContext(ResumeFormContext)
}
