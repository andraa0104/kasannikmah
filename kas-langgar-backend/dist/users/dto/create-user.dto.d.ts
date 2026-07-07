import { Role } from '@prisma/client';
export declare class CreateUserDto {
    username: string;
    password: string;
    name: string;
    role: Role;
    permissions?: string[];
}
