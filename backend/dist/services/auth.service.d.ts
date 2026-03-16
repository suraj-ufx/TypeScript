import { AuthResponse, RegisterDTO } from '../types/auth.types.js';
export declare class AuthService {
    private readonly saltRounds;
    register(dto: RegisterDTO): Promise<AuthResponse>;
    private generateToken;
}
//# sourceMappingURL=auth.service.d.ts.map