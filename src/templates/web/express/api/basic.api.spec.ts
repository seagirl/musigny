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

  it('POST /api/MusignyEntityNameSnakes', async () => {
    const request = supertest(app.express)
    const response = await request.post('/api/MusignyEntityNameSnakes').query({ id: testId })
    const body = response.body

    if (response.status != 200)
      console.log(response.text)

    expect(response.status).toBe(200)
    expect(body.response).toBe('ok')
  })

  it('GET /api/MusignyEntityNameSnakes', async () => {
    const request = supertest(app.express)
    const response = await request.get('/api/MusignyEntityNameSnakes')
    const body = response.body

    if (response.status != 200)
      console.log(response.text)

    expect(response.status).toBe(200)
    expect(body.response).toBe('ok')

    expect(body.members).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: testId,
        })
      ])
    )
  })

  it('GET /api/MusignyEntityNameSnakes/:id', async () => {
    const request = supertest(app.express)
    const response = await request.get('/api/MusignyEntityNameSnakes/' + testId)
    const body = response.body

    if (response.status != 200)
      console.log(response.text)

    expect(response.status).toBe(200)
    expect(body.response).toBe('ok')

    expect(body.member).toEqual(
      expect.objectContaining({
        id: testId
      })
    )
  })

  it('PUT /api/MusignyEntityNameSnakes/:id', async () => {
    const request = supertest(app.express)
    let response = await request.put('/api/MusignyEntityNameSnakes/' + testId)
    let body = response.body

    if (response.status != 200)
      console.log(response.text)

    expect(response.status).toBe(200)
    expect(body.response).toBe('ok')
  })

  it('DELETE /api/MusignyEntityNameSnakes/:id', async () => {
    const request = supertest(app.express)
    const response = await request.delete('/api/MusignyEntityNameSnakes/' + testId)
    const body = response.body

    if (response.status != 200)
      console.log(response.text)

    expect(response.status).toBe(200)
    expect(body.response).toBe('ok')
  })
})
