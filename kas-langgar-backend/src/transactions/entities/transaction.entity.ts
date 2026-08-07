import { TransactionType } from '../../generated/prisma'

export class TransactionEntity {
  id: number
  date: Date
  type: TransactionType
  amount: number
  description: string | null
  category: string
  createdBy: number
  createdAt: Date
  updatedAt: Date
}
