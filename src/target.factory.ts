import { Parser } from './parser'
import { Target } from './target'

export class TargetFactory {
  static createFromPath (path: string): Target {
    return new Target(
      path,
      Parser.categoryFromPath(path),
      Parser.typeFromPath(path),
      Parser.nameFromPath(path),
      Parser.name2FromPath(path)
    )
  }
}