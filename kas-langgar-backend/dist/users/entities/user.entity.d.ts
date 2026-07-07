import { Role } from '@prisma/client';
export declare class UserEntity {
    id: number;
    username: string;
    name: string;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
