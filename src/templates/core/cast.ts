import { ServerError } from './error'

export function toBoolean (value: boolean | number | string | unknown | undefined): boolean {
  if (value == null) {
    throw new ServerError('boolean value must be specified.')
  }

  const bool = Boolean(value)
  return bool
}

export function toOptionalBoolean (value: boolean | number | string | unknown | undefined): boolean | undefined {
  if (value == null) {
    return
  }

  const bool = Boolean(value)
  return bool
}

export function toNumber (value: number | string | unknown | undefined): number {
  if (value == null) {
    throw new ServerError('number value must be specified.')
  }

  const number = Number(value)
  // return undefined if value is NaN
  if (number !== number) {
    throw new ServerError(`${value as string} is not a number`)
  }

  return number
}

export function toOptionalNumber (value: number | string | unknown | undefined): number | undefined {
  if (value == null) {
    return
  }

  const number = Number(value)
  // return undefined if value is NaN
  if (number !== number) {
    return
  }

  return number
}

export function toString (value: number | string | unknown | undefined): string {
  if (value == null) {
    throw new ServerError('string value must be specified.')
  }
  const string = String(value)
  return string
}

export function toOptionalString (value: number | string | unknown | undefined): string | undefined {
  if (value == null) {
    return
  }
  const string = String(value)
  return string
}

export function toEnum<T, E extends keyof T> (enumType: T, value: E | string | unknown | undefined): T[E] {
  if (value == null) {
    throw new ServerError('enum value must be specified.')
  }

  const aEnum = enumType[value as E]
  if (aEnum == null) {
    throw new ServerError(`${value as string} is not a enum value`)
  }

  return aEnum
}

export function toOptionalEnum<T, E extends keyof T> (enumType: T, value: E | string | unknown | undefined): T[E] | undefined {
  if (value == null) {
    return
  }
  return enumType[value as E]
}

export function toObject (value: Record<string, unknown> | unknown | undefined): Record<string, unknown> {
  if (value == null) {
    throw new ServerError('object value must be specified.')
  }
  if (typeof value != 'object') {
    throw new ServerError('value is not a object')
  }
  return value as Record<string, unknown>
}

export function toOptionalObject (value: Record<string, unknown> | unknown | undefined): Record<string, unknown> | undefined {
  if (value == null) {
    return
  }
  if (typeof value != 'object') {
    throw new ServerError('value is not a object')
  }
  return value as Record<string, unknown>
}

export function toBooleanArray (value: Record<string, unknown> | unknown | undefined): boolean[] {
  if (value == null) {
    throw new ServerError('array value must be specified.')
  }
  if (!Array.isArray(value)) {
    throw new ServerError('value is not a object')
  }
  return value.map(n => {
    return toBoolean(n)
  })
}

export function toNumberArray (value: Record<string, unknown> | unknown | undefined): number[] {
  if (value == null) {
    throw new ServerError('array value must be specified.')
  }
  if (!Array.isArray(value)) {
    throw new ServerError('value is not a object')
  }
  return value.map(n => {
    return toNumber(n)
  })
}

export function toStringArray (value: Record<string, unknown> | unknown | undefined): string[] {
  if (value == null) {
    throw new ServerError('array value must be specified.')
  }
  if (!Array.isArray(value)) {
    throw new ServerError('value is not a object')
  }
  return value.map(n => {
    return toString(n)
  })
}