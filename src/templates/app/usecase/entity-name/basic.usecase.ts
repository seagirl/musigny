import { Usecase } from '../../../core'
import { MusignyEntityNameBasicRepository } from '../../../domain/repository/basic.repository'

export interface Props {
  MusignyEntityNameBasicLowerRepository: MusignyEntityNameBasicRepository;
}

export interface Request {
}

export type Response = Record<string, unknown>

export class MusignyClassNameBasicInteractor implements Usecase {
  constructor (readonly props: Props) {}

  async execute (input: Request): Promise<Response> {
    return {}
  }
}
