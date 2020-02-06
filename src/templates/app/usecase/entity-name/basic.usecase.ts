import { Usecase } from '../../../core'
import { MusignySecondlyNameBasicRepository } from '../../repository/basic.repository'

export interface MusignyPrimaryNameBasicUseCaseInput {
}

export interface MusignyPrimaryNameBasicUseCaseOutput {
}

export interface MusignyPrimaryNameBasicUseCaseDependency {
  repository: MusignySecondlyNameBasicRepository
}

export interface MusignyPrimaryNameBasicUsecase extends Usecase {
  execute (input: MusignyPrimaryNameBasicUseCaseInput): Promise<MusignyPrimaryNameBasicUseCaseOutput>;
}

export class MusignyPrimaryNameBasicInteractor implements MusignyPrimaryNameBasicUsecase, MusignyPrimaryNameBasicUseCaseDependency {
  repository: MusignySecondlyNameBasicRepository

  constructor (dependency: MusignyPrimaryNameBasicUseCaseDependency) {
  }

  async execute (input: MusignyPrimaryNameBasicUseCaseInput): Promise<MusignyPrimaryNameBasicUseCaseOutput> {
    return {}
  }
}
