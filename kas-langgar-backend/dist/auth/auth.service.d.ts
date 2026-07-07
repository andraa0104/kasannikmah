import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        username: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(loginDto: LoginDto): Promise<AuthResponseDto>;
    validateUser(userId: number): Promise<{
        username: string;
        password: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        id: number;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
