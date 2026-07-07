import { Role } from '@prisma/client';
export declare class UpdateUserDto {
    name?: string;
    role?: Role;
    isActive?: boolean;
    permissions?: string[];
}
