import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PasswordHasher } from '@nestjs/authentication';

@Injectable()
export class UsersRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      omit: {
        password: false,
      },
    });

    if (!user) {
      return null;
    }
    return user;
  }

  /** For password sign-in only. */
  async findCredentials(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      omit: {
        password: false,
      },
    });

    if (!user) {
      return null;
    }

    const isMatch = await this.passwordHasher.verify(password, user.password);

    if (!isMatch) {
      return null;
    }

    return user;
  }
}
