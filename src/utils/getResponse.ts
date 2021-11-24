import {
  CALCULATION_ERROR,
  INVALID_INPUT_ERROR,
  MISSING_OR_INVALID_BODY_ERROR,
} from '../constants'
import { APIResponse } from '../types'
import { validate } from '../validation'
import { isEmpty } from './isEmpty'
import { isObject } from './isObject'
import { mockCalc } from './mockCalculation'

async function getResponse(reqBody: unknown): Promise<APIResponse> {
  if (isObject(reqBody) && !isEmpty(reqBody)) {
    const { input, errors: validationErrors } = await validate(reqBody)

    if (validationErrors) {
      return {
        status: 400,
        body: {
          error: INVALID_INPUT_ERROR,
          validationErrors,
        },
      }
    }

    // TODO: perform a calculation using the validated input
    const { computedData, error: calculationError } = await mockCalc(input)

    if (calculationError) {
      return {
        status: 500,
        body: {
          error: CALCULATION_ERROR,
        },
      }
    }

    return {
      status: 200,
      body: computedData,
    }
  }

  return { status: 400, body: { error: MISSING_OR_INVALID_BODY_ERROR } }
}

export { getResponse }
