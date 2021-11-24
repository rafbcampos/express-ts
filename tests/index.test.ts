import request from 'supertest'

import { server } from '../src'

describe('GET /user', function () {
  afterAll(() => {
    server.close()
  })
  it('responds with json', async () => {
    const res = await request(server).get('/user')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
  })
})
