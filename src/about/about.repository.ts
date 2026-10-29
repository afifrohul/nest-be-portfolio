
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AboutRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.profile.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
