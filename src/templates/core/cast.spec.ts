import { toBoolean, toBooleanArray, toEnum, toNumber, toNumberArray, toObject, toOptionalBoolean, toOptionalEnum, toOptionalNumber, toOptionalObject, toOptionalString, toString, toStringArray } from './cast'
import { ServerError } from './error'

enum Hoge {
  fugaFuga = 'fuga_fuga'
}

describe('cast', () => {
  it('toBoolean', () => {
    expect(() => { toBoolean(undefined) }).toThrowError(ServerError)
    expect(toBoolean(1)).toEqual(true)
    expect(toBoolean(0)).toEqual(false)
    expect(toBoolean('')).toEqual(false)
    expect(toBoolean('true')).toEqual(true)
    expect(toBoolean('false')).toEqual(true)
    expect(toBoolean(true)).toEqual(true)
    expect(toBoolean(false)).toEqual(false)
  })

  it('toOptionalBoolean', () => {
    expect(toOptionalBoolean(undefined)).toEqual(undefined)
    expect(toOptionalBoolean(1)).toEqual(true)
    expect(toOptionalBoolean(0)).toEqual(false)
    expect(toOptionalBoolean('')).toEqual(false)
    expect(toOptionalBoolean('true')).toEqual(true)
    expect(toOptionalBoolean('false')).toEqual(true)
    expect(toOptionalBoolean(true)).toEqual(true)
    expect(toOptionalBoolean(false)).toEqual(false)
  })

  it('toNumber', () => {
    expect(() => { toNumber(undefined) }).toThrowError(ServerError)
    expect(() => { toNumber('fugaFuga') }).toThrowError(ServerError)
    expect(toNumber('1234')).toEqual(1234)
    expect(toNumber(1234)).toEqual(1234)
    expect(toNumber(true)).toEqual(1)
    expect(toNumber(false)).toEqual(0)
  })

  it('toOptionalNumber', () => {
    expect(toOptionalNumber(undefined)).toEqual(undefined)
    expect(toOptionalNumber('fugaFuga')).toEqual(undefined)
    expect(toOptionalNumber('1234')).toEqual(1234)
    expect(toOptionalNumber(1234)).toEqual(1234)
  })

  it('toString', () => {
    expect(() => { toString(undefined) }).toThrowError(ServerError)
    expect(toString('1234')).toEqual('1234')
    expect(toString(1234)).toEqual('1234')
    expect(toString(true)).toEqual('true')
  })

  it('toOptionalString', () => {
    expect(toOptionalString(undefined)).toEqual(undefined)
    expect(toOptionalString('1234')).toEqual('1234')
    expect(toOptionalString(1234)).toEqual('1234')
    expect(toOptionalString(true)).toEqual('true')
  })

  it('toEnum', () => {
    expect(() => { toEnum(Hoge, undefined) }).toThrowError(ServerError)
    expect(() => { toEnum(Hoge, 'aaa') }).toThrowError(ServerError)
    expect(toEnum(Hoge, 'fugaFuga')).toEqual('fuga_fuga')
  })

  it('toOptionalEnum', () => {
    expect(toOptionalEnum(Hoge, undefined)).toEqual(undefined)
    expect(toOptionalEnum(Hoge, 'aaa')).toEqual(undefined)
    expect(toOptionalEnum(Hoge, 'fugaFuga')).toEqual('fuga_fuga')
  })

  it('toObject', () => {
    expect(() => { toObject(undefined) }).toThrowError(ServerError)
    expect(() => { toObject('') }).toThrowError(ServerError)
    expect(() => { toObject('aaa') }).toThrowError(ServerError)
    expect(() => { toObject(1234) }).toThrowError(ServerError)
    expect(() => { toObject(true) }).toThrowError(ServerError)
    expect(toObject({})).toEqual({})
  })

  it('toOptionalObject', () => {
    expect(toOptionalObject(undefined)).toEqual(undefined)
    expect(() => { toObject('') }).toThrowError(ServerError)
    expect(() => { toObject('aaa') }).toThrowError(ServerError)
    expect(() => { toObject(1234) }).toThrowError(ServerError)
    expect(() => { toObject(true) }).toThrowError(ServerError)
    expect(toOptionalObject({})).toEqual({})
  })

  it('toBooleanArray', () => {
    expect(() => { toBooleanArray(undefined) }).toThrowError(ServerError)
    expect(toBooleanArray([])).toEqual([])
    expect(toBooleanArray([true, false])).toEqual([true, false])
    expect(toBooleanArray(['1', 0, true, 'false'])).toEqual([true, false, true, true])
  })

  it('toNumberArray', () => {
    expect(() => { toNumberArray(undefined) }).toThrowError(ServerError)
    expect(() => { toNumberArray(['aaa']) }).toThrowError(ServerError)
    expect(() => { toNumberArray(['aaa', 1234]) }).toThrowError(ServerError)
    expect(toNumberArray([])).toEqual([])
    expect(toNumberArray([1, 2])).toEqual([1, 2])
    expect(toNumberArray(['1', 2, true])).toEqual([1, 2, 1])
  })

  it('toStringArray', () => {
    expect(() => { toStringArray(undefined) }).toThrowError(ServerError)
    expect(toStringArray([])).toEqual([])
    expect(toStringArray(['aaa', 'bb'])).toEqual(['aaa', 'bb'])
    expect(toStringArray(['aaa', 1, true])).toEqual(['aaa', '1', 'true'])
  })
})