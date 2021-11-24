import { UserInput, ComputedData } from '../types'

// TODO: remove mock function:
async function mockCalc(input: UserInput): Promise<{
  computedData: ComputedData
  error: string | null
}> {
  const totalDeductions = (input.numberOfDependents ?? 0) * 500
  const totalCredits = input.maritalStatus === 'MARRIED' ? 2000 : 0
  const refund = input.totalIncome
    ? totalDeductions + totalCredits - input.totalIncome * 0.15
    : 0

  return Promise.resolve({
    computedData: {
      totalDeductions,
      totalCredits,
      refund,
    },
    error: null,
  })
}

export { mockCalc }
