import { IsOptional, IsEnum, IsNumberString } from 'class-validator'
import { TransactionType } from '@prisma/client'

export class TransactionQueryDto {
  @IsOptional()
  @IsNumberString()
  month?: string

  @IsOptional()
  @IsNumberString()
  year?: string

  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType

  @IsOptional()
  @IsNumberString()
  skip?: string

  @IsOptional()
  @IsNumberString()
  take?: string
}
