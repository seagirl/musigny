import { IdentifierGenerator } from '../../core'
import { MusignySecondlyNameBasicEntity } from '../../domain/entity/basic.entity'

export interface SearchInput {
  limit?: number;
  offset?: number;
}

export interface MusignySecondlyNameBasicRepository extends IdentifierGenerator {
  search(input?: SearchInput): Promise<MusignySecondlyNameBasicEntity[]>;
  find(code: string): Promise<MusignySecondlyNameBasicEntity | undefined>;
  save(member: MusignySecondlyNameBasicEntity): Promise<void>;
  delete(member: MusignySecondlyNameBasicEntity): Promise<void>;
}

export class MockMusignySecondlyNameBasicRepositoryRepository implements MusignySecondlyNameBasicRepository {
  nextIdentifier (): Promise<number> { return Promise.resolve(0) }
  search (): Promise<MusignySecondlyNameBasicEntity[]> { return Promise.resolve([]) }
  find (): Promise<MusignySecondlyNameBasicEntity | undefined> { return Promise.resolve(undefined) }
  save (): Promise<void> { return Promise.resolve() }
  delete (): Promise<void> { return Promise.resolve() }
}