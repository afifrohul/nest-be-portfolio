import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';
import { UsersController } from './users.controller.js';
import { PasswordHasher } from '@nestjs/authentication';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  providers: [UsersRepository, PasswordHasher, AuthModuleOptions],
  exports: [UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
