import { Injectable } from '@nestjs/common';
import { AppleService } from './apple.service';

@Injectable()
export class BananaService {
  constructor(private readonly appleService: AppleService) {}
}
