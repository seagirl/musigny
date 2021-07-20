import { NextFunction, Request, Response } from 'express'
import { Builder } from '../../core/web/express/builder'

export const handle = async (builder: Builder, req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await builder.controller.handle(req)
    res.json(builder.presenter.present(result))
    await builder.finish()
  } catch (error) {
    await builder.finish()
    next(error)
  }
}