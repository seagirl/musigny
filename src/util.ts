export class Util {
  static upperCamelCase (str: string): string {
    return str.replace(/[-_](.)/g, function (match, group1) {
      return group1.toUpperCase()
    })
  }

  static kebabCase (str: string): string {
    return str.replace(/([A-Z_])/g, function (match) {
      return '-' + match.toLowerCase()
    })
  }

  static snakeCase (str: string): string {
    return str.replace(/([A-Z-])/g, function (match) {
      return '_' + match.toLowerCase()
    })
  }
}