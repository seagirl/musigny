// eslint-disable-next-line @typescript-eslint/no-explicit-any
function format (entry: any): string {
  if (typeof entry === 'object') {
    try {
      return JSON.stringify(entry)
    } catch {
      //
    }
  }

  return entry
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function log (...msgs: any[]): void {
  process.stdout.write(msgs.map(format).join(' ') + '\n')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function warn (...msgs: any[]): void {
  process.stdout.write(msgs.map(format).join(' ') + '\n')
}

export function mock (): void {
  // work around: https://github.com/tschaub/mock-fs/issues/234
  global.console = require('./console')
}