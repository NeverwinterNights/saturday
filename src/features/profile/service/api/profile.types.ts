export type ResponseUpdateMe = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type RequestDataUpdateMe = {
  avatar: string
  name: string
  email: string
}
