# 🕌 Prompt Antigravity IDE: Kas Langgar An-Nikmah
## Full-Stack Application (NestJS + Vue.js + Prisma + MySQL)

---

## 📋 CONTEXT & REQUIREMENTS

**Aplikasi:** Sistem Manajemen Kas Langgar (Masjid) An-Nikmah  
**Tujuan:** Mencatat dan melaporkan kas masuk/keluar dengan multiple users & roles  
**Stack:**
- **Backend:** NestJS + TypeScript + Prisma + MySQL
- **Frontend:** Vue.js 3 + TypeScript + Material UI + Pinia
- **Authentication:** JWT + Passport.js
- **Deployment:** Docker ready

**Users & Roles:**
- **ADMIN** - Full access, manage users, view all reports
- **BENDAHARA** - Create/edit transactions, view reports
- **PENGURUS** - View only, cannot edit

---

## 🎯 PHASE 1: BACKEND SETUP (NestJS + Prisma)

### **TASK 1.1: Project Structure & Configuration**

Buatkan struktur folder NestJS dengan konfigurasi awal:

```
kas-langgar-backend/
├── prisma/
│   ├── schema.prisma           # Database schema (dibuat di task berikutnya)
│   └── seed.ts                 # Seed data (user dummy, transactions dummy)
├── src/
│   ├── common/                 # Shared utilities
│   │   ├── decorators/
│   │   │   ├── roles.decorator.ts        # @Roles() decorator
│   │   │   └── current-user.decorator.ts # @CurrentUser() decorator
│   │   ├── guards/
│   │   │   └── roles.guard.ts           # RolesGuard untuk RBAC
│   │   ├── interceptors/
│   │   │   └── transform.interceptor.ts # Response transformation
│   │   └── exceptions/
│   │       └── http-exception.filter.ts # Global error handling
│   │
│   ├── auth/                   # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── strategies/
│   │   │   └── jwt.strategy.ts
│   │   ├── guards/
│   │   │   └── jwt-auth.guard.ts
│   │   └── dto/
│   │       ├── login.dto.ts
│   │       ├── register.dto.ts
│   │       └── auth-response.dto.ts
│   │
│   ├── users/                  # User management module
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   └── dto/
│   │       ├── create-user.dto.ts
│   │       ├── update-user.dto.ts
│   │       └── user-response.dto.ts
│   │
│   ├── transactions/           # Transaction module
│   │   ├── transactions.controller.ts
│   │   ├── transactions.service.ts
│   │   ├── transactions.module.ts
│   │   ├── entities/
│   │   │   └── transaction.entity.ts
│   │   └── dto/
│   │       ├── create-transaction.dto.ts
│   │       ├── update-transaction.dto.ts
│   │       ├── transaction-response.dto.ts
│   │       └── transaction-query.dto.ts
│   │
│   ├── reports/                # Report & analytics module
│   │   ├── reports.controller.ts
│   │   ├── reports.service.ts
│   │   ├── reports.module.ts
│   │   ├── entities/
│   │   │   └── monthly-report.entity.ts
│   │   └── dto/
│   │       └── report-query.dto.ts
│   │
│   ├── prisma/                 # Database service
│   │   ├── prisma.service.ts
│   │   └── prisma.module.ts
│   │
│   ├── app.module.ts           # Root module (import semua module)
│   ├── app.controller.ts       # Health check endpoint
│   └── main.ts                 # Entry point dengan GlobalExceptionFilter
│
├── .env.example                # Environment variables template
├── .env                        # Local environment (git ignored)
├── .dockerignore
├── Dockerfile
├── docker-compose.yml          # MySQL + NestJS
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config
└── README.md                   # Setup documentation
```

**Instruksi Lengkap:**
1. Generate project dengan: `nest new kas-langgar-backend`
2. Install dependencies:
   ```bash
   npm install @nestjs/jwt @nestjs/passport @nestjs/typeorm
   npm install @prisma/client prisma passport-jwt bcrypt
   npm install class-validator class-transformer mysql2
   npm install -D @types/bcrypt
   ```
3. Setup Prisma: `npx prisma init`
4. Update `.env` dengan MySQL connection string (lokal atau Docker)
5. Buat folder structure seperti di atas
6. Buat file `.env.example` sebagai template

**Expected Output:** 
- Folder structure lengkap
- `.env.example` file
- `package.json` dengan semua dependency
- `tsconfig.json` configured correctly

---

### **TASK 1.2: Prisma Schema (Database Design)**

Buatkan file `prisma/schema.prisma` dengan schema lengkap:

```prisma
// prisma/schema.prisma

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

/**
 * USER MODEL
 * 
 * Menyimpan data pengguna sistem.
 * Role: ADMIN (full access), BENDAHARA (create/edit trans), PENGURUS (view only)
 * 
 * Fields:
 * - id: Unique identifier
 * - email: Unique email untuk login
 * - password: Hashed password dengan bcrypt
 * - name: Nama lengkap pengguna
 * - role: User role (ADMIN, BENDAHARA, PENGURUS)
 * - isActive: Flag untuk soft delete
 * - createdAt: Timestamp saat user dibuat
 * - updatedAt: Timestamp saat user diupdate
 * - transactions: Relasi ke Transaction (many-to-one)
 */
model User {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  password  String
  name      String
  role      Role    @default(PENGURUS)
  isActive  Boolean @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relasi
  transactions Transaction[]

  @@map("users")
  @@index([email])
  @@index([role])
}

/**
 * TRANSACTION MODEL
 * 
 * Menyimpan setiap kas masuk/keluar.
 * 
 * Fields:
 * - id: Unique identifier
 * - date: Tanggal transaksi
 * - type: INCOME (masuk) atau EXPENSE (keluar)
 * - amount: Nominal dalam Rupiah
 * - description: Keterangan transaksi
 * - category: Kategori (e.g., Shodaqoh, Iuran, Sunah, Biaya Operasional, dll)
 * - createdBy: User ID yang membuat transaksi
 * - user: Relasi ke User
 * - createdAt: Timestamp saat dibuat
 * - updatedAt: Timestamp saat diupdate
 * 
 * Catatan:
 * - amount menggunakan Decimal untuk presisi keuangan
 * - date indexed untuk query laporan bulanan
 * - soft delete bisa ditambah dengan deletedAt field
 */
model Transaction {
  id          Int     @id @default(autoincrement())
  date        DateTime
  type        TransactionType
  amount      Decimal @db.Decimal(15, 2)
  description String?
  category    String
  createdBy   Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relasi
  user        User    @relation(fields: [createdBy], references: [id], onDelete: Cascade)

  @@map("transactions")
  @@index([date])
  @@index([type])
  @@index([createdBy])
  @@index([createdAt])
}

/**
 * ENUM: TransactionType
 * 
 * INCOME: Uang masuk (infaq, zakat, shodaqoh, dll)
 * EXPENSE: Uang keluar (operasional, perbaikan, dll)
 */
enum TransactionType {
  INCOME
  EXPENSE
}

/**
 * ENUM: Role
 * 
 * ADMIN: 
 *   - Full access ke semua fitur
 *   - Bisa manage user
 *   - Bisa lihat semua report
 *   - Bisa edit/delete transaction apapun
 *
 * BENDAHARA:
 *   - Bisa create/edit/delete transaction sendiri
 *   - Bisa lihat report
 *   - Tidak bisa manage user
 *
 * PENGURUS:
 *   - Hanya bisa view (read-only)
 *   - Tidak bisa create/edit/delete apapun
 */
enum Role {
  ADMIN
  BENDAHARA
  PENGURUS
}
```

