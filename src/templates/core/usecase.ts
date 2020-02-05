export interface Usecase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(input: object): Promise<any>;
}
