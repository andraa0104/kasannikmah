import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        username: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(loginDto: LoginDto): Promise<AuthResponseDto>;
}
