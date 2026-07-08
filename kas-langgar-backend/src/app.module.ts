import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { TransactionsModule } from './transactions/transactions.module'
import { CommonModule } from './common/common.module'
import { PublicModule } from './public/public.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TransactionsModule,
    CommonModule,
    PublicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
