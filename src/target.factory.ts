import { Parser } from './parser'
import { Target } from './target'

export class TargetFactory {
  static createFromPath (path: string): Target {
    const name = Parser.nameFromPath(path)
    const entityName = Parser.entityNameFromPath(path) || name
    return new Target(
      path,
      Parser.categoryFromPath(path),
      Parser.typeFromPath(path),
      name,
      entityName
    )
  }
}