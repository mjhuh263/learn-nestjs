import { Module } from '@nestjs/common';
import { AppleModule } from './apple.module';
import { BananaService } from './banana.service';

@Module({
  imports: [AppleModule],
  providers: [BananaService],
})
export class BananaModule {}
