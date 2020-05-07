import { Usecase } from '../../../core'
import { MusignyEntityNameBasicRepository } from '../../repository/basic.repository'

export interface MusignyClassNameBasicUseCaseInput {
}

export interface MusignyClassNameBasicUseCaseOutput {
}

export interface MusignyClassNameBasicUseCaseDependency {
  MusignyEntityNameBasicLowerRepository: MusignyEntityNameBasicRepository;
}

export interface MusignyClassNameBasicUsecase extends Usecase {
  execute (input: MusignyClassNameBasicUseCaseInput): Promise<MusignyClassNameBasicUseCaseOutput>;
}

export class MusignyClassNameBasicInteractor implements MusignyClassNameBasicUsecase, MusignyClassNameBasicUseCaseDependency {
  MusignyEntityNameBasicLowerRepository: MusignyEntityNameBasicRepository

  constructor (dependency: MusignyClassNameBasicUseCaseDependency) {
    this.MusignyEntityNameBasicLowerRepository = dependency.MusignyEntityNameBasicLowerRepository
  }

  async execute (input: MusignyClassNameBasicUseCaseInput): Promise<MusignyClassNameBasicUseCaseOutput> {
    return {}
  }
}
