import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class Project {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
