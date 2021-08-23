import { Test, TestingModule } from '@nestjs/testing';
import { CreditCheckController } from './credit-check.controller';
import { CreditCheckService } from './credit-check.service';

describe('CreditCheckController', () => {
  let controller: CreditCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditCheckController],
      providers: [CreditCheckService],
    }).compile();

    controller = module.get<CreditCheckController>(CreditCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
