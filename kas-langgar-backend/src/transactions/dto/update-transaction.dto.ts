import { IsDateString, IsEnum, IsString, IsOptional, Min, IsInt } from 'class-validator'
import { TransactionType } from '../../generated/prisma'
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
