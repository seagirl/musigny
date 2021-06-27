export interface Presenter {
  present(input: Record<string, unknown>): Record<string, unknown>;
}
