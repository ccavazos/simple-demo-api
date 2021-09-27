import { Injectable } from '@nestjs/common';
import { CreateCreditCheckRequestDto, CreateCreditCheckResponseDto } from './dto/create-credit-check.dto';

@Injectable()
export class CreditCheckService {
  create(createCreditCheckDto: CreateCreditCheckRequestDto) {
    const lastChar = createCreditCheckDto.referenceId.substring(createCreditCheckDto.referenceId.length - 1);
    let credit: number;
    let creditScore: number;
    switch (lastChar) {
      case '0':
        credit = 10000;
        creditScore = 10;
        break;
      case '1':
        credit = 11000;
        creditScore = 11;
        break;
      case '2':
        credit = 12000;
        creditScore = 22;
        break;
      case '3':
        credit = 13000;
        creditScore = 33;
        break;
      case '4':
        credit = 14000;
        creditScore = 44;
        break;
      case '5':
        credit = 15000;
        creditScore = 55;
        break;
      case '6':
        credit = 16000;
        creditScore = 66;
        break;
      case '7':
        credit = 17000;
        creditScore = 77;
        break;
      case '8':
        credit = 18000;
        creditScore = 88;
      case '9':
        credit = 19000;
        creditScore = 99;
        break;
      default:
        credit = 1000;
        creditScore = 5;
        break;
    }
    const creditCheck: CreateCreditCheckResponseDto = {
      comment: `Credit is ${credit} because Reference ID ends with ${lastChar}`,
      isAddressCurrent: true,
      preApprovedCreditAmount: credit,
      maxCreditRecommendedAmount: credit * 5,
      creditScore: creditScore
    };
    return creditCheck;
  }
}
