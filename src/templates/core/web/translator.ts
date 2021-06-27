
export function translateRecord(translator: Function, input: Record<string, unknown>): Record<string, unknown> {
  let result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(input)) {
    let newKey = translator(key)
    if (newKey != null) {
      result[newKey] = value
    }
  }
  return result
}
