export interface ICertifications {
  id: string
  degree: string
  startDate: string
  description?: string
}

export interface IEducation {
  id: string
  degree: string
  school: string
  startDate?: string
  endDate: string
}

export interface IExperiences {
  id: string
  position: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description: string
}

export interface IFormState {
  personalInfo?: IPersonalInformation
  experiences?: IExperiences[]
  educations?: IEducation[]
  certifications?: ICertifications[]
  skills?: ISkills[]
  languages?: ILanguages[]
}

export interface ILanguages {
  id: string
  value: string
}

export interface IPersonalInformation {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  info: string
  websiteUrl?: string
  currentPosition?: string
  profilePic?: string
  watermarkPic?: string
}

export type ISkills = ILanguages