**Instruksi:**
1. Ganti file `prisma/schema.prisma` dengan schema di atas
2. Update `DATABASE_URL` di `.env`: `mysql://root:password@localhost:3306/kas_langgar`
3. Jalankan: `npx prisma migrate dev --name init`
4. Generate Prisma client: `npx prisma generate`
5. Verifikasi dengan: `npx prisma studio` (buka di browser http://localhost:5555)

**Expected Output:**
- File `prisma/schema.prisma` dengan dokumentasi lengkap
- Migration file di `prisma/migrations/`
- Prisma client generated
- Database MySQL tercipta dengan tabel users & transactions

---

### **TASK 1.3: Prisma Service & Configuration**

Buatkan module untuk Prisma:

**File: `src/prisma/prisma.service.ts`**
```typescript
/**
 * PRISMA SERVICE
 * 
 * Service untuk manage Prisma Client connection ke database.
 * 
 * Fungsi:
 * 1. Extend PrismaClient untuk initialize connection saat app start
 * 2. Disconnect saat app shutdown
 * 3. Bisa di-inject ke module lain via dependency injection
 * 
 * Lifecycle:
 * - onModuleInit(): Connect ke database saat NestJS module initialize
 * - onModuleDestroy(): Disconnect saat NestJS shutdown
 */

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  /**
   * onModuleInit()
   * Dipanggil otomatis saat module diinisialize
   * Mengkoneksikan ke database
   */
  async onModuleInit() {
    await this.$connect()
    console.log('✅ Database connected successfully')
  }

  /**
   * onModuleDestroy()
   * Dipanggil otomatis saat aplikasi shutdown
   * Memutuskan connection ke database
   */
  async onModuleDestroy() {
    await this.$disconnect()
    console.log('❌ Database disconnected')
  }
}
```

**File: `src/prisma/prisma.module.ts`**
```typescript
/**
 * PRISMA MODULE
 * 
 * Module untuk export PrismaService agar bisa di-inject ke module lain.
 * 
 * Cara pakai:
 * 1. Import PrismaModule di module yang butuh database
 * 2. Inject PrismaService di service: constructor(private prisma: PrismaService)
 * 3. Gunakan: await this.prisma.user.findMany()
 */

import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService],
  exports: [PrismaService]  // Export agar bisa diimport di module lain
})
export class PrismaModule {}
```

**Instruksi:**
1. Buat folder `src/prisma/`
2. Buat file `prisma.service.ts` dan `prisma.module.ts` seperti di atas
3. Update `src/app.module.ts` untuk import PrismaModule

**Expected Output:**
- Prisma service siap untuk digunakan di module lain
- Connection ke MySQL established saat app start
- Proper cleanup saat app shutdown

---

### **TASK 1.4: Auth Module - DTO & Strategy**

Buatkan authentication module dengan JWT:

**File: `src/auth/dto/login.dto.ts`**
```typescript
/**
 * LOGIN DTO
 * 
 * Data Transfer Object untuk request login.
 * Menggunakan class-validator untuk validasi otomatis.
 * 
 * Validasi:
 * - email: Required, harus format email valid
 * - password: Required, minimum 6 karakter
 */

import { IsEmail, IsString, MinLength } from 'class-validator'

export class LoginDto {
  /**
   * Email pengguna
   * Format: user@example.com
   */
  @IsEmail()
  email: string

  /**
   * Password pengguna (plain text, akan di-hash saat disimpan)
   * Minimum 6 karakter
   */
  @IsString()
  @MinLength(6)
  password: string
}
```

**File: `src/auth/dto/register.dto.ts`**
```typescript
/**
 * REGISTER DTO
 * 
 * Data Transfer Object untuk request register user baru.
 * Extends LoginDto + tambahan field name dan role.
 */

import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator'
import { Role } from '@prisma/client'

export class RegisterDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  @MinLength(3)
  name: string

  @IsEnum(Role)
  role?: Role = Role.PENGURUS  // Default: PENGURUS
}
```

**File: `src/auth/dto/auth-response.dto.ts`**
```typescript
/**
 * AUTH RESPONSE DTO
 * 
 * Response yang dikembalikan saat login/register berhasil.
 * Includes: access token + user info
 */

import { Role } from '@prisma/client'

export class AuthResponseDto {
  /**
   * JWT Token yang digunakan untuk authentication request berikutnya.
   * Kirim di header: Authorization: Bearer {token}
   */
  access_token: string

  /**
   * User info yang login
   */
  user: {
    id: number
    email: string
    name: string
    role: Role
  }
}
```

**File: `src/auth/strategies/jwt.strategy.ts`**
```typescript
/**
 * JWT STRATEGY
 * 
 * Strategy untuk Passport.js menvalidasi JWT token.
 * 
 * Cara kerja:
 * 1. User login → server kirim JWT token
 * 2. Client kirim token di header: Authorization: Bearer {token}
 * 3. Passport extract token dan validasi
 * 4. Jika valid → buat request.user dengan payload dari token
 * 5. Controller bisa akses user data via @Request() atau @CurrentUser()
 */

import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

interface JwtPayload {
  sub: number      // user id
  email: string
  role: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor
   * 
   * Config Passport untuk extract & validate JWT
   * - fromAuthHeaderAsBearerToken(): Ambil token dari header Authorization
   * - secretOrKey: Secret key untuk verify signature token
   */
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'your-secret-key'
    })
  }

  /**
   * validate()
   * 
   * Method yang dipanggil Passport saat token valid.
   * Payload adalah decoded JWT token.
   * Return value akan dijadikan request.user
   * 
   * @param payload - JWT payload (sub, email, role)
   * @returns User object yang akan disimpan di request.user
   */
  validate(payload: JwtPayload) {
    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role
    }
  }
}
```

**File: `src/auth/guards/jwt-auth.guard.ts`**
```typescript
/**
 * JWT AUTH GUARD
 * 
 * Guard untuk check apakah user sudah authenticated.
 * Gunakan @UseGuards(JwtAuthGuard) di controller method.
 * 
 * Cara kerja:
 * 1. Extract token dari header
 * 2. Validate token dengan JWT strategy
 * 3. Jika valid → izinkan akses, jika tidak → return 401 Unauthorized
 */

import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

**Instruksi:**
1. Buat folder `src/auth/dto/` dan `src/auth/strategies/` dan `src/auth/guards/`
2. Buat file-file DTO seperti di atas
3. Buat JwtStrategy dan JwtAuthGuard
4. Install ConfigService: `npm install @nestjs/config`

**Expected Output:**
- DTO files siap untuk validasi request
- JWT Strategy siap untuk authenticate token
- Guard siap untuk melindungi endpoint

---

### **TASK 1.5: Auth Service & Controller**

Buatkan auth service dan controller:

**File: `src/auth/auth.service.ts`**
```typescript
/**
 * AUTH SERVICE
 * 
 * Service untuk handle login & register logic.
 * 
 * Fungsi:
 * 1. register() - Create user baru dengan password yang di-hash
 * 2. login() - Validate email/password, return JWT token
 * 3. validateUser() - Helper untuk validate user (digunakan oleh strategy)
 */

import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { AuthResponseDto } from './dto/auth-response.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  /**
   * Constructor
   * 
   * Inject dependencies:
   * - prisma: Untuk database operations
   * - jwtService: Untuk generate JWT token
   */
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  /**
   * register()
   * 
   * Create user baru.
   * 
   * @param registerDto - Email, password, name, role
   * @returns User object (tanpa password)
   * 
   * Proses:
   * 1. Check apakah email sudah terdaftar
   * 2. Hash password dengan bcrypt (salt rounds: 10)
   * 3. Create user di database
   * 4. Return user data
   */
  async register(registerDto: RegisterDto) {
    const { email, password, name, role } = registerDto

    // Check apakah email sudah terdaftar
    const existingUser = await this.prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw new BadRequestException('Email sudah terdaftar')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: role || 'PENGURUS'
      }
    })

    // Return user (tanpa password)
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  }

  /**
   * login()
   * 
   * Authenticate user dan return JWT token.
   * 
   * @param loginDto - Email & password
   * @returns AuthResponseDto (token + user info)
   * 
   * Proses:
   * 1. Find user by email
   * 2. Validate password (compare dengan bcrypt)
   * 3. Generate JWT token dengan user info
   * 4. Return token + user data
   */
  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const { email, password } = loginDto

    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw new UnauthorizedException('Email atau password salah')
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email atau password salah')
    }

    // Check apakah user active
    if (!user.isActive) {
      throw new UnauthorizedException('User account tidak aktif')
    }

    // Generate JWT token
    const payload = {
      sub: user.id,        // sub (subject) = user id
      email: user.email,
      role: user.role
    }

    const access_token = this.jwtService.sign(payload, {
      expiresIn: '7d'  // Token valid 7 hari
    })

    return {
      access_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    }
  }

  /**
   * validateUser()
   * 
   * Helper method untuk validate user (digunakan oleh JWT strategy).
   * 
   * @param userId - User ID dari JWT payload
   * @returns User object atau null jika tidak ditemukan
   */
  async validateUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user || !user.isActive) {
      return null
    }

    return user
  }
}
```

**File: `src/auth/auth.controller.ts`**
```typescript
/**
 * AUTH CONTROLLER
 * 
 * Endpoint untuk login & register.
 * 
 * Endpoints:
 * - POST /auth/register - Register user baru
 * - POST /auth/login - Login & dapatkan JWT token
 */

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { AuthResponseDto } from './dto/auth-response.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * POST /auth/register
   * 
   * Register user baru.
   * 
   * Request body:
   * {
   *   "email": "user@example.com",
   *   "password": "password123",
   *   "name": "John Doe",
   *   "role": "PENGURUS"  // optional, default: PENGURUS
   * }
   * 
   * Response:
   * {
   *   "id": 1,
   *   "email": "user@example.com",
   *   "name": "John Doe",
   *   "role": "PENGURUS"
   * }
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  /**
   * POST /auth/login
   * 
   * Login dan dapatkan JWT token.
   * 
   * Request body:
   * {
   *   "email": "user@example.com",
   *   "password": "password123"
   * }
   * 
   * Response:
   * {
   *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
   *   "user": {
   *     "id": 1,
   *     "email": "user@example.com",
   *     "name": "John Doe",
   *     "role": "PENGURUS"
   *   }
   * }
   * 
   * Usage token:
   * - Simpan token di local storage / session storage
   * - Kirim di header setiap request: Authorization: Bearer {token}
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(loginDto)
  }
}
```

**File: `src/auth/auth.module.ts`**
```typescript
/**
 * AUTH MODULE
 * 
 * Module untuk authentication features.
 * 
 * Imports:
 * - JwtModule: Sign & verify JWT token
 * - PassportModule: Passport.js integration
 * - PrismaModule: Database access
 * 
 * Providers:
 * - AuthService: Login & register logic
 * - JwtStrategy: JWT validation strategy
 * 
 * Controllers:
 * - AuthController: Login & register endpoints
 * 
 * Exports:
 * - JwtModule: Supaya module lain bisa import JwtModule
 * - AuthService: Supaya module lain bisa inject AuthService
 * - JwtStrategy: Supaya JwtAuthGuard bisa dipakai di module lain
 */

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './strategies/jwt.strategy'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key',
        signOptions: {
          expiresIn: '7d'
        }
      })
    })
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, AuthService, JwtStrategy]
})
export class AuthModule {}
```

**Instruksi:**
1. Buat file-file di atas di `src/auth/`
2. Update `.env` dengan: `JWT_SECRET=your-super-secret-key-here`
3. Install dependencies jika belum: `npm install @nestjs/jwt @nestjs/passport passport-jwt bcrypt`

**Expected Output:**
- Auth service siap handle login/register
- Auth controller dengan 2 endpoint (register, login)
- JWT strategy untuk validate token
- Auth module siap untuk di-import di app.module

---

### **TASK 1.6: User Management Module**

Buatkan user management module (CRUD user, update role):

**File: `src/users/entities/user.entity.ts`**
```typescript
/**
 * USER ENTITY
 * 
 * Representasi User dari database ke application.
 * Digunakan untuk type-safety saat return response.
 */

