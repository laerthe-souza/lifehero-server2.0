import { sign } from 'jsonwebtoken';

import { jwtConfig } from '../configs/jwt';

export function generateToken(userId: string): string {
  const token = sign({}, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
    subject: userId,
  });

  return token;
}
