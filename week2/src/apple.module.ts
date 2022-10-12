import { Module } from '@nestjs/common';
import { AppleService } from './apple.service';

/**
 * `exports`으로 AppleService도 외부에 접근 가능한 상태
 * - module provider => 1:n 관계
 *   - 일을 하는 주체는 provider (하나의 모듈에 속해 있는)
 *   - provider가 다른 provider와 같이 일을 해야하는 경우, module을 export해서 module 전체를 갖다 쓴다
 */
@Module({
  providers: [AppleService],
  exports: [AppleService],
})
export class AppleModule {}
