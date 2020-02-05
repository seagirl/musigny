export interface Transaction {
  begin (): Promise<void>;
  commit (): Promise<void>;
  rollback (): Promise<void>;
  close (): Promise<void>;
}

export class MockTransaction implements Transaction {
  begin (): Promise<void> {return Promise.resolve() }
  commit (): Promise<void> { return Promise.resolve() }
  rollback (): Promise<void> { return Promise.resolve() }
  close (): Promise<void> { return Promise.resolve() }
}