import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisIoAdapter } from './redis-io-adapter/redis-io-adapter';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { DbmoduleModule } from './dbmodule/dbmodule.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    RedisIoAdapter,
    EventsModule,
    DrizzleModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
