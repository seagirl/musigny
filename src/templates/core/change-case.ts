
export function upperCamelCase (str: string | undefined): string | undefined {
  if (str == null) {
    return
  }
  str = str.charAt(0).toUpperCase() + str.slice(1)
  return str.replace(/[-_](.)/g, function (match, group1: string) {
    return group1.toUpperCase()
  })
}

export function lowerCamelCase (str: string | undefined): string | undefined {
  if (str == null) {
    return
  }
  str = str.charAt(0).toLowerCase() + str.slice(1)
  return str.replace(/[-_](.)/g, function (match, group1: string) {
    return group1.toUpperCase()
  })
}

export function kebabCase (str: string | undefined): string | undefined {
  if (str == null) {
    return
  }
  str = str.charAt(0).toLowerCase() + str.slice(1)
  str = str.replace('_', '-')
  return str.replace(/([A-Z])/g, function (match) {
    return '-' + match.toLowerCase()
  })
}

export function snakeCase (str: string | undefined): string | undefined {
  if (str == null) {
    return
  }
  str = str.charAt(0).toLowerCase() + str.slice(1)
  str = str.replace('-', '_')
  return str.replace(/([A-Z-])/g, function (match) {
    return '_' + match.toLowerCase()
  })
}
