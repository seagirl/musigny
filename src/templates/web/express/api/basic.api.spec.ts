import supertest from 'supertest'
import Application from '../app'

const testId = 1
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
  // musigny-new   const response = await request.post('/api/MusignyEntityNameBasicSnakes').query({ id: testId })
  // musigny-new   const body = response.body

  // musigny-new   if (response.status != 200)
  // musigny-new     console.log(response.text)

  // musigny-new   expect(response.status).toBe(200)
  // musigny-new   expect(body.response).toBe('ok')
  // musigny-new })

  // musigny-index it('GET /api/MusignyEntityNameBasicSnakes', async () => {
  // musigny-index   const request = supertest(app.express)
  // musigny-index   const response = await request.get('/api/MusignyEntityNameBasicSnakes')
  // musigny-index   const body = response.body

  // musigny-index   if (response.status != 200)
  // musigny-index     console.log(response.text)

  // musigny-index   expect(response.status).toBe(200)
  // musigny-index   expect(body.response).toBe('ok')

  // musigny-index   expect(body.MusignyEntityNameBasicSnakes).toEqual(
  // musigny-index     expect.arrayContaining([
  // musigny-index       expect.objectContaining({
  // musigny-index         id: testId,
  // musigny-index       })
  // musigny-index     ])
  // musigny-index   )
  // musigny-index })

  // musigny-show it('GET /api/MusignyEntityNameBasicSnakes/:id', async () => {
  // musigny-show   const request = supertest(app.express)
  // musigny-show   const response = await request.get('/api/MusignyEntityNameBasicSnakes/' + testId)
  // musigny-show   const body = response.body

  // musigny-show   if (response.status != 200)
  // musigny-show     console.log(response.text)

  // musigny-show   expect(response.status).toBe(200)
  // musigny-show   expect(body.response).toBe('ok')

  // musigny-show   expect(body.MusignyEntityNameBasicSnake).toEqual(
  // musigny-show     expect.objectContaining({
  // musigny-show       id: testId
  // musigny-show     })
  // musigny-show   )
  // musigny-show })

  // musigny-edit it('PUT /api/MusignyEntityNameBasicSnakes/:id', async () => {
  // musigny-edit   const request = supertest(app.express)
  // musigny-edit   const response = await request.put('/api/MusignyEntityNameBasicSnakes/' + testId)
  // musigny-edit   const body = response.body

  // musigny-edit   if (response.status != 200)
  // musigny-edit     console.log(response.text)

  // musigny-edit   expect(response.status).toBe(200)
  // musigny-edit   expect(body.response).toBe('ok')
  // musigny-edit })

  // musigny-destroy it('DELETE /api/MusignyEntityNameBasicSnakes/:id', async () => {
  // musigny-destroy   const request = supertest(app.express)
  // musigny-destroy   const response = await request.delete('/api/MusignyEntityNameBasicSnakes/' + testId)
  // musigny-destroy   const body = response.body

  // musigny-destroy   if (response.status != 200)
  // musigny-destroy     console.log(response.text)

  // musigny-destroy   expect(response.status).toBe(200)
  // musigny-destroy   expect(body.response).toBe('ok')
  // musigny-destroy })
})
