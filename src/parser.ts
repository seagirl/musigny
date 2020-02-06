import { Category, Type } from './target'

export class Parser {
  static nameFromPath (path: string): string {
    const pathFlagments = path.split('/')
    const lastPathFlagment = pathFlagments.pop()
    if (lastPathFlagment == null) {
      throw new Error('name not found')
    }

    const nameFlagments = lastPathFlagment.split('.')
    const lastNameFlagment = nameFlagments.pop()
    if (lastNameFlagment == null) {
      throw new Error('name not found')
    }

    const name = nameFlagments.pop()
    if (name == null) {
      throw new Error('name not found')
    }

    return name
  }

  static name2FromPath (path: string): string {
    const pathFlagments = path.split('/')
    pathFlagments.shift() // category
    pathFlagments.shift() // type
    pathFlagments.pop() // name
    return pathFlagments.join('-')
  }

  static categoryFromPath (path: string): Category {
    const pathFlagments = path.split('/')
    const firstPathFlagment = pathFlagments.shift()
    if (firstPathFlagment == null) {
      return Category.unknown
    }

    switch (firstPathFlagment) {
      case Category.domain:
        return Category.domain
      case Category.app:
        return Category.app
      case Category.web:
        return Category.web
      case Category.db:
        return Category.db
      case Category.ext:
        return Category.ext
    }

    return Category.unknown
  }

  static typeFromPath (path: string): Type {
    const pathFlagments = path.split('/')
    const lastPathFlagment = pathFlagments.pop()
    if (lastPathFlagment == null) {
      return Type.unknown
    }

    const nameFlagments = lastPathFlagment.split('.')
    const lastNameFlagment = nameFlagments.pop()
    if (lastNameFlagment == null) {
      return Type.unknown
    }

    switch (lastNameFlagment) {
      case Type.entity:
        return Type.entity
      case Type.factory:
        return Type.factory
      case Type.usecase:
        return Type.usecase
      case Type.repositoryInterface:
        return Type.repositoryInterface
      case Type.adapter:
        return Type.adapter
      case Type.controller:
        return Type.controller
      case Type.presenter:
        return Type.presenter
      case Type.translator:
        return Type.translator
      case Type.viewModel:
        return Type.viewModel
      case Type.builder:
        return Type.builder
      case Type.repository:
        if (path.includes('app/')) {
          return Type.repositoryInterface
        }
        return Type.repository
    }

    return Type.unknown
  }
}