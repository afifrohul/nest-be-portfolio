import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import type { User } from './user.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { PasswordHasher } from '@nestjs/authentication';

interface UserRow extends User {
  passwordHash: string | null;
}

/**
 * In-memory stand-in for your data layer (Prisma, Drizzle, TypeORM, ...).
 * Only `User` objects leave this class: password hashes stay inside.
 */
@Injectable()
export class UsersRepository {
  private readonly rows = new Map<string, UserRow>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async create(
    name: string,
    email: string,
    { passwordHash = null }: { passwordHash?: string | null } = {},
  ) {
    return;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
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

  async findByEmail(email: string): Promise<User | null> {
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
