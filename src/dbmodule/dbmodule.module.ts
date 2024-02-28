import { Module } from '@nestjs/common';
import { Pool } from 'pg';

// import { PG_CONNECTION } from '../constantss';
let PG_CONNECTION = '';
const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12',
    port: 5432,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbmoduleModule {}
