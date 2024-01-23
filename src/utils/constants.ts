import {
  ICertifications,
  IEducation,
  IExperiences,
  IFormState,
  ILanguages,
  IPersonalInformation,
  ISkills,
} from '../types/form'
import { ITemplateData } from '../types/template'

export const fontOptions = ['Arial', 'Times New Roman', 'Helvetica', 'Courier New', 'Verdana']

export const defaultTemplate: ITemplateData = {
  id: '',
  name: '',
  layout: '',
  primaryColor: '#fff',
  fontColor: '#fff',
  fontFamily: 'Arial',
}

export const certificationsDefaultState: ICertifications = {
  id: '',
  degree: '',
  startDate: '',
  description: '',
}

export const educationDefaultState: IEducation = {
  id: '',
  degree: '',
  school: '',
  startDate: '',
  endDate: '',
}

export const experienceDefaultState: IExperiences = {
  id: '',
  position: '',
  company: '',
  location: '',
  startDate: '',
  endDate: '',
  description: '',
}

export const personalInfoDefaultState: IPersonalInformation = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  info: '',
  websiteUrl: '',
  currentPosition: '',
}

export const formDefaultState: IFormState = {
  personalInfo: personalInfoDefaultState,
  experiences: [],
  educations: [],
  certifications: [],
  skills: [],
  languages: [],
}

export const skillsDefaultState: ISkills = {
  id: '',
  value: '',
}

export const languagesDefaultState: ILanguages = {
  id: '',
  value: '',
}

export const navigationTabs = [
  { label: 'Personal Info', value: 'personalInfo' },
  { label: 'Profile Picture', value: 'profilePic' },
  { label: 'Work Experiences', value: 'experiences' },
  { label: 'Education', value: 'education' },
  { label: 'Skills', value: 'skills' },
  { label: 'Certifications', value: 'certifications' },
  { label: 'Watermark Logo', value: 'watermark' },
]
