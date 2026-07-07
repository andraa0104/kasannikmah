import { Role } from '@prisma/client'

export class UserResponseDto {
  id: number
  username: string
  name: string
  role: Role
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
