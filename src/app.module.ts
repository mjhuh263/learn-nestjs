import { Module } from '@nestjs/common';
import { AppleModule } from './apple.module';
import { BananaModule } from './banana.module';

@Module({
  imports: [AppleModule, BananaModule],
})
export class AppModule {}
