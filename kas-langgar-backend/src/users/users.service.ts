import { Injectable, ForbiddenException, NotFoundException, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { UserResponseDto } from './dto/user-response.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const { username, password, name, role, permissions } = createUserDto

    const existingUser = await this.prisma.user.findUnique({
      where: { username }
    })

    if (existingUser) {
      throw new BadRequestException('Username sudah terdaftar')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Default permissions based on role if none provided
    let finalPermissions = permissions
    if (!finalPermissions) {
      if (role === 'ADMIN') {
        finalPermissions = ['dashboard:read', 'transactions:read', 'transactions:create', 'transactions:update', 'transactions:delete', 'reports:read', 'accounts:read', 'accounts:manage', 'users:read', 'users:create', 'users:update', 'users:delete', 'settings:read']
      } else if (role === 'BENDAHARA') {
        finalPermissions = ['dashboard:read', 'transactions:read', 'transactions:create', 'transactions:update', 'reports:read', 'accounts:read', 'accounts:manage', 'settings:read']
      } else {
        finalPermissions = ['dashboard:read', 'transactions:read', 'reports:read', 'settings:read']
      }
    }

    const user = await this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
        role,
        permissions: finalPermissions
      }
    })

    return this.toUserResponseDto(user)
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })

    return users.map(user => this.toUserResponseDto(user))
  }

  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user || !user.isActive) {
      throw new NotFoundException('User tidak ditemukan')
    }

    return this.toUserResponseDto(user)
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new NotFoundException('User tidak ditemukan')
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })

    return this.toUserResponseDto(updatedUser)
  }

  async updateProfile(id: number, updateProfileDto: UpdateProfileDto): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new NotFoundException('User tidak ditemukan')
    }

    const data: any = {}
    if (updateProfileDto.name) {
      data.name = updateProfileDto.name
    }
    if (updateProfileDto.password) {
      data.password = await bcrypt.hash(updateProfileDto.password, 10)
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data
    })

    return this.toUserResponseDto(updatedUser)
  }

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

  private toUserResponseDto(user: any): UserResponseDto {
    const { password, ...rest } = user
    return rest
  }
}
