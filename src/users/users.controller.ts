import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get('me')
  me(@Req() request: Request & { user?: unknown }) {
    console.log('UsersController /me reached');

    return {
      status: 'success',
      message: 'User authenticated successfully',
      data: request.user,
    };
  }
}