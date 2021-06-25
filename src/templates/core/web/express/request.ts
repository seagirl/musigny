export interface Query { [key: string]: undefined | string | string[] | Query | Query[] }

export interface Request {
  body?: { [key: string]: unknown };
  query: Query;
  params: { [key: string]: string | string[] | undefined };
  url?: string;
}

export function mergeParameters (request: Request): Record<string, unknown> {
  let result: Record<string, unknown> = {}

  for (const target of [ request.query, request.params, request.body ]) {
    if (target == null) {
      continue
    }

    for (const [key, value] of Object.entries(target)) {
      result[key] = value
    }
  }

  return result
}