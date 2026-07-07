import { IsDateString, IsEnum, IsDecimal, IsString, IsOptional, Min } from 'class-validator'
import { TransactionType } from '@prisma/client'
import { Type } from 'class-transformer'

export class CreateTransactionDto {
  @IsDateString()
  date: string

  @IsEnum(TransactionType)
  type: TransactionType

  @Type(() => Number)
  @Min(0)
  amount: number

  @IsOptional()
  @IsString()
  description?: string

  @IsString()
  category: string
}
