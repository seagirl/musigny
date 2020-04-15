import { NextFunction, Request, Response, Router } from 'express'
// musigny-index import { GetMusignyEntityNameBasicsBuilder } from '../../builder/entity-name/get-MusignyEntityNameBasicKebabs.builder'
// musigny-show import { GetMusignyEntityNameBasicBuilder } from '../../builder/entity-name/get-MusignyEntityNameBasicKebab.builder'
// musigny-new import { PostMusignyEntityNameBasicsBuilder } from '../../builder/entity-name/post-MusignyEntityNameBasicKebabs.builder'
// musigny-edit import { PutMusignyEntityNameBasicBuilder } from '../../builder/entity-name/put-MusignyEntityNameBasicKebab.builder'
// musigny-destroy import { DeleteMusignyEntityNameBasicBuilder } from '../../builder/entity-name/delete-MusignyEntityNameBasicKebab.builder'
import { handle } from '../util'

const router = Router()

// musigny-index router.get('/MusignyEntityNameBasicSnakes', async (req: Request, res: Response, next: NextFunction) => {
// musigny-index   await handle(new GetMusignyEntityNameBasicsBuilder(), req, res, next)
// musigny-index })

// musigny-show router.get('/MusignyEntityNameBasicSnakes/:id', async (req: Request, res: Response, next: NextFunction) => {
// musigny-show   await handle(new GetMusignyEntityNameBasicBuilder(), req, res, next)
// musigny-show })

// musigny-new router.post('/MusignyEntityNameBasicSnakes', async (req: Request, res: Response, next: NextFunction) => {
// musigny-new   await handle(new PostMusignyEntityNameBasicsBuilder(), req, res, next)
// musigny-new })

// musigny-edit router.put('/MusignyEntityNameBasicSnakes/:id', async (req: Request, res: Response, next: NextFunction) => {
// musigny-edit   await handle(new PutMusignyEntityNameBasicBuilder(), req, res, next)
// musigny-edit })

// musigny-destroy router.delete('/MusignyEntityNameBasicSnakes/:id', async (req: Request, res: Response, next: NextFunction) => {
// musigny-destroy   await handle(new DeleteMusignyEntityNameBasicBuilder(), req, res, next)
// musigny-destroy })

export default router
