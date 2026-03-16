import prisma from '../config/prisma.js'
import { AuthResponse, JwtPayload, RegisterDTO } from '../types/auth.types.js';
import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'
import { config } from '../config/env.js';

export class AuthService {

    private readonly saltRounds = 10;

    async register(dto: RegisterDTO): Promise<AuthResponse> {
        try {
            const existing_user = await prisma.user.findUnique({ where: { email: dto.email } })

            if (existing_user) throw new Error("Email already in use");

            const hashed_password = await bcrypt.hash(dto.password, this.saltRounds)

            const user = await prisma.user.create({ data: { name: dto.name, email: dto.email, password: hashed_password } })

            const token = this.generateToken({id: user.id, email: user.email})

            return {
                token,
                user:{
                    id:user.id,
                    email: user.email,
                    name: user.name
                }
            }
        } catch (error) {
            console.log(`Error while registering user: ${error}`)
            throw new Error("User registeration failed");
        }
    }

    private generateToken(payload: JwtPayload): string {

        return jwt.sign(payload, config.jwt.secret as string, {
            expiresIn: config.jwt.expiresIn,
        } as jwt.SignOptions);
    }

}

