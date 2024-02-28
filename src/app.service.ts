import { Inject, Injectable } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Server } from 'http';
import * as schema from './drizzle/schema1';

@Injectable()
// @WebSocketGateway()
export class AppService {
  constructor(
    @Inject('PG_CONNECTION') private conn: NodePgDatabase<typeof schema>,
  ) {}
  // @WebSocketServer() server: Server;

  // @SubscribeMessage('events')
  async getHello(): Promise<any> {
    // const res = await this.conn.query('SELECT * FROM cardid');
    return await this.conn.query.cardid.findMany();
  }
}
