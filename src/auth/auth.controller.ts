import {
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { Public } from '@nestjs/authentication';
import { SignInDto } from './auth.dto.js';
import { CredentialsService } from './credentials.service.js';
import { JwtAuthProvider } from './jwt-auth.provider.js';

@Public()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly credentialsService: CredentialsService,
    private readonly jwtProvider: JwtAuthProvider,
  ) {}

  @Post('sign-in')
  @HttpCode(200)
  async signIn(@Body() body: SignInDto) {
    const user = await this.credentialsService.verify(
      body.email,
      body.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const accessToken = this.jwtProvider.generateAccessToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return {
      status: 'success',
      message: 'Sign In success.',
      data: {
        user: { id: user.id, name: user.name, email: user.email },
        accessToken,
      },
    };
  }
}
