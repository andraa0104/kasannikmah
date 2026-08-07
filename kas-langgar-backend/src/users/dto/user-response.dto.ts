import { Role } from '../../generated/prisma'

export class UserResponseDto {
  id: number
  username: string
  name: string
  role: Role
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
