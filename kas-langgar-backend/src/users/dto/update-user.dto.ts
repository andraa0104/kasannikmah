import { IsString, IsEnum, IsBoolean, IsOptional, MinLength, IsArray } from 'class-validator'
import { Role } from '@prisma/client'

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string

  @IsOptional()
  @IsEnum(Role)
  role?: Role

  @IsOptional()
  @IsBoolean()
  isActive?: boolean

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[]
}
