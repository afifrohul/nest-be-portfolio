import 'dotenv/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthProvider {
  generateAccessToken(payload: { id: string }) {
    const JWT_SECRET = String(process.env.JWT_SECRET);

    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '3h',
    });
  }

  verify(accessToken: string) {
    const JWT_SECRET = String(process.env.JWT_SECRET);
    try {
      const payload = jwt.verify(accessToken, JWT_SECRET);
      return payload;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Access token invalid');
    }
  }
}
