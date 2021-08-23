import { Injectable } from '@nestjs/common';
import { CreateCreditCheckRequestDto, CreateCreditCheckResponseDto } from './dto/create-credit-check.dto';

@Injectable()
export class CreditCheckService {
  create(createCreditCheckDto: CreateCreditCheckRequestDto) {
    const lastChar = createCreditCheckDto.customerId.substring(createCreditCheckDto.customerId.length - 1);
    let credit: number;
    switch (lastChar) {
      case '0':
        credit = 10000;
        break;
      case '1':
        credit = 11000;
        break;
      case '2':
        credit = 12000;
        break;
      case '3':
        credit = 13000;
        break;
      case '4':
        credit = 14000;
        break;
      case '5':
        credit = 15000;
        break;
      case '6':
        credit = 16000;
        break;
      case '7':
        credit = 17000;
        break;
      case '8':
        credit = 18000;
      case '9':
        credit = 19000;
        break;
      default:
        credit = 1000;
        break;
    }
    const creditCheck: CreateCreditCheckResponseDto = {
      credit,
    };
    return creditCheck;
  }
}
