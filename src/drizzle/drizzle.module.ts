import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema1';

@Module({
  providers: [
    {
      provide: 'PG_CONNECTION',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        // const connectionString = configService.get<string>(
        //   'postgresql://postgres:"12"@localhost:5432/postgres',
        // );
        const pool = new Pool({
          user: 'postgres',
          host: 'localhost',
          database: 'postgres',
          password: '12',
          port: 5432,
        });
        return drizzle(pool, { schema });
      },
    },
  ],
  exports: ['PG_CONNECTION'],
})
export class DrizzleModule {}
