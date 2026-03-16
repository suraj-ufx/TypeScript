import { Request } from 'express';
export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface AuthResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
    };
}
export interface JwtPayload {
    id: number;
    email: string;
}
export interface AuthRequest extends Request {
    user?: JwtPayload;
}
//# sourceMappingURL=auth.types.d.ts.map