import { Role } from '@prisma/client'

export class UserEntity {
  id: number
  email: string
  name: string
  role: Role
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
```

**File: `src/users/dto/create-user.dto.ts`**
```typescript
/**
 * CREATE USER DTO
 * 
 * Request body untuk create user baru (hanya admin yang bisa).
 * Sama seperti RegisterDto tapi dengan validation yang berbeda.
 */

import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator'
import { Role } from '@prisma/client'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  @MinLength(3)
  name: string

  @IsEnum(Role)
  role: Role
}
```

**File: `src/users/dto/update-user.dto.ts`**
```typescript
/**
 * UPDATE USER DTO
 * 
 * Request body untuk update user (optional fields).
 * Digunakan untuk update name, role, atau status.
 * Password update disarankan via separate endpoint.
 */

import { IsString, IsEnum, IsBoolean, IsOptional, MinLength } from 'class-validator'
import { Role } from '@prisma/client'

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string

  @IsOptional()
  @IsEnum(Role)
  role?: Role

  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}
```

**File: `src/users/dto/user-response.dto.ts`**
```typescript
/**
 * USER RESPONSE DTO
 * 
 * Response untuk list/get user (tanpa password).
 * Digunakan saat return user data ke client.
 */

import { Role } from '@prisma/client'

export class UserResponseDto {
  id: number
  email: string
  name: string
  role: Role
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
```

**File: `src/users/users.service.ts`**
```typescript
/**
 * USERS SERVICE
 * 
 * Service untuk user management (CRUD operations).
 * 
 * Fungsi:
 * - create() - Create user baru (only by ADMIN)
 * - findAll() - Get semua user
 * - findOne() - Get user by ID
 * - update() - Update user info (only by ADMIN)
 * - remove() - Soft delete user (set isActive = false)
 */

import { Injectable, ForbiddenException, NotFoundException, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserResponseDto } from './dto/user-response.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * create()
   * 
   * Create user baru (hanya ADMIN yang bisa).
   * 
   * @param createUserDto - Email, password, name, role
   * @param adminId - ID admin yang create user (untuk audit)
   * @returns User object (tanpa password)
   */
  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const { email, password, name, role } = createUserDto

