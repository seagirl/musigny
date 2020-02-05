export interface IdentifierGenerator {
  nextIdentifier(): Promise<number>;
}