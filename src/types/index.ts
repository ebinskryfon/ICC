export interface NavItem {
  label: string
  href: string
  isAction?: boolean
}

export interface PillarItem {
  step: string
  title: string
  category: string
  description: string
  iconName?: string
}

export interface OfferingItem {
  id: string
  title: string
  description: string
  iconName?: string
}

export interface ProgressionStep {
  number: string
  title: string
  description: string
  badge: string
}

export interface GalleryImage {
  id: string
  title: string
  category: 'tournaments' | 'training' | 'school-clubs' | 'vibe-bhav'
  src: string
  alt: string
}

export interface SchoolAffiliationForm {
  schoolName: string
  contactPerson: string
  phoneNumber: string
  campusAddress: string
  message: string
}

export interface VibeBhavRegistrationForm {
  fullName: string
  dob: string
  address: string
  phone: string
  guardianContact: string
  experience: string
  category: 'Under 14' | 'Under 17' | 'Under 19' | 'Open Category'
}
