import { Usecase } from '../../core'
import { BasicRepository } from '../repository/basic.repository'

export interface BasicUseCaseInput {
}

export interface BasicUseCaseOutput {
}

export interface BasicUseCaseDependency {
  repository: BasicRepository
}

export interface BasicUsecase extends Usecase {
  execute (input: BasicUseCaseInput): Promise<BasicUseCaseOutput>;
}

export class BasicInteractor implements BasicUsecase, BasicUseCaseDependency {
  repository: BasicRepository

  constructor (dependency: BasicUseCaseDependency) {
  }

  async execute (input: BasicUseCaseInput): Promise<BasicUseCaseOutput> {
    return {}
  }
}
