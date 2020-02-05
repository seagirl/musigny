import { IdentifierGenerator } from '../../core'
import { MusignyBasicEntity } from '../../domain/entity/basic.entity'

export interface SearchInput {
  limit?: number;
  offset?: number;
}

export interface MusignyBasicRepository extends IdentifierGenerator {
  search(input?: SearchInput): Promise<MusignyBasicEntity[]>;
  find(code: string): Promise<MusignyBasicEntity | undefined>;
  save(member: MusignyBasicEntity): Promise<void>;
  delete(member: MusignyBasicEntity): Promise<void>;
}

export class MockMusignyBasicRepository implements MusignyBasicRepository {
  nextIdentifier (): Promise<number> { return Promise.resolve(0) }
  search (): Promise<MusignyBasicEntity[]> { return Promise.resolve([]) }
  find (): Promise<MusignyBasicEntity | undefined> { return Promise.resolve(undefined) }
  save (): Promise<void> { return Promise.resolve() }
  delete (): Promise<void> { return Promise.resolve() }
}