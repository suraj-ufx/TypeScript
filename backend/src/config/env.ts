import dotenv from 'dotenv'

dotenv.config()


export const config = {
    port: process.env.PORT || 5001,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwt: {
        secret: process.env.JWT_SECRET || 'FALLBACK_***ET',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },
    database_url: process.env.DATABASE_URL

} as const