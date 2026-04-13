import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,],
  controllers: [
    UsersController, AppController],
  providers: [AppService],
})
export class AppModule { }
