import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constans';

@Module({
  imports:[JwtModule.register({
        secret:jwtConstants.secret,
    signOptions: { expiresIn: "3s" },
  })],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
