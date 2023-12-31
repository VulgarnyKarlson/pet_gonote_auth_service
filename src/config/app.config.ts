import dotenv from 'dotenv'
import * as process from 'process';

dotenv.config({ path: '.env.default' })

export class AppConfig {

    public static readonly IS_PRODUCTION = process.env.NODE_ENV === 'production'
    public static HTTP_PORT = Number(process.env.HTTP_PORT) || 3000
    public static GRPC_PORT = Number(process.env.GRPC_PORT) || 5000
    public static HTTP_PREFIX = process.env.HTTP_PREFIX || 'api/v1/auth'

    public static JWT = {
        authSecret: process.env.JWT_AUTH_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '7d',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
    }
    public static readonly DATABASE = {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    }
}
