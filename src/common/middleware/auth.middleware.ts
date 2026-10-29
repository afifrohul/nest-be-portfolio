import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { JwtAuthProvider } from '../../auth/jwt-auth.provider.js';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtProvider: JwtAuthProvider) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    console.log('Authorization header exists:', Boolean(authorization));

    if (!authorization?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Access token is required');
    }

    const token = authorization.slice('Bearer '.length).trim();

    try {
      const user = this.jwtProvider.verify(token);

      console.log('JWT verified successfully');

      (req as Request & { user: typeof user }).user = user;
    } catch {
      throw new UnauthorizedException('Invalid or expired access token');
    }

    return next();
  }
}
