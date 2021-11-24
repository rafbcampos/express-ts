export type MaritalStatus = 'SINGLE' | 'MARRIED'

interface UserData {
  age: number
  maritalStatus: MaritalStatus
  totalIncome: number
  numberOfDependents: number
}

export type UserInput = Partial<UserData>

export interface ComputedData {
  totalDeductions: number
  totalCredits: number
  refund: number
}

export type APIResponse =
  | {
      status: 400 | 500
      body: {
        error: string
        validationErrors?: Partial<Record<keyof UserData, string[]>>
      }
    }
  | {
      status: 200
      body: ComputedData
    }
