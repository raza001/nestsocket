import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisIoAdapter } from './redis-io-adapter/redis-io-adapter';

@Module({
  imports: [RedisIoAdapter],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
