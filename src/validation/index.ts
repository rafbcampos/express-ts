import { ValidationError } from 'yup'
import { UserInput } from '../types'
import { schema } from './schema'

async function validate(obj: Record<string, any>): Promise<{
  input: UserInput
  errors: Partial<Record<keyof UserInput, string[]>> | null
}> {
  try {
    const input = await schema.validate(obj, { abortEarly: false })
    return { input, errors: null }
  } catch (err) {
    const errorsByField = (err as ValidationError).inner.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.path ?? curr.name]: curr.errors,
      }),
      {} as Partial<Record<keyof UserInput, string[]>>
    )
    return { input: {}, errors: errorsByField }
  }
}

export { validate }
