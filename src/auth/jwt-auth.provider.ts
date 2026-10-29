import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuth {
  generateAccessToken(payload: { id: string }) {
    const JWT_SECRET = String(process.env.JWT_SECRET);

    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '3h',
    });
  }
}
