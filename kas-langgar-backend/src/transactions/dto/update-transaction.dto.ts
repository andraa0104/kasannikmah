import { IsDateString, IsEnum, IsDecimal, IsString, IsOptional, Min } from 'class-validator'
import { TransactionType } from '@prisma/client'
import { Type } from 'class-transformer'

export class UpdateTransactionDto {
  @IsOptional()
  @IsDateString()
  date?: string

  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  amount?: number

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  category?: string
}
