import { IdentifierGenerator } from '../../core'
import { BasicEntity } from '../../domain/entity/basic.entity'

export interface SearchInput {
  limit?: number;
  offset?: number;
}

export interface BasicRepository extends IdentifierGenerator {
  search(input?: SearchInput): Promise<BasicEntity[]>;
  find(code: string): Promise<BasicEntity | undefined>;
  save(member: BasicEntity): Promise<void>;
  delete(member: BasicEntity): Promise<void>;
}

export class MockBasicRepository implements BasicRepository {
  nextIdentifier (): Promise<number> { return Promise.resolve(0) }
  search (): Promise<BasicEntity[]> { return Promise.resolve([]) }
  find (): Promise<BasicEntity | undefined> { return Promise.resolve(undefined) }
  save (): Promise<void> { return Promise.resolve() }
  delete (): Promise<void> { return Promise.resolve() }
}