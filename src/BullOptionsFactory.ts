import { Injectable } from '@nestjs/common';
import { BullOptionsFactory, BullModuleOptions } from '@nestjs/bull';

@Injectable()
export class BullConfigService implements BullOptionsFactory {
  constructor() {
    console.log('constructor')
  }
  public async createBullOptions() {
    console.log('createBullOptions');

    return {
      redis: {
        host: 'localhost',
        port: 6379,
      },
    };
  }
}