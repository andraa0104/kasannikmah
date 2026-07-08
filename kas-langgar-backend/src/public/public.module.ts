import { Module } from '@nestjs/common';
import { PublicController } from '../public/public.controller';
import { TransactionsModule } from '../transactions/transactions.module';

@Module({
  imports: [TransactionsModule],
  controllers: [PublicController],
})
export class PublicModule {}
