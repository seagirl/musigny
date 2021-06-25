export class ClientError extends Error {
  constructor (message: string, public status = 400) {
    super(message)
  }
}

export class UnauthorizedError extends Error {
  constructor (message = 'Unauthorized', public status = 401) {
    super(message)
  }
}

export class NotFoundError extends Error {
  constructor (message = 'Not found', public status = 404) {
    super(message)
  }
}

export class InvalidTokenError extends Error {
  constructor (message = 'Invalid Token', public status = 401) {
    super(message)
  }
}

export class ServerError extends Error {
  constructor (message = 'Internal Server Error', public status = 500) {
    super(message)
  }
}