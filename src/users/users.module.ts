import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';
import { UsersController } from './users.controller.js';
import { PasswordHasher } from '@nestjs/authentication';

@Module({
  providers: [UsersRepository, PasswordHasher],
  exports: [UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