    // Check apakah email sudah terdaftar
    const existingUser = await this.prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw new BadRequestException('Email sudah terdaftar')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role
      }
    })

    return this.toUserResponseDto(user)
  }

  /**
   * findAll()
   * 
   * Get semua user yang active.
   * Digunakan untuk list user di dashboard (hanya ADMIN).
   * 
   * @returns Array of UserResponseDto
   */
  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })

    return users.map(user => this.toUserResponseDto(user))
  }

  /**
   * findOne()
   * 
   * Get user by ID.
   * 
   * @param id - User ID
   * @returns UserResponseDto atau throw NotFoundException
   */
  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user || !user.isActive) {
      throw new NotFoundException('User tidak ditemukan')
    }

    return this.toUserResponseDto(user)
  }

  /**
   * update()
   * 
   * Update user info (name, role, isActive).
   * Hanya ADMIN yang bisa update user lain.
   * User bisa update info mereka sendiri (kecuali role & isActive).
   * 
   * @param id - User ID yang di-update
   * @param updateUserDto - Data yang di-update
   * @param requestingUserId - ID user yang request (untuk authorization)
   * @returns UserResponseDto
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    // Check apakah user exists
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new NotFoundException('User tidak ditemukan')
    }

    // Update user
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })

    return this.toUserResponseDto(updatedUser)
  }

  /**
   * remove()
   * 
   * Soft delete user (set isActive = false).
   * Data tetap di database untuk audit trail.
   * 
   * @param id - User ID yang di-delete
   */
  async remove(id: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new NotFoundException('User tidak ditemukan')
    }

    await this.prisma.user.update({
      where: { id },
      data: { isActive: false }
    })
  }

  /**
   * Helper: toUserResponseDto()
   * 
   * Convert Prisma User object to UserResponseDto (without password).
   */
  private toUserResponseDto(user: any): UserResponseDto {
    const { password, ...rest } = user
    return rest
  }
}
```

**File: `src/users/users.controller.ts`**
```typescript
/**
 * USERS CONTROLLER
 * 
 * Endpoints untuk user management.
 * Hanya accessible oleh ADMIN.
 * 
 * Endpoints:
 * - GET /users - List semua user
 * - GET /users/:id - Get user by ID
 * - POST /users - Create user baru
 * - PATCH /users/:id - Update user
 * - DELETE /users/:id - Delete user (soft delete)
 */

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../common/guards/roles.guard'
import { Roles } from '../common/decorators/roles.decorator'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserResponseDto } from './dto/user-response.dto'

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')  // Hanya ADMIN yang bisa akses endpoint ini
export class UsersController {
  constructor(private usersService: UsersService) {}

  /**
   * POST /users
   * 
   * Create user baru (ADMIN only).
   * 
   * Request body:
   * {
   *   "email": "bendahara@example.com",
   *   "password": "pass123",
   *   "name": "Bendahara Langgar",
   *   "role": "BENDAHARA"
   * }
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto)
  }

  /**
   * GET /users
   * 
   * List semua user yang active.
   */
  @Get()
  findAll(): Promise<UserResponseDto[]> {
    return this.usersService.findAll()
  }

  /**
   * GET /users/:id
   * 
   * Get user by ID.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<UserResponseDto> {
    return this.usersService.findOne(id)
  }

  /**
   * PATCH /users/:id
   * 
   * Update user info (name, role, isActive).
   * 
   * Request body (all optional):
   * {
   *   "name": "New Name",
   *   "role": "BENDAHARA",
   *   "isActive": true
   * }
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, updateUserDto)
  }

  /**
   * DELETE /users/:id
   * 
   * Soft delete user (set isActive = false).
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usersService.remove(id)
  }
}
```

**File: `src/users/users.module.ts`**
```typescript
/**
 * USERS MODULE
 * 
 * Module untuk user management features.
 */

import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
```

**Instruksi:**
1. Buat folder `src/users/dto/` dan `src/users/entities/`
2. Buat file-file di atas

**Expected Output:**
- User CRUD service & controller
- DTO untuk create/update user
- User management endpoints protected oleh ADMIN role

---

### **TASK 1.7: Common Guards & Decorators**

Buatkan role-based access control (RBAC):

**File: `src/common/decorators/roles.decorator.ts`**
```typescript
/**
 * ROLES DECORATOR
 * 
 * Custom decorator untuk specify roles yang bisa akses endpoint.
 * 
 * Cara pakai:
 * @Roles('ADMIN')
 * @Roles('ADMIN', 'BENDAHARA')
 * async someMethod() { ... }
 * 
 * Akan di-check oleh RolesGuard sebelum method dijalankan.
 */

import { SetMetadata } from '@nestjs/common'
import { Role } from '@prisma/client'

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles)
```

**File: `src/common/decorators/current-user.decorator.ts`**
```typescript
/**
 * CURRENT USER DECORATOR
 * 
 * Custom decorator untuk extract user data dari request.
 * 
 * Cara pakai:
 * async someMethod(@CurrentUser() user: any) {
 *   console.log(user.userId)  // User ID dari JWT token
 *   console.log(user.role)    // User role
 * }
 * 
 * Ini alternative untuk @Request() req -> req.user
 */

import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  }
)
```

**File: `src/common/guards/roles.guard.ts`**
```typescript
/**
 * ROLES GUARD
 * 
 * Guard untuk check apakah user memiliki role yang diperlukan.
 * 
 * Cara kerja:
 * 1. Get roles yang diperlukan dari @Roles() decorator
 * 2. Get user role dari request.user (set oleh JWT strategy)
 * 3. Compare, jika user punya salah satu role -> allow, else -> deny
 * 
 * Gunakan: @UseGuards(JwtAuthGuard, RolesGuard)
 */

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class RolesGuard implements CanActivate {
  /**
   * Constructor
   * 
   * Inject Reflector untuk baca metadata dari decorator.
   */
  constructor(private reflector: Reflector) {}

  /**
   * canActivate()
   * 
   * Return true jika user bisa akses, false jika tidak.
   */
  canActivate(context: ExecutionContext): boolean {
    /**
     * Get roles dari @Roles() decorator
     * Jika tidak ada decorator -> requiredRoles = undefined -> allow semua
     */
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler())

    if (!requiredRoles) {
      return true  // Tidak ada restriction
    }

    // Get user dari request (set oleh JWT strategy)
    const request = context.switchToHttp().getRequest()
    const user = request.user

    if (!user) {
      throw new ForbiddenException('User tidak ditemukan di request')
    }

    /**
     * Check apakah user role included di requiredRoles
     * Contoh: requiredRoles = ['ADMIN', 'BENDAHARA']
     *         user.role = 'BENDAHARA'
     *         -> true, allow access
     */
    const hasRole = requiredRoles.includes(user.role)

    if (!hasRole) {
      throw new ForbiddenException(
        `Role '${user.role}' tidak memiliki akses. Diperlukan salah satu: ${requiredRoles.join(', ')}`
      )
    }

    return true
  }
}
```

**File: `src/common/common.module.ts`**
```typescript
/**
 * COMMON MODULE
 * 
 * Module untuk export guards & decorators yang bisa dipakai di module manapun.
 */

import { Module } from '@nestjs/common'
import { RolesGuard } from './guards/roles.guard'

@Module({
  providers: [RolesGuard],
  exports: [RolesGuard]
})
export class CommonModule {}
```

**Instruksi:**
1. Buat folder `src/common/decorators/`, `src/common/guards/`
2. Buat file-file di atas

**Expected Output:**
- Roles decorator untuk specify required roles
- RolesGuard untuk enforce RBAC
- CurrentUser decorator untuk extract user data

---

### **TASK 1.8: Transaction Module (CRUD)**

Buatkan transaction module dengan full CRUD:

**File: `src/transactions/dto/create-transaction.dto.ts`**
```typescript
/**
 * CREATE TRANSACTION DTO
 * 
 * Request body untuk create transaksi baru.
 * 
 * Fields:
 * - date: Tanggal transaksi (format: YYYY-MM-DD)
 * - type: INCOME (masuk) atau EXPENSE (keluar)
 * - amount: Nominal dalam Rupiah (decimal, 2 digit belakang)
 * - description: Keterangan transaksi (optional)
 * - category: Kategori (e.g., "Shodaqoh", "Iuran", "Biaya Operasional")
 */

