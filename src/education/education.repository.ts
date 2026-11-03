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

  async findById(id: string) {
    return this.prisma.education.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: Prisma.EducationUpdateInput) {
    return await this.prisma.education.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.education.delete({
      where: { id },
    });
  }
}
