import { Request, Response } from "express"
import { AuthService } from "../services/auth.service.js"

export class AuthController {
    
    private authService: AuthService;

    constructor(){
        this.authService = new AuthService();

        this.register = this.register.bind(this)
    }

    async register(req:Request,res:Response){
        try {
            const result = await this.authService.register(req.body)
            console.log(result)
            res.status(201).json(result)
        } catch (error) {
            console.log()
        }
    }
}