import { IsDateString, IsEnum, IsDecimal, IsString, IsOptional, Min } from 'class-validator'
import { TransactionType } from '@prisma/client'
import { Type } from 'class-transformer'

export class CreateTransactionDto {
  @IsDateString()
  date: string  // Format: YYYY-MM-DD

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
```

**File: `src/transactions/dto/update-transaction.dto.ts`**
```typescript
/**
 * UPDATE TRANSACTION DTO
 * 
 * Request body untuk update transaksi (all optional).
 * User hanya bisa update transaksi yang mereka buat sendiri.
 */

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
```

**File: `src/transactions/dto/transaction-response.dto.ts`**
```typescript
/**
 * TRANSACTION RESPONSE DTO
 * 
 * Response ketika return transaction data ke client.
 * Include user info (siapa yang create transaction).
 */

import { TransactionType } from '@prisma/client'

export class TransactionResponseDto {
  id: number
  date: Date
  type: TransactionType
  amount: number
  description: string | null
  category: string
  createdBy: number
  createdAt: Date
  updatedAt: Date
  user?: {
    id: number
    name: string
    email: string
  }
}
```

**File: `src/transactions/dto/transaction-query.dto.ts`**
```typescript
/**
 * TRANSACTION QUERY DTO
 * 
 * Query parameters untuk filter transactions.
 * 
 * Contoh usage:
 * GET /transactions?month=7&year=2026&type=INCOME&skip=0&take=20
 */

import { IsOptional, IsEnum, IsNumberString } from 'class-validator'
import { TransactionType } from '@prisma/client'

export class TransactionQueryDto {
  @IsOptional()
  @IsNumberString()
  month?: string  // 1-12

  @IsOptional()
  @IsNumberString()
  year?: string   // e.g., 2026

  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType  // INCOME or EXPENSE

  @IsOptional()
  @IsNumberString()
  skip?: string  // Pagination offset (default: 0)

  @IsOptional()
  @IsNumberString()
  take?: string  // Pagination limit (default: 10)
}
```

**File: `src/transactions/entities/transaction.entity.ts`**
```typescript
/**
 * TRANSACTION ENTITY
 * 
 * Type representation untuk Transaction.
 */

import { TransactionType } from '@prisma/client'

export class TransactionEntity {
  id: number
  date: Date
  type: TransactionType
  amount: number
  description: string | null
  category: string
  createdBy: number
  createdAt: Date
  updatedAt: Date
}
```

**File: `src/transactions/transactions.service.ts`**
```typescript
/**
 * TRANSACTIONS SERVICE
 * 
 * Service untuk transaction CRUD operations.
 * 
 * Fungsi:
 * - create() - Create transaksi baru
 * - findAll() - Get transactions dengan filter & pagination
 * - findOne() - Get transaction by ID
 * - update() - Update transaction (hanya pembuat/ADMIN)
 * - remove() - Delete transaction (hanya pembuat/ADMIN)
 * - getMonthlySummary() - Get income/expense summary by month
 */

import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { TransactionQueryDto } from './dto/transaction-query.dto'
import { TransactionResponseDto } from './dto/transaction-response.dto'

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  /**
   * create()
   * 
   * Create transaksi baru.
   * 
   * @param createTransactionDto - Transaction data
   * @param userId - ID user yang create (dari JWT token)
   * @returns TransactionResponseDto
   */
  async create(
    createTransactionDto: CreateTransactionDto,
    userId: number
  ): Promise<TransactionResponseDto> {
    const { date, type, amount, description, category } = createTransactionDto

    // Validate user exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new BadRequestException('User tidak ditemukan')
    }

    // Create transaction
    const transaction = await this.prisma.transaction.create({
      data: {
        date: new Date(date),
        type,
        amount: parseFloat(amount.toString()),
        description,
        category,
        createdBy: userId
      },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return this.toTransactionResponseDto(transaction)
  }

  /**
   * findAll()
   * 
   * Get transactions dengan filter & pagination.
   * 
   * Filter options:
   * - month & year: Filter by month
   * - type: Filter by INCOME/EXPENSE
   * - skip & take: Pagination
   * 
   * @param query - Query parameters
   * @returns Array of TransactionResponseDto
   */
  async findAll(query: TransactionQueryDto) {
    const {
      month,
      year,
      type,
      skip = '0',
      take = '10'
    } = query

    // Build where conditions
    const where: any = {}

    // Filter by month & year
    if (month && year) {
      const monthNum = parseInt(month)
      const yearNum = parseInt(year)

      if (monthNum < 1 || monthNum > 12) {
        throw new BadRequestException('Month harus antara 1-12')
      }

      const startDate = new Date(yearNum, monthNum - 1, 1)
      const endDate = new Date(yearNum, monthNum, 0, 23, 59, 59)

      where.date = {
        gte: startDate,
        lte: endDate
      }
    }

    // Filter by type
    if (type) {
      where.type = type
    }

    // Get total count untuk pagination info
    const total = await this.prisma.transaction.count({ where })

    // Get transactions dengan pagination
    const transactions = await this.prisma.transaction.findMany({
      where,
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { date: 'desc' },
      skip: parseInt(skip),
      take: parseInt(take)
    })

    return {
      data: transactions.map(t => this.toTransactionResponseDto(t)),
      pagination: {
        total,
        skip: parseInt(skip),
        take: parseInt(take),
        pages: Math.ceil(total / parseInt(take))
      }
    }
  }

  /**
   * findOne()
   * 
   * Get transaction by ID.
   * 
   * @param id - Transaction ID
   * @returns TransactionResponseDto
   */
  async findOne(id: number): Promise<TransactionResponseDto> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    return this.toTransactionResponseDto(transaction)
  }

