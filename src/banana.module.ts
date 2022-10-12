import { Module } from '@nestjs/common';
import { BananaService } from './banana.service';

@Module({
  providers: [BananaService],
})
export class BananaModule {}
