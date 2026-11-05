import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { Public } from '@nestjs/authentication';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async login(@Body() dto: LoginDto) {
    const data = await this.authService.login(dto);

    return {
      status: 'success',
      message: 'Sign In success.',
      data: {accessToken: data.access_token}
    };
  }
}
