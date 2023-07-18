export type RequestLoginType = {
  password: string
  email: string
}

export type ResponseLoginType = {
  password: string
  email: string
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
