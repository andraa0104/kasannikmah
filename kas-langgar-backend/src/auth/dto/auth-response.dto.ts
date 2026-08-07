import { Role } from '../../generated/prisma'

export class AuthResponseDto {
  access_token: string
  user: {
    id: number
    username: string
    name: string
    role: Role
    permissions: string[]
  }
}