  /**
   * update()
   * 
   * Update transaction.
   * User hanya bisa update transaksi mereka sendiri.
   * ADMIN bisa update transaksi apapun.
   * 
   * @param id - Transaction ID
   * @param updateTransactionDto - Data yang di-update
   * @param userId - ID user yang request
   * @param userRole - Role user
   * @returns TransactionResponseDto
   */
  async update(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
    userId: number,
    userRole: string
  ): Promise<TransactionResponseDto> {
    // Get transaction
    const transaction = await this.prisma.transaction.findUnique({
      where: { id }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    // Check authorization (hanya pembuat atau ADMIN)
    if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
      throw new ForbiddenException('Anda tidak bisa update transaksi orang lain')
    }

    // Update transaction
    const updated = await this.prisma.transaction.update({
      where: { id },
      data: {
        ...updateTransactionDto,
        date: updateTransactionDto.date ? new Date(updateTransactionDto.date) : undefined,
        amount: updateTransactionDto.amount
          ? parseFloat(updateTransactionDto.amount.toString())
          : undefined
      },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return this.toTransactionResponseDto(updated)
  }

  /**
   * remove()
   * 
   * Delete transaction.
   * User hanya bisa delete transaksi mereka sendiri.
   * ADMIN bisa delete transaksi apapun.
   * 
   * @param id - Transaction ID
   * @param userId - ID user yang request
   * @param userRole - Role user
   */
  async remove(id: number, userId: number, userRole: string): Promise<void> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    // Check authorization
    if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
      throw new ForbiddenException('Anda tidak bisa delete transaksi orang lain')
    }

    await this.prisma.transaction.delete({
      where: { id }
    })
  }

  /**
   * getMonthlySummary()
   * 
   * Get summary income/expense/balance by month.
   * 
   * @param month - 1-12
   * @param year - e.g., 2026
   * @returns Summary object dengan income, expense, balance
   */
  async getMonthlySummary(month: number, year: number) {
    // Validate month
    if (month < 1 || month > 12) {
      throw new BadRequestException('Month harus antara 1-12')
    }

    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0, 23, 59, 59)

    // Get all transactions for this month
    const transactions = await this.prisma.transaction.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      include: {
        user: {
          select: { id: true, name: true }
        }
      },
      orderBy: { date: 'asc' }
    })

    // Calculate summary
    const income = transactions
      .filter(t => t.type === 'INCOME')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const expense = transactions
      .filter(t => t.type === 'EXPENSE')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const balance = income - expense

    return {
      month,
      year,
      income,
      expense,
      balance,
      totalTransactions: transactions.length,
      transactions: transactions.map(t => this.toTransactionResponseDto(t))
    }
  }

  /**
   * Helper: toTransactionResponseDto()
   */
  private toTransactionResponseDto(transaction: any): TransactionResponseDto {
    return {
      id: transaction.id,
      date: transaction.date,
      type: transaction.type,
      amount: parseFloat(transaction.amount.toString()),
      description: transaction.description,
      category: transaction.category,
      createdBy: transaction.createdBy,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
      user: transaction.user
    }
  }
}
```

**File: `src/transactions/transactions.controller.ts`**
```typescript
/**
 * TRANSACTIONS CONTROLLER
 * 
 * Endpoints untuk transaction management.
 * 
 * Endpoints:
 * - GET /transactions - List transactions (with filter & pagination)
 * - GET /transactions/:id - Get transaction by ID
 * - GET /transactions/summary/:month/:year - Get monthly summary
 * - POST /transactions - Create transaction
 * - PATCH /transactions/:id - Update transaction
 * - DELETE /transactions/:id - Delete transaction
 * 
 * Access:
 * - BENDAHARA & ADMIN: Bisa create/update/delete
 * - PENGURUS: Hanya bisa view (GET)
 */

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
  ParseIntPipe
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../common/guards/roles.guard'
import { Roles } from '../common/decorators/roles.decorator'
import { CurrentUser } from '../common/decorators/current-user.decorator'
import { TransactionsService } from './transactions.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { TransactionQueryDto } from './dto/transaction-query.dto'

@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  /**
   * POST /transactions
   * 
   * Create transaction (BENDAHARA & ADMIN only).
   * 
   * Request body:
   * {
   *   "date": "2026-07-05",
   *   "type": "INCOME",
   *   "amount": 500000,
   *   "description": "Shodaqoh dari Bapak Ahmad",
   *   "category": "Shodaqoh"
   * }
   */
  @Post()
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'BENDAHARA')
  create(
    @Body() createTransactionDto: CreateTransactionDto,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.create(createTransactionDto, user.userId)
  }

  /**
   * GET /transactions
   * 
   * List transactions dengan filter & pagination.
   * Semua role bisa akses (tapi PENGURUS read-only).
   * 
   * Query parameters (optional):
   * - month: 1-12
   * - year: e.g., 2026
   * - type: INCOME or EXPENSE
   * - skip: Pagination offset (default: 0)
   * - take: Pagination limit (default: 10)
   * 
   * Example: GET /transactions?month=7&year=2026&skip=0&take=20
   */
  @Get()
  findAll(@Query() query: TransactionQueryDto) {
    return this.transactionsService.findAll(query)
  }

  /**
   * GET /transactions/summary/:month/:year
   * 
   * Get monthly summary (income, expense, balance).
   * 
   * Example: GET /transactions/summary/7/2026
   */
  @Get('summary/:month/:year')
  getMonthlySummary(
    @Param('month', ParseIntPipe) month: number,
    @Param('year', ParseIntPipe) year: number
  ) {
    return this.transactionsService.getMonthlySummary(month, year)
  }

  /**
   * GET /transactions/:id
   * 
   * Get transaction by ID.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.findOne(id)
  }

  /**
   * PATCH /transactions/:id
   * 
   * Update transaction (BENDAHARA/ADMIN only, hanya sendiri/admin bisa).
   * 
   * Request body (all optional):
   * {
   *   "amount": 750000,
   *   "description": "Updated description",
   *   "category": "Infaq"
   * }
   */
  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'BENDAHARA')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.update(id, updateTransactionDto, user.userId, user.role)
  }

  /**
   * DELETE /transactions/:id
   * 
   * Delete transaction (BENDAHARA/ADMIN only).
   */
  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'BENDAHARA')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.remove(id, user.userId, user.role)
  }
}
```

**File: `src/transactions/transactions.module.ts`**
```typescript
/**
 * TRANSACTIONS MODULE
 */

import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { TransactionsService } from './transactions.service'
import { TransactionsController } from './transactions.controller'

@Module({
  imports: [PrismaModule],
  providers: [TransactionsService],
  controllers: [TransactionsController],
  exports: [TransactionsService]
})
export class TransactionsModule {}
```

**Instruksi:**
1. Buat folder `src/transactions/dto/` dan `src/transactions/entities/`
2. Buat file-file di atas

**Expected Output:**
- Transaction CRUD service dengan authorization logic
- Transaction controller dengan 6 endpoints
- Filter & pagination support
- Monthly summary endpoint

---

### **TASK 1.9: Reports Module**

Buatkan reports module:

**File: `src/reports/dto/report-query.dto.ts`**
```typescript
/**
 * REPORT QUERY DTO
 * 
 * Query parameters untuk get report.
 * 
 * Contoh: GET /reports?month=7&year=2026&type=MONTHLY
 */

import { IsOptional, IsNumberString, IsEnum } from 'class-validator'

export enum ReportType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
  RANGE = 'RANGE'  // Untuk date range
}

export class ReportQueryDto {
  @IsOptional()
  @IsNumberString()
  month?: string  // 1-12 (untuk MONTHLY)

  @IsOptional()
  @IsNumberString()
  year?: string   // e.g., 2026

  @IsOptional()
  @IsEnum(ReportType)
  type?: ReportType  // MONTHLY, YEARLY, RANGE
}
```

**File: `src/reports/entities/monthly-report.entity.ts`**
```typescript
/**
 * MONTHLY REPORT ENTITY
 */

export class MonthlySummary {
  month: number
  year: number
  totalIncome: number
  totalExpense: number
  balance: number
  transactionCount: number
}

export class YearlySummary {
  year: number
  totalIncome: number
  totalExpense: number
  balance: number
  monthlyBreakdown: MonthlySummary[]
}
```

**File: `src/reports/reports.service.ts`**
```typescript
/**
 * REPORTS SERVICE
 * 
 * Service untuk generate laporan (monthly, yearly).
 * 
 * Data untuk laporan dihitung dari transactions table.
 * Tidak menyimpan data report di database (on-the-fly calculation).
 */

