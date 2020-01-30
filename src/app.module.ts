import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';

import { BullConfigService } from './BullOptionsFactory'

@Module({
  imports: [BullModule.registerQueueAsync({
    name: 'audio',
    imports: [],
    useClass: BullConfigService,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
