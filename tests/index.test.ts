import request from 'supertest'

import { server } from '../src'
import {
  INVALID_INPUT_ERROR,
  MISSING_OR_INVALID_BODY_ERROR,
} from '../src/constants'
import { ComputedData, UserInput } from '../src/types'

const validInput: UserInput = {
  age: 33,
  maritalStatus: 'SINGLE',
  totalIncome: 100000,
  numberOfDependents: 2,
}
const expectedResponseBody: ComputedData = {
  refund: -14000,
  totalCredits: 0,
  totalDeductions: 1000,
}

const invalidInput1 = {
  age: 'NaN',
  maritalStatus: 'SINGLE',
  totalIncome: 100000,
  numberOfDependents: 2,
}

describe('POST /', function () {
  afterAll(() => {
    server.close()
  })

  it('responds with computed data if the input is valid', async () => {
    const res = await request(server).post('/').send(validInput)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual(expectedResponseBody)
  })

  it('responds with error if missing body', async () => {
    const res = await request(server).post('/')

    expect(res.statusCode).toEqual(400)
    expect(res.body).toStrictEqual({ error: MISSING_OR_INVALID_BODY_ERROR })
  })

  it('responds with error if the input is invalid', async () => {
    const res = await request(server).post('/').send(invalidInput1)

    expect(res.statusCode).toEqual(400)
    expect(res.body).toStrictEqual({
      error: INVALID_INPUT_ERROR,
      validationErrors: {
        age: [
          'age must be a `number` type, but the final value was: `NaN` (cast from the value `"NaN"`).',
        ],
      },
    })
  })
})
