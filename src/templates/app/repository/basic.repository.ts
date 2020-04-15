import { IdentifierGenerator } from '../../core'
import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'

export interface SearchInput {
  limit?: number;
  offset?: number;
}

export interface SearchOutput {
  entities: MusignyEntityNameBasicEntity[];
  hasNext: boolean;
}

export interface MusignyEntityNameBasicRepository extends IdentifierGenerator<number> {
  search(input?: SearchInput): Promise<SearchOutput>;
  find(id: number): Promise<MusignyEntityNameBasicEntity | undefined>;
  save(entity: MusignyEntityNameBasicEntity): Promise<void>;
  delete(entity: MusignyEntityNameBasicEntity): Promise<void>;
}

export class MockMusignyEntityNameBasicRepository implements MusignyEntityNameBasicRepository {
  nextIdentifier (): Promise<number> { return Promise.resolve(0) }
  search (): Promise<SearchOutput> { return Promise.resolve({ entities: [], hasNext: false }) }
  find (): Promise<MusignyEntityNameBasicEntity | undefined> { return Promise.resolve(undefined) }
  save (): Promise<void> { return Promise.resolve() }
  delete (): Promise<void> { return Promise.resolve() }
}