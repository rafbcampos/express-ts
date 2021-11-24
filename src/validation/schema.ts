import { object, string, number, SchemaOf, StringSchema } from 'yup'

import { MaritalStatus, UserInput } from '../types'

const schema: SchemaOf<UserInput> = object().shape({
  age: number(),
  maritalStatus: string()
    .nullable()
    .matches(/(SINGLE|MARRIED)/) as StringSchema<MaritalStatus | undefined>,
  totalIncome: number(),
  numberOfDependents: number().positive().integer(),
})

export { schema }
