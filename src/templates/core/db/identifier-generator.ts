export interface IdentifierGenerator<T> {
  nextIdentifier(): Promise<T>;
}