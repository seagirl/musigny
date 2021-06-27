export const mockReturnValues = <T, U>(target: { [key in keyof T]: jest.SpyInstance }, retuenValues: { [key in keyof T]: U }): void => {
  Object.keys(target).forEach(key => {
    const spy = target[key as keyof T]
    const value = retuenValues[key as keyof T]
    if (key in retuenValues) {
      spy.mockReturnValue(value)
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockImplementations = <T, U extends ((...args: any) => any)>(target: { [key in keyof T]: jest.SpyInstance }, mockImplementations: { [key in keyof T]: U }): void => {
  Object.keys(target).forEach(key => {
    const spy = target[key as keyof T]
    const value = mockImplementations[key as keyof T]
    if (key in mockImplementations) {
      spy.mockImplementation(value)
    }
  })
}

export const calledTimes = <T>(target: { [key in keyof T]: jest.SpyInstance }): { [key in keyof T]: number } => {
  const entries = Object.keys(target)
    .map(key => {
      const spy = target[key as keyof T]
      const value = spy.mock.calls.length
      return [key, value]
    })
  return Object.fromEntries(entries) as { [key in keyof T]: number }
}