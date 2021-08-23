import { Module } from '@nestjs/common';
import { CreditCheckService } from './credit-check.service';
import { CreditCheckController } from './credit-check.controller';

@Module({
  controllers: [CreditCheckController],
  providers: [CreditCheckService],
})
export class CreditCheckModule {}
