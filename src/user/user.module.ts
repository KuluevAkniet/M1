import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constans';

@Module({
  imports:[JwtModule.register({
        secret:jwtConstants.secret,
    signOptions: { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) },
  })],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
