import { PrismaClient } from '@prisma/client';

const isTestEnv = process.env.NODE_ENV === 'test';
const isProdEnv = process.env.NODE_ENV === 'production';

export default class Prisma {
	private static prismaClient: PrismaClient;
	private static instance: Prisma;

	constructor() {
		if (!Prisma.instance) {
			Prisma.instance = this;
			Prisma.prismaClient = new PrismaClient({
				datasources: {
					db: {
						url: isProdEnv ? process.env.DATABASE_URL : 'file:dev.db',
					},
				},
				log: isTestEnv ? [] : ['query'],
			});
		}

		return Prisma.instance;
	}

	public static new() {
		if (!Prisma.prismaClient) {
			Prisma.prismaClient = new PrismaClient({
				datasources: {
					db: {
						url: isTestEnv ? 'file:tests.db' : 'file:dev.db',
					},
				},
				log: isTestEnv ? [] : ['query'],
			});
		}
		return Prisma.prismaClient;
	}

	public static async disconnect() {
		await Prisma.prismaClient.$disconnect();
	}
}