import { Injectable, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { MonthlySummary, YearlySummary } from './entities/monthly-report.entity'

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  /**
   * getMonthlySummary()
   * 
   * Get summary untuk 1 bulan.
   * 
   * @param month - 1-12
   * @param year - e.g., 2026
   * @returns MonthlySummary
   */
  async getMonthlySummary(month: number, year: number): Promise<MonthlySummary> {
    if (month < 1 || month > 12) {
      throw new BadRequestException('Month harus antara 1-12')
    }

    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0, 23, 59, 59)

    const transactions = await this.prisma.transaction.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    })

    const totalIncome = transactions
      .filter(t => t.type === 'INCOME')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const totalExpense = transactions
      .filter(t => t.type === 'EXPENSE')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    return {
      month,
      year,
      totalIncome: Math.round(totalIncome * 100) / 100,
      totalExpense: Math.round(totalExpense * 100) / 100,
      balance: Math.round((totalIncome - totalExpense) * 100) / 100,
      transactionCount: transactions.length
    }
  }

  /**
   * getYearlySummary()
   * 
   * Get summary untuk 1 tahun (dengan breakdown per bulan).
   * 
   * @param year - e.g., 2026
   * @returns YearlySummary
   */
  async getYearlySummary(year: number): Promise<YearlySummary> {
    const startDate = new Date(year, 0, 1)
    const endDate = new Date(year, 11, 31, 23, 59, 59)

    const allTransactions = await this.prisma.transaction.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      orderBy: { date: 'asc' }
    })

    // Calculate yearly totals
    const yearlyIncome = allTransactions
      .filter(t => t.type === 'INCOME')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const yearlyExpense = allTransactions
      .filter(t => t.type === 'EXPENSE')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    // Get monthly breakdown
    const monthlyBreakdown: MonthlySummary[] = []
    for (let month = 1; month <= 12; month++) {
      const summary = await this.getMonthlySummary(month, year)
      monthlyBreakdown.push(summary)
    }

    return {
      year,
      totalIncome: Math.round(yearlyIncome * 100) / 100,
      totalExpense: Math.round(yearlyExpense * 100) / 100,
      balance: Math.round((yearlyIncome - yearlyExpense) * 100) / 100,
      monthlyBreakdown
    }
  }

  /**
   * getCategoryBreakdown()
   * 
   * Get breakdown by category (untuk chart di dashboard).
   * 
   * @param month - 1-12
   * @param year - e.g., 2026
   * @returns Array dengan category + amount
   */
  async getCategoryBreakdown(month: number, year: number) {
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0, 23, 59, 59)

    const transactions = await this.prisma.transaction.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    })

    // Group by category & sum
    const categoryMap = new Map<string, { income: number; expense: number }>()

    transactions.forEach(t => {
      const current = categoryMap.get(t.category) || { income: 0, expense: 0 }

      if (t.type === 'INCOME') {
        current.income += parseFloat(t.amount.toString())
      } else {
        current.expense += parseFloat(t.amount.toString())
      }

      categoryMap.set(t.category, current)
    })

    // Convert to array
    const breakdown = Array.from(categoryMap.entries()).map(([category, values]) => ({
      category,
      income: Math.round(values.income * 100) / 100,
      expense: Math.round(values.expense * 100) / 100
    }))

    return breakdown
  }
}
```

**File: `src/reports/reports.controller.ts`**
```typescript
/**
 * REPORTS CONTROLLER
 * 
 * Endpoints untuk get reports.
 * Hanya ADMIN & BENDAHARA yang bisa akses (PENGURUS bisa view-only jika perlu).
 * 
 * Endpoints:
 * - GET /reports/monthly/:month/:year - Monthly summary
 * - GET /reports/yearly/:year - Yearly summary dengan breakdown
 * - GET /reports/category-breakdown - Breakdown by category
 */

import { Controller, Get, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ReportsService } from './reports.service'

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  /**
   * GET /reports/monthly/:month/:year
   * 
   * Get monthly summary.
   * 
   * Example: GET /reports/monthly/7/2026
   */
  @Get('monthly/:month/:year')
  getMonthlySummary(
    @Param('month', ParseIntPipe) month: number,
    @Param('year', ParseIntPipe) year: number
  ) {
    return this.reportsService.getMonthlySummary(month, year)
  }

  /**
   * GET /reports/yearly/:year
   * 
   * Get yearly summary dengan monthly breakdown.
   * 
   * Example: GET /reports/yearly/2026
   */
  @Get('yearly/:year')
  getYearlySummary(@Param('year', ParseIntPipe) year: number) {
    return this.reportsService.getYearlySummary(year)
  }

  /**
   * GET /reports/category-breakdown
   * 
   * Get breakdown by category untuk chart.
   * 
   * Query params:
   * - month: 1-12
   * - year: e.g., 2026
   * 
   * Example: GET /reports/category-breakdown?month=7&year=2026
   */
  @Get('category-breakdown')
  getCategoryBreakdown(
    @Query('month') month: string,
    @Query('year') year: string
  ) {
    return this.reportsService.getCategoryBreakdown(parseInt(month), parseInt(year))
  }
}
```

**File: `src/reports/reports.module.ts`**
```typescript
/**
 * REPORTS MODULE
 */

import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { ReportsService } from './reports.service'
import { ReportsController } from './reports.controller'

@Module({
  imports: [PrismaModule],
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
```

**Instruksi:**
1. Buat folder `src/reports/dto/` dan `src/reports/entities/`
2. Buat file-file di atas

**Expected Output:**
- Reports service dengan monthly/yearly summary
- Category breakdown untuk chart
- Reports controller dengan 3 endpoints

---

### **TASK 1.10: App Module & Main Entry Point**

Buatkan root module dan main file:

**File: `src/app.module.ts`**
```typescript
/**
 * APP MODULE
 * 
 * Root module untuk import semua feature modules.
 * Ini adalah entry point untuk NestJS application.
 * 
 * Imports:
 * - ConfigModule: Load environment variables
 * - PrismaModule: Database connection
 * - AuthModule: Authentication
 * - UsersModule: User management
 * - TransactionsModule: Transaction CRUD
 * - ReportsModule: Reports & analytics
 * - CommonModule: Shared utilities (guards, decorators)
 */

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { TransactionsModule } from './transactions/transactions.module'
import { ReportsModule } from './reports/reports.module'
import { CommonModule } from './common/common.module'

@Module({
  imports: [
    // Load .env file
    ConfigModule.forRoot({
      isGlobal: true,  // Available di semua modules
      envFilePath: '.env'
    }),

    // Feature modules
    PrismaModule,
    AuthModule,
    UsersModule,
    TransactionsModule,
    ReportsModule,
    CommonModule
  ],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```

**File: `src/app.controller.ts`**
```typescript
/**
 * APP CONTROLLER
 * 
 * Simple controller untuk health check.
 * 
 * Endpoint:
 * - GET / - Return "Hello from Kas Langgar API"
 * - GET /health - Return status "ok"
 */

import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Kas Langgar API is running'
    }
  }
}
```

**File: `src/app.service.ts`**
```typescript
/**
 * APP SERVICE
 * 
 * Simple service untuk provide hello message.
 */

import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Kas Langgar An-Nikmah API v1.0'
  }
}
```

**File: `src/main.ts`**
```typescript
/**
 * MAIN ENTRY POINT
 * 
 * File ini adalah starting point aplikasi NestJS.
 * 
 * Fungsi:
 * 1. Create NestJS application
 * 2. Setup global pipes (validation, transformation)
 * 3. Setup CORS
 * 4. Listen pada port (default: 3000)
 */

