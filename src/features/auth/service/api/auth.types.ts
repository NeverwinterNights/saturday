export type RequestLoginType = {
  password: string
  email: string
}

export type ResponseLoginType = {
  accessToken: string
}

export type ResponseRegisterType = {
  id: string
  name: string
  email: string
}

export type RequestRegisterType = {
  name: string
  password: string
  email: string
}

export type ResponseUserType = {
  id: string
  email: string
  isEmailVerified: true
  name: string
  avatar: string
  created: string
  updated: string
}

export type RequestSignUpType = {
  password: string
  email: string
  name: string
}

export type RequestUpdateUserType = {
  avatar: string
  name: string
  email: string
}
