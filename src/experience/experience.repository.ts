import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class ExperienceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.experience.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(data: Prisma.ExperienceCreateInput) {
    return await this.prisma.experience.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.experience.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.ExperienceUpdateInput) {
    return await this.prisma.experience.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.experience.delete({ where: { id } });
  }
}
