import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCheckModule } from './credit-check/credit-check.module';

@Module({
  imports: [CreditCheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
