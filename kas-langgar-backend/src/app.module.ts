import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { TransactionsModule } from './transactions/transactions.module'
import { AccountsModule } from './accounts/accounts.module'
import { ReportsModule } from './reports/reports.module'
import { CommonModule } from './common/common.module'
import { PublicModule } from './public/public.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads'
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TransactionsModule,
    AccountsModule,
    ReportsModule,
    CommonModule,
    PublicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
