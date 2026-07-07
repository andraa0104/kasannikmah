import { IsString, IsOptional, MinLength } from 'class-validator'

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string
}
