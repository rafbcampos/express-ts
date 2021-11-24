import { ValidationError } from 'yup'
import { UserInput } from '../../src/types'
import { validate } from '../../src/validation'

const validInput: UserInput = {
  age: 33,
  maritalStatus: 'SINGLE',
  totalIncome: 100000,
  numberOfDependents: 2,
}

const partialInput: UserInput = {
  maritalStatus: 'SINGLE',
  totalIncome: 100000,
}

const invalidInput1 = {
  age: 'NaN',
  maritalStatus: 'SINGLE',
  totalIncome: 100000,
  numberOfDependents: 2,
}

const invalidInput2 = {
  age: 'NaN',
  maritalStatus: 'NOT_ALLOWED',
  totalIncome: 100000,
}

describe('validate', () => {
  it('returns the input if valid', async () => {
    const { input, errors } = await validate(validInput)

    expect(errors).toBeNull()
    expect(input).toStrictEqual(validInput)
  })

  it('returns the partial input if valid', async () => {
    const { input, errors } = await validate(partialInput)

    expect(errors).toBeNull()
    expect(input).toStrictEqual(partialInput)
  })

  it('thrown an error if the input fails the validation', async () => {
    const { input, errors } = await validate(invalidInput1)

    expect(input).toStrictEqual({})
    expect(errors).toStrictEqual({
      age: [
        'age must be a `number` type, but the final value was: `NaN` (cast from the value `"NaN"`).',
      ],
    })
  })

  it('thrown an error containing an array of error messages if abortEarly is set to false', async () => {
    const { input, errors } = await validate(invalidInput2)

    expect(input).toStrictEqual({})
    expect(errors).toStrictEqual({
      age: [
        'age must be a `number` type, but the final value was: `NaN` (cast from the value `"NaN"`).',
      ],
      maritalStatus: [
        'maritalStatus must match the following: "/(SINGLE|MARRIED)/"',
      ],
    })
  })
})
