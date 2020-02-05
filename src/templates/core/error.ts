export class ClientError extends Error {
  constructor (message: string, public status = 400) {
    super(message)
  }
}

export class ServerError extends Error {
  constructor (message: string, public status = 500) {
    super(message)
  }
}