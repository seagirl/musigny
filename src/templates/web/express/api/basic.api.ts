import { NextFunction, Request, Response, Router } from 'express'
// import { GetMusignyEntityNameBasicsBuilder } from '../../builder/entity-name/get-MusignyEntityNameBasicSnakes.builder'
// import { GetMusignyEntityNameBasicBuilder } from '../../builder/entity-name/get-MusignyEntityNameBasicSnake.builder'
// import { PostMusignyEntityNameBasicsBuilder } from '../../builder/entity-name/post-MusignyEntityNameBasicSnakes.builder'
// import { PutMusignyEntityNameBasicBuilder } from '../../builder/entity-name/put-MusignyEntityNameBasicSnake.builder'
// import { DeleteMusignyEntityNameBasicBuilder } from '../../builder/entity-name/delete-MusignyEntityNameBasicSnake.builder'
import { handle } from '../util'

const router = Router()

// router.get('/MusignyEntityNameBasicSnakes', async (req: Request, res: Response, next: NextFunction) => {
//   await handle(new GetMusignyEntityNameBasicsBuilder(), req, res, next)
// })

// router.get('/MusignyEntityNameBasicSnakes/:id', async (req: Request, res: Response, next: NextFunction) => {
//   await handle(new GetMusignyEntityNameBasicBuilder(), req, res, next)
// })

// router.post('/MusignyEntityNameBasicSnakes', async (req: Request, res: Response, next: NextFunction) => {
//   await handle(new PostMusignyEntityNameBasicsBuilder(), req, res, next)
// })

// router.put('/MusignyEntityNameBasicSnakes/:id', async (req: Request, res: Response, next: NextFunction) => {
//   await handle(new PutMusignyEntityNameBasicBuilder(), req, res, next)
// })

// router.delete('/MusignyEntityNameBasicSnakes/:id', async (req: Request, res: Response, next: NextFunction) => {
//   await handle(new DeleteMusignyEntityNameBasicBuilder(), req, res, next)
// })

export default router
