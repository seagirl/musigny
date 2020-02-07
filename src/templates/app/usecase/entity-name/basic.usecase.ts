import { Usecase } from '../../../core'
import { MusignyEntityNameBasicRepository } from '../../repository/basic.repository'

export interface MusignyClassNameBasicUseCaseInput {
}

export interface MusignyClassNameBasicUseCaseOutput {
}

export interface MusignyClassNameBasicUseCaseDependency {
  repository: MusignyEntityNameBasicRepository;
}

export interface MusignyClassNameBasicUsecase extends Usecase {
  execute (input: MusignyClassNameBasicUseCaseInput): Promise<MusignyClassNameBasicUseCaseOutput>;
}

export class MusignyClassNameBasicInteractor implements MusignyClassNameBasicUsecase, MusignyClassNameBasicUseCaseDependency {
  repository: MusignyEntityNameBasicRepository

  constructor (dependency: MusignyClassNameBasicUseCaseDependency) {
    this.repository = dependency.repository
  }

  async execute (input: MusignyClassNameBasicUseCaseInput): Promise<MusignyClassNameBasicUseCaseOutput> {
    return {}
  }
}