import { NestFactory } from '@nestjs/core'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  /**
   * Create NestJS application instance
   */
  const app = await NestFactory.create(AppModule)

  /**
   * Enable API versioning (optional)
   * Endpoints akan menjadi: /api/v1/auth/login
   */
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  })

  /**
   * Setup global validation pipe
   * 
   * Fungsi:
   * - Validate request body berdasarkan DTO (class-validator)
   * - Transform request data (class-transformer)
   * - Return 400 bad request jika validation gagal
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // Remove properties yang tidak di-define di DTO
      forbidNonWhitelisted: true,  // Error jika ada property extra
      transform: true,  // Auto transform type (string -> number, etc)
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )

  /**
   * Setup CORS (untuk frontend bisa akses API)
   * 
   * origin: Frontend URL (localhost:3000 untuk dev)
   * credentials: Allow cookies/auth headers
   */
  app.enableCors({
    origin: [
      'http://localhost:3000',  // Vue.js dev server
      'http://localhost:5173',  // Vite dev server
      'http://localhost:8080'   // Webpack dev server
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })

  /**
   * Setup Swagger API documentation (optional)
   * 
   * Buka: http://localhost:3000/api-docs
   */
  const config = new DocumentBuilder()
    .setTitle('Kas Langgar An-Nikmah API')
    .setDescription('API untuk sistem manajemen kas langgar')
    .setVersion('1.0')
    .addBearerAuth()  // Add JWT auth option di Swagger
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)

  /**
   * Listen pada port
   * Default: 3000
   * Set via environment variable: PORT=5000
   */
  const port = process.env.PORT || 3000
  await app.listen(port)

  console.log(`
  ╔════════════════════════════════════════════════╗
  ║   🕌 Kas Langgar An-Nikmah API                 ║
  ║   Server running at http://localhost:${port}    ║
  ║   API Docs at http://localhost:${port}/api-docs ║
  ╚════════════════════════════════════════════════╝
  `)
}

bootstrap().catch(err => {
  console.error('❌ Failed to start server:', err)
  process.exit(1)
})
```

**Instruksi:**
1. Buat file `app.module.ts`, `app.controller.ts`, `app.service.ts`, `main.ts`
2. Install Swagger: `npm install @nestjs/swagger swagger-ui-express`
3. Update `.env`:
   ```
   DATABASE_URL="mysql://root:password@localhost:3306/kas_langgar"
   JWT_SECRET="your-super-secret-key-12345"
   PORT=3000
   NODE_ENV=development
   ```

**Expected Output:**
- Root module yang import semua feature modules
- Health check endpoint
- Swagger documentation setup
- Global validation & CORS configured
- Server running on port 3000

---

## 🎯 PHASE 2: FRONTEND SETUP (Vue.js 3 + TypeScript + Material UI)

### **TASK 2.1: Project Structure & Configuration**

Buatkan struktur folder Vue.js frontend:

```
kas-langgar-frontend/
├── src/
│   ├── components/              # Reusable Vue components
│   │   ├── Navbar.vue
│   │   ├── Sidebar.vue
│   │   ├── LoadingSpinner.vue
│   │   ├── ConfirmDialog.vue
│   │   └── TransactionForm.vue
│   │
│   ├── pages/                   # Page components (views)
│   │   ├── LoginPage.vue
│   │   ├── DashboardPage.vue
│   │   ├── TransactionsPage.vue
│   │   ├── AddTransactionPage.vue
│   │   ├── EditTransactionPage.vue
│   │   ├── UsersPage.vue
│   │   ├── ReportsPage.vue
│   │   └── NotFoundPage.vue
│   │
│   ├── stores/                  # Pinia stores (state management)
│   │   ├── authStore.ts         # Authentication & user state
│   │   ├── transactionStore.ts  # Transactions state
│   │   ├── uiStore.ts           # UI state (loading, modal, etc)
│   │   └── index.ts             # Store configuration
│   │
│   ├── services/                # API services
│   │   ├── api.ts               # Axios configuration
│   │   ├── authService.ts       # Auth API calls
│   │   ├── transactionService.ts
│   │   ├── userService.ts
│   │   ├── reportService.ts
│   │   └── types.ts             # TypeScript types/interfaces
│   │
│   ├── router/                  # Vue Router configuration
│   │   └── index.ts
│   │
│   ├── utils/                   # Utility functions
│   │   ├── formatters.ts        # Format currency, date, etc
│   │   ├── validators.ts        # Input validation
│   │   └── constants.ts         # Constants
│   │
│   ├── styles/                  # Global styles
│   │   ├── variables.css        # CSS variables for MUI theme
│   │   └── global.css           # Global styles
│   │
│   ├── App.vue                  # Root component
│   ├── main.ts                  # Entry point
│   └── env.d.ts                 # TypeScript env definitions
│
├── public/                      # Static assets
│   ├── favicon.ico
│   └── logo.png
│
├── .env.example                 # Environment template
├── .env                         # Local environment (git ignored)
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── index.html                  # HTML entry point
├── package.json
└── README.md
```

**Instruksi Lengkap:**

```bash
# Create Vite + Vue project
npm create vite@latest kas-langgar-frontend -- --template vue-ts
cd kas-langgar-frontend

# Install dependencies
npm install

# Install UI & utilities
npm install @vue/material @emotion/react @emotion/styled
npm install axios pinia vue-router
npm install chart.js vue-chartjs
npm install vee-validate yup
npm install dayjs

# Dev dependencies
npm install -D typescript @types/node

# Start dev server
npm run dev  # http://localhost:5173
```

**Create `.env.example`:**
```
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_APP_NAME=Kas Langgar An-Nikmah
```

**Create `.env` (git ignored):**
```
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_APP_NAME=Kas Langgar An-Nikmah
```

**Expected Output:**
- Vue.js project structure lengkap
- Vite dev server running on http://localhost:5173
- All dependencies installed

---

### **TASK 2.2-2.10: Frontend Implementation**

**[DETAI LENGKAP FRONTEND AKAN DILANJUTKAN DI PROMPT BERIKUTNYA KARENA PANJANG]**

Untuk sekarang, saya sudah provide:
- ✅ Complete backend structure (10 tasks)
- ✅ Frontend structure outline (akan di-detail di fase berikutnya)

---

## 📚 NEXT STEPS

**Untuk melanjutkan dengan prompt ini di Antigravity IDE:**

1. **Copy-paste semua task 1.1 - 1.10** untuk setup backend NestJS
2. **Jalankan setiap task secara berurutan**
3. **Test backend dengan Postman/Insomnia sebelum lanjut ke frontend**
4. **Setelah backend selesai, akan ada prompt terpisah untuk frontend (Task 2.2-2.10)**

---

## 🧪 TESTING BACKEND

Setelah semua task selesai, test dengan curl atau Postman:

```bash
# 1. Register user
POST http://localhost:3000/api/v1/auth/register
{
  "email": "admin@example.com",
  "password": "password123",
  "name": "Admin Langgar",
  "role": "ADMIN"
}

# 2. Login
POST http://localhost:3000/api/v1/auth/login
{
  "email": "admin@example.com",
  "password": "password123"
}

# 3. Create transaction (copy token dari login response)
POST http://localhost:3000/api/v1/transactions
Headers: Authorization: Bearer {token}
{
  "date": "2026-07-05",
  "type": "INCOME",
  "amount": 500000,
  "category": "Shodaqoh",
  "description": "Infaq dari Bapak Ahmad"
}

# 4. Get transactions
GET http://localhost:3000/api/v1/transactions

# 5. Get monthly summary
GET http://localhost:3000/api/v1/reports/monthly/7/2026
```

---

**Ready to start? Copy-paste task 1.1 ke Antigravity IDE! 🚀**
