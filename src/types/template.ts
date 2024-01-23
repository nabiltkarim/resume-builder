import { ChangeEvent } from 'react'

export interface ITemplateData {
  id: string
  name: string
  primaryColor: string
  fontColor: string
  fontFamily: string
  layout: string
}

export type InputType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>
export type ColorType = { hex: string }
export type SelectEventType = ChangeEvent<{
  name?: string | undefined
  value: unknown
}>
