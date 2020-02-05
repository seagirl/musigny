import { Usecase } from '../../core'
import { MusignyBasicRepository } from '../repository/basic.repository'

export interface MusignyBasicUseCaseInput {
}

export interface MusignyBasicUseCaseOutput {
}

export interface MusignyBasicUseCaseDependency {
  repository: MusignyBasicRepository
}

export interface MusignyBasicUsecase extends Usecase {
  execute (input: MusignyBasicUseCaseInput): Promise<MusignyBasicUseCaseOutput>;
}

export class MusignyBasicInteractor implements MusignyBasicUsecase, MusignyBasicUseCaseDependency {
  repository: MusignyBasicRepository

  constructor (dependency: MusignyBasicUseCaseDependency) {
  }

  async execute (input: MusignyBasicUseCaseInput): Promise<MusignyBasicUseCaseOutput> {
    return {}
  }
}
