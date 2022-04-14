import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from './users.repository';

@Module({
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [AuthService],
})
export class AuthModule {}
