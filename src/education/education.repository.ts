import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class EducationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.education.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(data: Prisma.EducationCreateInput) {
    return await this.prisma.education.create({ data });
  }
}
