import { IsString, MinLength, IsEnum } from 'class-validator'
import { Role } from '@prisma/client'

export class RegisterDto {
  @IsString()
  username: string

  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  @MinLength(3)
  name: string

  @IsEnum(Role)
  role?: Role = Role.PENGURUS
}
