import { ConflictException, Injectable } from '@nestjs/common';
import { PasswordHasher } from '@nestjs/authentication';
import { UsersRepository } from '../users/users.repository.js';

@Injectable()
export class CredentialsService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async register(name: string, email: string, password: string) {
    if (await this.usersRepository.findByEmail(email)) {
      throw new ConflictException('Email already registered');
    }

    return this.usersRepository.create(name, email, {
      passwordHash: await this.passwordHasher.hash(password),
    });
  }

  /** The user, or `null` when the email or the password is wrong. */
  async verify(email: string, password: string) {
    return await this.usersRepository.findCredentials(email, password);
  }
}
