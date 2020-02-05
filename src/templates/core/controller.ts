import { Request } from '.'

export interface Controller {
  handle(input: Request): Promise<object>;
}
