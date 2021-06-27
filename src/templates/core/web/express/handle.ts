import { NextFunction, Request, RequestHandler, Response } from 'express'
import { Handler } from './handler'

interface PromiseRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export const wrap = (fn: PromiseRequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next)
  }
}

export const handle = async (handler: Handler, req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await handler.controller.handle({
      query: req.query,
      params: req.params,
      body: req.body,
      url: `${req.protocol}://${req.hostname}${req.originalUrl}`
    })
    res.json(handler.presenter.present(result))
  } catch (error) {
    next(error)
  }
}