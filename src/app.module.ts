import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ParkinglotController } from './parkinglot/parkinglot/parkinglot.controller';

@Module({
  imports: [],
  controllers: [AppController, ParkinglotController],
  providers: [AppService],
})
export class AppModule {}
