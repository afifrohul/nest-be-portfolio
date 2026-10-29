import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module.js';
import { AuthController } from './auth.controller.js';
import { CredentialsService } from './credentials.service.js';
import { JwtAuthProvider } from './jwt-auth.provider.js';
import { PasswordHasher } from '@nestjs/authentication';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [CredentialsService, JwtAuthProvider, PasswordHasher],
})
export class AuthModule {}
