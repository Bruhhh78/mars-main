// config/prismaConfig.js
import { PrismaClient } from '@prisma/client';  // Correct import
const prisma = new PrismaClient();  // Initialize PrismaClient
export { prisma };  // Export prisma instance
