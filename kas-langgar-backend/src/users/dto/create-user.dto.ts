import { IsString, MinLength, IsEnum, IsArray, IsOptional } from 'class-validator'
import { Role } from '@prisma/client'

export class CreateUserDto {
  @IsString()
  username: string

  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  @MinLength(3)
  name: string

  @IsEnum(Role)
  role: Role

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[]
}
