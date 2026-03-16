import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import {config} from './env.js'

const adapter = new PrismaPg({ connectionString: config.database_url })

const prisma = new PrismaClient({ adapter })

export default prisma