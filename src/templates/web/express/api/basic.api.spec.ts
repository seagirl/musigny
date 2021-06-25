import supertest from 'supertest'
import { checkStatus } from '../../../core/test/supertest'
import Application from '../app'

let testId: number

const app = new Application()

describe('MusignyEntityNameBasic API', () => {
  beforeAll(async () => {
    await app.init()
  })

  afterAll(async () => {
    await app.finish()
  })

  // musigny-new it('POST /api/MusignyEntityNameBasicSnakes', async () => {
  // musigny-new   const request = supertest(app.express)
  // musigny-new   const response = await request.post('/api/MusignyEntityNameBasicSnakes')
  // musigny-new     .set('Content-Type', 'application/json')
  // musigny-new     .set('Accept', 'application/json')
  // musigny-new     .send({
  // musigny-new       title: 'hogehoge'
  // musigny-new     })
  // musigny-new   checkStatus(response)

  // musigny-new   testId = response.body.id
  // musigny-new })

  // musigny-index it('GET /api/MusignyEntityNameBasicSnakes', async () => {
  // musigny-index   const request = supertest(app.express)
  // musigny-index   const response = await request.get('/api/MusignyEntityNameBasicSnakes')
  // musigny-index   checkStatus(response)
  // musigny-index })

  // musigny-show it('GET /api/MusignyEntityNameBasicSnakes/:id', async () => {
  // musigny-show   const request = supertest(app.express)
  // musigny-show   const response = await request.get('/api/MusignyEntityNameBasicSnakes/' + testId)
  // musigny-show   checkStatus(response)
  // musigny-show })

  // musigny-edit it('PUT /api/MusignyEntityNameBasicSnakes/:id', async () => {
  // musigny-edit   const request = supertest(app.express)
  // musigny-edit   const response = await request.put('/api/MusignyEntityNameBasicSnakes/' + testId)
  // musigny-edit   checkStatus(response)
  // musigny-edit })

  // musigny-destroy it('DELETE /api/MusignyEntityNameBasicSnakes/:id', async () => {
  // musigny-destroy   const request = supertest(app.express)
  // musigny-destroy   const response = await request.delete('/api/MusignyEntityNameBasicSnakes/' + testId)
  // musigny-destroy   checkStatus(response)
  // musigny-destroy })
})
