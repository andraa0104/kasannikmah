"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const { username, password, name, role, permissions } = createUserDto;
        const existingUser = await this.prisma.user.findUnique({
            where: { username }
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Username sudah terdaftar');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let finalPermissions = permissions;
        if (!finalPermissions) {
            if (role === 'ADMIN') {
                finalPermissions = ['dashboard:read', 'transactions:read', 'transactions:create', 'transactions:update', 'transactions:delete', 'reports:read', 'accounts:read', 'accounts:manage', 'users:read', 'users:create', 'users:update', 'users:delete', 'settings:read'];
            }
            else if (role === 'BENDAHARA') {
                finalPermissions = ['dashboard:read', 'transactions:read', 'transactions:create', 'transactions:update', 'reports:read', 'accounts:read', 'accounts:manage', 'settings:read'];
            }
            else {
                finalPermissions = ['dashboard:read', 'transactions:read', 'reports:read', 'settings:read'];
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
        });
        return this.toUserResponseDto(user);
    }
    async findAll() {
        const users = await this.prisma.user.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        return users.map(user => this.toUserResponseDto(user));
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user || !user.isActive) {
            throw new common_1.NotFoundException('User tidak ditemukan');
        }
        return this.toUserResponseDto(user);
    }
    async update(id, updateUserDto) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            throw new common_1.NotFoundException('User tidak ditemukan');
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: updateUserDto
        });
        return this.toUserResponseDto(updatedUser);
    }
    async updateProfile(id, updateProfileDto) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            throw new common_1.NotFoundException('User tidak ditemukan');
        }
        const data = {};
        if (updateProfileDto.name) {
            data.name = updateProfileDto.name;
        }
        if (updateProfileDto.password) {
            data.password = await bcrypt.hash(updateProfileDto.password, 10);
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data
        });
        return this.toUserResponseDto(updatedUser);
    }
    async remove(id) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            throw new common_1.NotFoundException('User tidak ditemukan');
        }
        await this.prisma.user.update({
            where: { id },
            data: { isActive: false }
        });
    }
    toUserResponseDto(user) {
        const { password, ...rest } = user;
        return rest;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map