import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private Service: AppService) {}
  @Get()
  findAll(): any {
    return this.Service.getHello();
  }
}
