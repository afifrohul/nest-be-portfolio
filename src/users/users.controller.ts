import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get('me')
  me(
    @Req()
    request: Request & {
      user?: {
        id: string;
        name: string;
        email: string;
        iat: number;
        exp: number;
      };
    },
  ) {
    const user = request.user;

    return {
      status: 'success',
      message: 'User authenticated successfully',
      data: { id: user?.id, name: user?.name, email: user?.email },
    };
  }
}
