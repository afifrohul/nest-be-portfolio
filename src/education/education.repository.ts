import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

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
}
