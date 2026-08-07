import { IsDateString, IsEnum, IsString, IsOptional, Min, IsInt } from 'class-validator'
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

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  accountId?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  fundCategoryId?: number

  @IsOptional()
  @IsString()
  attachmentUrl?: string
}
