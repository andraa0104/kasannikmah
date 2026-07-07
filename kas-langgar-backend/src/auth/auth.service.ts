import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { AuthResponseDto } from './dto/auth-response.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto) {
    const { username, password, name, role } = registerDto

    const existingUser = await this.prisma.user.findUnique({
      where: { username }
    })

    if (existingUser) {
      throw new BadRequestException('Username sudah terdaftar')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
        role: role || 'PENGURUS'
      }
    })

    return {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role
    }
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const { username, password } = loginDto

    const user = await this.prisma.user.findUnique({
      where: { username }
    })

    if (!user) {
      throw new UnauthorizedException('Username atau password salah')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Username atau password salah')
    }

    if (!user.isActive) {
      throw new UnauthorizedException('User account tidak aktif')
    }

    const payload = {
      sub: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
      permissions: user.permissions || []
    }

    const access_token = this.jwtService.sign(payload, {
      expiresIn: '7d'
    })

    return {
      access_token,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
        permissions: user.permissions || []
      }
    }
  }

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
