import { NextFunction, Request, Response, Router } from 'express'
// musigny-index import { GetMusignyEntityNameBasicsHandler } from './entity-name/get-MusignyEntityNameBasicKebabs.handler'
// musigny-show import { GetMusignyEntityNameBasicHandler } from './entity-name/get-MusignyEntityNameBasicKebab.handler'
// musigny-new import { PostMusignyEntityNameBasicsHandler } from './entity-name/post-MusignyEntityNameBasicKebabs.handler'
// musigny-edit import { PutMusignyEntityNameBasicHandler } from './entity-name/put-MusignyEntityNameBasicKebab.handler'
// musigny-destroy import { DeleteMusignyEntityNameBasicHandler } from './entity-name/delete-MusignyEntityNameBasicKebab.handler'
import { handle, wrap } from '../../../core/web/express/handle'

const router = Router()

// musigny-index router.get('/MusignyEntityNameBasicSnakes', wrap(async (req: Request, res: Response, next: NextFunction) => {
// musigny-index   await handle(new GetMusignyEntityNameBasicsHandler(), req, res, next)
// musigny-index }))

// musigny-show router.get('/MusignyEntityNameBasicSnakes/:MusignyEntityNameBasicSnake_id', wrap(async (req: Request, res: Response, next: NextFunction) => {
// musigny-show   await handle(new GetMusignyEntityNameBasicHandler(), req, res, next)
// musigny-show }))

// musigny-new router.post('/MusignyEntityNameBasicSnakes', wrap(async (req: Request, res: Response, next: NextFunction) => {
// musigny-new   await handle(new PostMusignyEntityNameBasicsHandler(), req, res, next)
// musigny-new }))

// musigny-edit router.put('/MusignyEntityNameBasicSnakes/:MusignyEntityNameBasicSnake_id', wrap(async (req: Request, res: Response, next: NextFunction) => {
// musigny-edit   await handle(new PutMusignyEntityNameBasicHandler(), req, res, next)
// musigny-edit }))

// musigny-destroy router.delete('/MusignyEntityNameBasicSnakes/:MusignyEntityNameBasicSnake_id', wrap(async (req: Request, res: Response, next: NextFunction) => {
// musigny-destroy   await handle(new DeleteMusignyEntityNameBasicHandler(), req, res, next)
// musigny-destroy }))

export default router
