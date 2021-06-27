import supertest from 'supertest'

export const checkStatus = (response: supertest.Response): void => {
  if (response.status != 200)
    console.log(response.text)

  expect(response.status).toBe(200)
}