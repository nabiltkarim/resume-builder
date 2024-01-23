import type { RefObject } from 'react'
import { createContext, useContext } from 'react'
import noop from 'lodash/noop'

import { ITemplateData } from '../types/template'

export interface IThemeFormContext {
  values: ITemplateData
  setField: (fieldName: string, values: any) => void
  previewRef: RefObject<any> | undefined
}

export const ThemeFormContext = createContext<IThemeFormContext>({
  values: {
    id: '',
    name: '',
    primaryColor: '',
    fontColor: '',
    fontFamily: '',
    layout: '',
  },
  setField: noop,
  previewRef: undefined,
})

export const useThemeFormContext = () => {
  return useContext(ThemeFormContext)
}
