import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  BadRequestException
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import * as fs from 'fs'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../common/guards/roles.guard'
import { Roles } from '../common/decorators/roles.decorator'
import { CurrentUser } from '../common/decorators/current-user.decorator'
import { TransactionsService } from './transactions.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { TransactionQueryDto } from './dto/transaction-query.dto'

const uploadDir = './uploads/proofs'
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

@Controller('transactions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('upload')
  @Roles('ADMIN', 'BENDAHARA')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: uploadDir,
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
          cb(null, `proof-${uniqueSuffix}${extname(file.originalname)}`)
        }
      }),
      limits: { fileSize: 2 * 1024 * 1024 }, // Max 2MB to save VPS resources
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
          return cb(new BadRequestException('Format file harus JPG, PNG, atau PDF'), false)
        }
        cb(null, true)
      }
    })
  )
  uploadProof(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('File gagal diunggah')
    }
    return {
      url: `/uploads/proofs/${file.filename}`
    }
  }

  @Post()
  @Roles('ADMIN', 'BENDAHARA')
  create(
    @Body() createTransactionDto: CreateTransactionDto,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.create(createTransactionDto, user.userId)
  }

  @Get()
  findAll(@Query() query: TransactionQueryDto) {
    return this.transactionsService.findAll(query)
  }

  @Get('summary/:month/:year')
  getMonthlySummary(
    @Param('month', ParseIntPipe) month: number,
    @Param('year', ParseIntPipe) year: number
  ) {
    return this.transactionsService.getMonthlySummary(month, year)
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.findOne(id)
  }

  @Patch(':id')
  @Roles('ADMIN', 'BENDAHARA')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.update(id, updateTransactionDto, user.userId, user.role)
  }

  @Delete(':id')
  @Roles('ADMIN', 'BENDAHARA')
  remove(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.transactionsService.remove(id, user.userId, user.role)
  }
}
