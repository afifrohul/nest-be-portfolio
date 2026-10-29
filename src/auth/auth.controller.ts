import {
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { Public, SignInService } from '@nestjs/authentication';
import { SignInDto, SignUpDto } from './auth.dto.js';
import { CredentialsService } from './credentials.service.js';
import { JwtAuth } from './jwt-auth.provider.js';

@Public()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly credentialsService: CredentialsService,
    private readonly jwtProvider: JwtAuth,
  ) {}

  // @Post('sign-up')
  // async signUp(@Body() body: SignUpDto) {
  //   const user = await this.credentialsService.register(
  //     body.name,
  //     body.email,
  //     body.password,
  //   );

  //   return user;
  // }

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

    const accessToken = this.jwtProvider.generateAccessToken({ id: user.id });

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
