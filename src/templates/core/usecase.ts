export interface Usecase {
  execute(input: object): Promise<Record<string, unknown>>;
}
