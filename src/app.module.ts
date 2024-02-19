import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisIoAdapter } from './redis-io-adapter/redis-io-adapter';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';

@Module({
  imports: [RedisIoAdapter, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
