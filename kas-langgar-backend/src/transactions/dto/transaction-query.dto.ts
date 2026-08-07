import { IsOptional, IsEnum, IsNumberString } from 'class-validator'
import { TransactionType } from '../../generated/prisma'

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
